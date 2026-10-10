import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
        Legal
      </p>
      <h1 className="mt-3 font-display text-5xl text-foreground">
        Cookie Policy
      </h1>
      <div className="mt-10 space-y-4 text-base font-light leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground">
        <p>
          This site uses essential cookies and similar technologies required to
          run the website and reservation flow securely.
        </p>
        <h2>Essential cookies</h2>
        <p>
          These support basic functions such as page navigation, security, and
          remembering progress in the booking form where applicable. The site
          cannot function properly without them.
        </p>
        <h2>Analytics</h2>
        <p>
          If analytics tools are added later, we will update this policy and,
          where required, ask for consent before non-essential cookies are set.
        </p>
        <h2>Managing cookies</h2>
        <p>
          You can control cookies through your browser settings. Blocking
          essential cookies may affect booking functionality.
        </p>
      </div>
    </div>
  );
}
