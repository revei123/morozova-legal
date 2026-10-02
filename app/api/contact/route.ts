import { NextResponse } from "next/server";
import { validateBooking, type BookingPayload } from "@/lib/contact";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Partial<BookingPayload> | null;
  if (!body) return NextResponse.json({ error: "Пустой запрос." }, { status: 400 });
  const error = validateBooking(body);
  if (error) return NextResponse.json({ error }, { status: 400 });
  return NextResponse.json({ ok: true });
}
