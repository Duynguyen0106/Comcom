import Link from "next/link";
import { restaurant } from "@/lib/restaurant";

export function Footer() {
  const year = new Date().getFullYear();
  const { location } = restaurant;

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0c0a09]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl text-gold">{restaurant.name}</p>
          <p className="mt-3 max-w-sm text-base font-light leading-relaxed text-muted">
            Refined Vietnamese street food at Com Com Battersea. Fresh
            ingredients, authentic flavours, and warm hospitality.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
            Visit us
          </h2>
          <p className="mt-3 text-base font-light text-foreground">
            {location.addressLine1}
            <br />
            {location.addressLine2}
          </p>
          <p className="mt-3">
            <a
              href={location.phoneHref}
              className="text-base text-foreground transition hover:text-gold"
            >
              {location.phone}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${location.email}`}
              className="text-base text-muted transition hover:text-gold"
            >
              {location.email}
            </a>
          </p>
          <div className="mt-3 space-y-1 text-sm text-muted">
            {location.hoursLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-gold">
            Guest information
          </h2>
          <ul className="mt-3 space-y-2 text-base font-light">
            <li>
              <Link href="/faq" className="text-muted transition hover:text-gold">
                Questions & answers
              </Link>
            </li>
            <li>
              <Link
                href="/food-safety"
                className="text-muted transition hover:text-gold"
              >
                Food hygiene & allergies
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-muted transition hover:text-gold"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted transition hover:text-gold">
                Terms of use
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="text-muted transition hover:text-gold"
              >
                Cookie policy
              </Link>
            </li>
          </ul>
          <Link
            href="/book"
            className="mt-6 inline-flex border border-gold px-5 py-2.5 text-sm font-medium uppercase tracking-[0.12em] text-gold transition hover:bg-gold hover:text-background"
          >
            Reserve
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {restaurant.fullName}
          </p>
          <p className="flex gap-3">
            <Link href="/privacy" className="hover:text-gold">
              Privacy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-gold">
              Terms
            </Link>
            <span>·</span>
            <Link href="/cookies" className="hover:text-gold">
              Cookies
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
