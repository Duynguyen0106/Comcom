import type { Metadata } from "next";
import type { ReactNode } from "react";
import { restaurant } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        How we handle your personal information when you use our website and
        booking service.
      </p>
      <h2>1. Who we are</h2>
      <p>
        {restaurant.fullName} operates Vietnamese dining at{" "}
        {restaurant.location.addressLine1}, {restaurant.location.addressLine2}.
        We are the data controller for personal information collected through
        this website and our online reservation system.
      </p>
      <p>
        For privacy enquiries, contact{" "}
        <a href={`mailto:${restaurant.location.email}`}>
          {restaurant.location.email}
        </a>{" "}
        or call {restaurant.location.phone}.
      </p>
      <h2>2. Information we collect</h2>
      <ul>
        <li>Your name, email address, and telephone number</li>
        <li>
          Reservation details: date, time, party size, venue, and seating
          preference
        </li>
        <li>Special requests you choose to provide</li>
        <li>Booking reference and status</li>
        <li>
          Technical data when you use the site (browser type, IP address, pages
          visited) through our hosting provider
        </li>
      </ul>
      <h2>3. How we use your data</h2>
      <p>
        We use your information to process reservations, contact you about your
        booking, maintain customer records for service, and keep our website
        secure. Lawful bases include performance of a contract, consent, and
        legitimate interests.
      </p>
      <h2>4. Sharing</h2>
      <p>
        We do not sell your personal data. Bookings are stored securely for
        restaurant operations. We may disclose information if required by law.
      </p>
      <h2>5. Your rights</h2>
      <p>
        Under UK GDPR you may request access, correction, deletion, or
        restriction of your personal data. Contact us using the details above.
      </p>
      <h2>6. Retention</h2>
      <p>
        Booking records are retained for as long as needed to manage
        reservations and meet legal obligations, then deleted or anonymised.
      </p>
    </LegalShell>
  );
}

function LegalShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
        Legal
      </p>
      <h1 className="mt-3 font-display text-5xl text-foreground">{title}</h1>
      <div className="prose-comcom mt-10 space-y-4 text-base font-light leading-relaxed text-muted [&_a]:text-gold [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
