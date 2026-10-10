import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Visit Com Com Restaurant at 183-185 Battersea Park Road, London SW11 4LB.",
};

export default function LocationsPage() {
  const { location } = restaurant;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
        Visit
      </p>
      <h1 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">
        {restaurant.name} {location.label}
      </h1>
      <p className="mt-4 max-w-2xl text-lg font-light text-muted">
        {location.area}
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="relative min-h-[360px] overflow-hidden">
          <Image
            src="/images/exterior.jpg"
            alt="Com Com Restaurant exterior on Battersea Park Road"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-center border border-white/10 p-8 sm:p-10">
          <h2 className="font-display text-3xl text-gold">
            {restaurant.fullName}
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-foreground">
            {location.addressLine1}
            <br />
            {location.addressLine2}
          </p>
          <a
            href={location.phoneHref}
            className="mt-4 text-lg transition hover:text-gold"
          >
            {location.phone}
          </a>
          <a
            href={`mailto:${location.email}`}
            className="mt-1 text-base text-muted transition hover:text-gold"
          >
            {location.email}
          </a>
          <div className="mt-6 space-y-1 text-sm text-muted">
            {location.hoursLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-light">{restaurant.socialNote}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-background transition hover:bg-gold-light"
            >
              Reserve a table
            </Link>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-white/40 px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition hover:border-white"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 overflow-hidden border border-white/10">
        <iframe
          title="Map to Com Com Restaurant"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&z=15&output=embed`}
          className="h-[360px] w-full grayscale-[20%] contrast-125"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
