import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid monitoring payload." },
      { status: 400 },
    );
  }

  console.error("[client-monitoring]", body);

  return NextResponse.json({ ok: true });
}
