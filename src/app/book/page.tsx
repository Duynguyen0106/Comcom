import type { Metadata } from "next";
import { BookingWizard } from "@/components/BookingWizard";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book a table at Com Com Restaurant, Battersea. Choose date, time, and seating.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
        Reservations
      </p>
      <h1 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">
        Book a Table
      </h1>
      <p className="mt-4 max-w-2xl text-lg font-light text-muted">
        Choose your date, time, and seating. Online bookings require at least 3
        hours’ notice before your table time. We show a reference to save or
        print.
      </p>
      <div className="mt-12">
        <BookingWizard />
      </div>
    </div>
  );
}
