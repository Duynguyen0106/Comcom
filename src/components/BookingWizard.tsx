"use client";

import { FormEvent, useMemo, useState } from "react";
import clsx from "clsx";
import { seatingOptions, timeSlots } from "@/lib/booking-options";
import { restaurant } from "@/lib/restaurant";

type Step = 1 | 2 | 3 | 4;

function tomorrowISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

export function BookingWizard() {
  const [step, setStep] = useState<Step>(1);
  const [date, setDate] = useState(tomorrowISO());
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState("");
  const [seating, setSeating] = useState<string>(seatingOptions[0].id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  const seatingLabel = useMemo(
    () => seatingOptions.find((s) => s.id === seating)?.label ?? seating,
    [seating]
  );

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          guests,
          time,
          seating: seatingLabel,
          name,
          email,
          phone,
          notes,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Booking failed");
      setReference(data.reference);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Booking failed");
    } finally {
      setSubmitting(false);
    }
  }

  if (reference) {
    return (
      <div className="border border-gold/40 bg-[#14110e] p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.16em] text-gold">Confirmed</p>
        <h2 className="mt-3 font-display text-4xl text-foreground">
          Thanks for your reservation
        </h2>
        <p className="mt-4 text-lg font-light text-muted">
          Your booking reference is{" "}
          <span className="font-medium text-gold">{reference}</span>. Please save
          or screenshot this page. The restaurant has been notified; email
          confirmation follows when messaging is enabled.
        </p>
        <dl className="mt-8 grid gap-3 text-base text-muted-light sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted">Venue</dt>
            <dd className="mt-1 text-foreground">Com Com Battersea</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted">When</dt>
            <dd className="mt-1 text-foreground">
              {date} · {time}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted">Guests</dt>
            <dd className="mt-1 text-foreground">{guests}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted">Seating</dt>
            <dd className="mt-1 text-foreground">{seatingLabel}</dd>
          </div>
        </dl>
        <a
          href={restaurant.location.phoneHref}
          className="mt-8 inline-flex text-sm uppercase tracking-[0.14em] text-gold"
        >
          Call {restaurant.location.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <form
        onSubmit={submit}
        className="border border-white/10 bg-[#14110e] p-6 sm:p-8"
      >
        <div className="mb-8 flex flex-wrap gap-2">
          {[
            { n: 1 as Step, label: "Venue" },
            { n: 2 as Step, label: "Time" },
            { n: 3 as Step, label: "Seating" },
            { n: 4 as Step, label: "Details" },
          ].map((s) => (
            <button
              key={s.n}
              type="button"
              onClick={() => {
                if (s.n < step) setStep(s.n);
              }}
              className={clsx(
                "px-3 py-1.5 text-xs uppercase tracking-[0.14em]",
                step === s.n
                  ? "bg-gold text-background"
                  : step > s.n
                    ? "border border-gold/40 text-gold"
                    : "border border-white/15 text-muted"
              )}
            >
              {s.n}. {s.label}
            </button>
          ))}
        </div>

        <p className="text-sm text-muted">
          Step {step} of 4
          {step === 1 && " · Date & guests"}
          {step === 2 && " · Choose a time"}
          {step === 3 && " · Seating preference"}
          {step === 4 && " · Your details"}
        </p>

        {step === 1 && (
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-gold">Venue</p>
              <p className="mt-2 font-display text-2xl text-foreground">
                Com Com · Battersea
              </p>
              <p className="mt-1 text-sm text-muted">
                {restaurant.location.addressLine1},{" "}
                {restaurant.location.addressLine2}
              </p>
            </div>
            <label className="block">
              <span className="text-sm uppercase tracking-[0.12em] text-muted">
                Date
              </span>
              <input
                type="date"
                required
                min={tomorrowISO()}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-foreground outline-none focus:border-gold"
              />
            </label>
            <label className="block">
              <span className="text-sm uppercase tracking-[0.12em] text-muted">
                Guests
              </span>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="mt-2 w-full border border-white/15 bg-background px-4 py-3 text-foreground outline-none focus:border-gold"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-background"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="mt-6">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setTime(slot)}
                  className={clsx(
                    "border px-3 py-3 text-sm transition",
                    time === slot
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-white/15 text-muted-light hover:border-white/40"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="border border-white/20 px-5 py-3 text-sm uppercase tracking-[0.12em]"
              >
                Back
              </button>
              <button
                type="button"
                disabled={!time}
                onClick={() => setStep(3)}
                className="bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-background disabled:opacity-40"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="mt-6 space-y-3">
            {seatingOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSeating(opt.id)}
                className={clsx(
                  "flex w-full items-center justify-between border px-4 py-4 text-left transition",
                  seating === opt.id
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-white/15 text-muted-light hover:border-white/40"
                )}
              >
                <span>{opt.label}</span>
                {seating === opt.id ? <span aria-hidden>✓</span> : null}
              </button>
            ))}
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="border border-white/20 px-5 py-3 text-sm uppercase tracking-[0.12em]"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-background"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm uppercase tracking-[0.12em] text-muted">
                Full name
              </span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 outline-none focus:border-gold"
              />
            </label>
            <label className="block">
              <span className="text-sm uppercase tracking-[0.12em] text-muted">
                Email
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 outline-none focus:border-gold"
              />
            </label>
            <label className="block">
              <span className="text-sm uppercase tracking-[0.12em] text-muted">
                Phone
              </span>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 outline-none focus:border-gold"
              />
            </label>
            <label className="block">
              <span className="text-sm uppercase tracking-[0.12em] text-muted">
                Special requests
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Allergies, celebrations, accessibility…"
                className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 outline-none focus:border-gold"
              />
            </label>
            {error ? <p className="text-sm text-red-300">{error}</p> : null}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="border border-white/20 px-5 py-3 text-sm uppercase tracking-[0.12em]"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-background disabled:opacity-50"
              >
                {submitting ? "Booking…" : "Confirm reservation"}
              </button>
            </div>
          </div>
        )}
      </form>

      <aside className="border border-white/10 p-6 sm:p-8">
        <h2 className="text-sm uppercase tracking-[0.16em] text-gold">
          Your reservation
        </h2>
        <p className="mt-4 font-display text-2xl text-foreground">Battersea</p>
        <p className="mt-1 text-sm text-muted">
          {restaurant.location.addressLine1}, {restaurant.location.addressLine2}
        </p>
        <dl className="mt-8 space-y-4 text-base">
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted">Guests</dt>
            <dd className="text-foreground">{guests}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted">Date</dt>
            <dd className="text-foreground">{date || "—"}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted">Time</dt>
            <dd className="text-foreground">{time || "—"}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted">Seating</dt>
            <dd className="text-foreground">{seatingLabel}</dd>
          </div>
        </dl>
        <p className="mt-8 text-sm font-light leading-relaxed text-muted">
          Online bookings require at least 3 hours’ notice. You will receive a
          booking reference on the next screen.
        </p>
      </aside>
    </div>
  );
}
