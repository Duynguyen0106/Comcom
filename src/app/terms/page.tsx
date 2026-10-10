import type { Metadata } from "next";
import { restaurant } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
        Legal
      </p>
      <h1 className="mt-3 font-display text-5xl text-foreground">Terms of Use</h1>
      <div className="mt-10 space-y-4 text-base font-light leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground">
        <p>
          By using the {restaurant.fullName} website you agree to these terms.
        </p>
        <h2>Website content</h2>
        <p>
          Menu items, prices, and opening hours are provided for guidance and
          may change. Please confirm important details with the restaurant when
          you book or visit.
        </p>
        <h2>Reservations</h2>
        <p>
          Online reservations are requests confirmed by booking reference.
          Please arrive on time. For changes or cancellations, call{" "}
          {restaurant.location.phone} with your reference.
        </p>
        <h2>Acceptable use</h2>
        <p>
          You agree not to misuse the site, attempt unauthorised access, or
          submit false reservation details.
        </p>
        <h2>Contact</h2>
        <p>
          {restaurant.location.addressLine1}, {restaurant.location.addressLine2}
          . Email {restaurant.location.email}.
        </p>
      </div>
    </div>
  );
}
