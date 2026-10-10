import { NextResponse } from "next/server";
import { createBooking } from "@/lib/bookings";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["date", "guests", "time", "seating", "name", "email", "phone"];
    for (const key of required) {
      if (body[key] === undefined || body[key] === null || body[key] === "") {
        return NextResponse.json(
          { error: `Missing field: ${key}` },
          { status: 400 }
        );
      }
    }

    const guests = Number(body.guests);
    if (!Number.isFinite(guests) || guests < 1 || guests > 12) {
      return NextResponse.json(
        { error: "Guests must be between 1 and 12" },
        { status: 400 }
      );
    }

    const booking = await createBooking({
      date: String(body.date),
      guests,
      time: String(body.time),
      seating: String(body.seating),
      name: String(body.name).trim(),
      email: String(body.email).trim(),
      phone: String(body.phone).trim(),
      notes: body.notes ? String(body.notes).trim() : "",
    });

    return NextResponse.json({
      reference: booking.reference,
      booking,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to create booking" },
      { status: 500 }
    );
  }
}
