"use client";

import { useActionState, useState } from "react";

import { submitContactForm } from "@/actions/submit-contact";
import { FormField, getInputClassName } from "@/components/forms/form-field";
import { FormStatus } from "@/components/forms/form-status";
import { SelectField } from "@/components/forms/select-field";
import { SubmitButton } from "@/components/forms/submit-button";
import { TextareaField } from "@/components/forms/textarea-field";
import {
  contactServiceOptions,
  getEmptyContactValues,
  initialContactActionState,
} from "@/lib/validation/contact";

type VisibleContactValues = ReturnType<typeof getEmptyContactValues>;

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialContactActionState);
  const [values, setValues] = useState<VisibleContactValues>(getEmptyContactValues());
  const [startedAt] = useState(() => Date.now().toString());

  function updateField<Key extends keyof VisibleContactValues>(field: Key, value: VisibleContactValues[Key]) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  return (
    <form action={formAction} className="grid gap-6" noValidate>
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input autoComplete="off" id="website" name="website" tabIndex={-1} type="text" />
      </div>
      <input name="startedAt" type="hidden" value={startedAt} />

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          error={state.fieldErrors.fullName}
          htmlFor="fullName"
          label="Full Name"
          required
        >
          <input
            aria-invalid={Boolean(state.fieldErrors.fullName)}
            className={getInputClassName(Boolean(state.fieldErrors.fullName), "h-14")}
            id="fullName"
            name="fullName"
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Your full name"
            type="text"
            value={values.fullName}
          />
        </FormField>

        <FormField htmlFor="company" label="Company / Organization">
          <input
            className={getInputClassName(false, "h-14")}
            id="company"
            name="company"
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Your company or organization"
            type="text"
            value={values.company}
          />
        </FormField>

        <FormField error={state.fieldErrors.email} htmlFor="email" label="Email Address" required>
          <input
            aria-invalid={Boolean(state.fieldErrors.email)}
            className={getInputClassName(Boolean(state.fieldErrors.email), "h-14")}
            id="email"
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="name@company.com"
            type="email"
            value={values.email}
          />
        </FormField>

        <FormField error={state.fieldErrors.phone} htmlFor="phone" label="Phone Number">
          <input
            aria-invalid={Boolean(state.fieldErrors.phone)}
            className={getInputClassName(Boolean(state.fieldErrors.phone), "h-14")}
            id="phone"
            name="phone"
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="Optional"
            type="tel"
            value={values.phone}
          />
        </FormField>
      </div>

      <SelectField
        error={state.fieldErrors.service}
        id="service"
        label="Service Required"
        name="service"
        onChange={(value) => updateField("service", value)}
        options={contactServiceOptions.map((option) => ({
          value: option.value,
          label: option.label,
        }))}
        required
        value={values.service}
      />

      <TextareaField
        error={state.fieldErrors.message}
        helpText="For cybersecurity inquiries, do not send passwords or highly sensitive credentials through this form."
        id="message"
        label="Project Scope or Message"
        name="message"
        onChange={(value) => updateField("message", value)}
        required
        value={values.message}
      />

      <FormStatus state={state} />

      <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-brand-stone/68">
          Fields marked with <span className="text-brand-gold">*</span> are required.
        </p>
        <SubmitButton idleLabel="Send Inquiry" />
      </div>
    </form>
  );
}
