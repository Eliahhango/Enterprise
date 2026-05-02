import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

import {
  getPathsForRevalidation,
  getTagsForRevalidation,
  type RevalidateContentType,
} from "@/lib/cms/revalidate";

const allowedTypes: RevalidateContentType[] = [
  "siteSettings",
  "homepage",
  "service",
  "caseStudy",
  "industry",
  "testimonial",
  "page",
];

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { ok: false, message: "REVALIDATE_SECRET is not configured." },
      { status: 500 },
    );
  }

  let body: { secret?: string; type?: string; slug?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  if (body.secret !== secret) {
    return NextResponse.json(
      { ok: false, message: "Invalid revalidation secret." },
      { status: 401 },
    );
  }

  if (!body.type || !allowedTypes.includes(body.type as RevalidateContentType)) {
    return NextResponse.json(
      { ok: false, message: "A valid content type is required." },
      { status: 400 },
    );
  }

  const type = body.type as RevalidateContentType;
  const slug = body.slug?.trim() || undefined;
  const paths = getPathsForRevalidation({ type, slug });
  const tags = getTagsForRevalidation({ type, slug });

  paths.forEach((path) => revalidatePath(path));
  tags.forEach((tag) => revalidateTag(tag, "max"));

  return NextResponse.json({
    ok: true,
    revalidated: {
      type,
      slug: slug ?? null,
      paths,
      tags,
    },
  });
}
