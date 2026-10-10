import type { Metadata } from "next";
import Link from "next/link";
import { faqItems } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Questions & Answers",
  description:
    "Reservations, opening hours, dietary requirements, and more at Com Com Battersea.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
        Guest information
      </p>
      <h1 className="mt-3 font-display text-5xl text-foreground">
        Questions & Answers
      </h1>
      <p className="mt-4 text-lg font-light text-muted">
        Everything you need to know before your visit — from booking to dietary
        requirements.
      </p>

      <div className="mt-14 space-y-14">
        {faqItems.map((group) => (
          <section key={group.category}>
            <h2 className="border-b border-white/10 pb-3 font-display text-3xl text-gold">
              {group.category}
            </h2>
            <dl className="mt-6 space-y-8">
              {group.items.map((item) => (
                <div key={item.q}>
                  <dt className="text-xl font-medium text-foreground">{item.q}</dt>
                  <dd className="mt-2 text-base font-light leading-relaxed text-muted">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap gap-4 border-t border-white/10 pt-10">
        <Link
          href="/book"
          className="inline-flex bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-background"
        >
          Book a table
        </Link>
        <Link
          href="/food-safety"
          className="inline-flex border border-white/30 px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white"
        >
          Food hygiene & allergies
        </Link>
      </div>
    </div>
  );
}
