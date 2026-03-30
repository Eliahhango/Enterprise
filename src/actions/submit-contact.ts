"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  getServiceLabel,
  hasFieldErrors,
  normalizeContactFormData,
  validateContactValues,
  type ContactActionState,
  type ContactFormValues,
} from "@/lib/validation/contact";

const MIN_SUBMISSION_TIME_MS = 1500;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_SUBMISSIONS = 3;
const requestLog = new Map<string, number[]>();

export async function submitContactForm(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const values = normalizeContactFormData(formData);
  const fieldErrors = validateContactValues(values);

  if (hasFieldErrors(fieldErrors)) {
    return {
      status: "error",
      message: "Please review the highlighted fields and try again.",
      fieldErrors,
    };
  }

  if (values.website.length > 0) {
    return {
      status: "error",
      message: "We could not verify this submission. Please try again.",
      fieldErrors: {},
    };
  }

  const startedAt = Number(values.startedAt);

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_SUBMISSION_TIME_MS) {
    return {
      status: "error",
      message: "Please take a moment to review your details, then submit the form again.",
      fieldErrors: {},
    };
  }

  const requesterKey = await getRequesterKey(values);

  if (isRateLimited(requesterKey)) {
    return {
      status: "error",
      message:
        "Too many requests were sent from this source in a short time. Please wait a few minutes and try again.",
      fieldErrors: {},
    };
  }

  const deliveryResult = await deliverInquiry(values);

  if (!deliveryResult.ok) {
    return {
      status: "error",
      message:
        deliveryResult.reason === "missing-config"
          ? "Contact delivery is not configured yet. Add the required email environment variables, then try again."
          : "Your inquiry could not be delivered right now. Please try again shortly or contact us directly.",
      fieldErrors: {},
    };
  }

  redirect(`/thank-you?service=${encodeURIComponent(values.service)}`);
}

async function getRequesterKey(values: ContactFormValues) {
  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for");
  const realIp = headerStore.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0]?.trim() || realIp?.trim();

  return ip || values.email.toLowerCase();
}

function isRateLimited(key: string) {
  const now = Date.now();
  const attempts = requestLog.get(key) ?? [];
  const recentAttempts = attempts.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recentAttempts.length >= RATE_LIMIT_MAX_SUBMISSIONS) {
    requestLog.set(key, recentAttempts);
    return true;
  }

  requestLog.set(key, [...recentAttempts, now]);
  return false;
}

async function deliverInquiry(values: ContactFormValues) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  const replyTo = values.email;

  if (!apiKey || !to || !from) {
    return { ok: false as const, reason: "missing-config" as const };
  }

  const subject = `New ${getServiceLabel(values.service)} inquiry from ${values.fullName}`;
  const text = buildTextBody(values);
  const html = buildHtmlBody(values);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: replyTo,
        subject,
        text,
        html,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return { ok: false as const, reason: "delivery-failed" as const };
    }

    return { ok: true as const };
  } catch {
    return { ok: false as const, reason: "delivery-failed" as const };
  }
}

function buildTextBody(values: ContactFormValues) {
  return [
    `Service: ${getServiceLabel(values.service)}`,
    `Full Name: ${values.fullName}`,
    `Company / Organization: ${values.company || "Not provided"}`,
    `Email Address: ${values.email}`,
    `Phone Number: ${values.phone || "Not provided"}`,
    "",
    "Project Scope or Message:",
    values.message,
  ].join("\n");
}

function buildHtmlBody(values: ContactFormValues) {
  return `
    <div style="font-family: Arial, sans-serif; color: #161c24; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New ${escapeHtml(getServiceLabel(values.service))} inquiry</h2>
      <p><strong>Full Name:</strong> ${escapeHtml(values.fullName)}</p>
      <p><strong>Company / Organization:</strong> ${escapeHtml(values.company || "Not provided")}</p>
      <p><strong>Email Address:</strong> ${escapeHtml(values.email)}</p>
      <p><strong>Phone Number:</strong> ${escapeHtml(values.phone || "Not provided")}</p>
      <p><strong>Service:</strong> ${escapeHtml(getServiceLabel(values.service))}</p>
      <p><strong>Project Scope or Message:</strong></p>
      <p>${escapeHtml(values.message).replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
