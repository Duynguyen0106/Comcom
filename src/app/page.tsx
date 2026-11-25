import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { restaurant, signatureDishes } from "@/lib/restaurant";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <Image
          src="/images/hero-pho.jpg"
          alt="Vietnamese dishes at Com Com Restaurant Battersea"
          fill
          priority
          className="object-cover animate-kenburns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--hero-overlay)] via-[var(--hero-overlay)]/55 to-black/25" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
          <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.22em] text-gold-light">
            London · {restaurant.location.label}
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            {restaurant.headline}
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-lg font-light leading-relaxed text-muted-light">
            {restaurant.subheadline}
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-gold px-7 py-3.5 text-base font-medium uppercase tracking-[0.12em] text-background transition hover:bg-gold-light"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center border border-white/80 px-7 py-3.5 text-base font-medium uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-foreground"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title={restaurant.storyTitle}
            description={restaurant.story[0]}
          />
          <p className="mt-4 max-w-xl text-lg font-light leading-relaxed text-muted">
            {restaurant.story[1]}
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-flex text-base font-medium uppercase tracking-[0.14em] text-gold transition hover:text-gold-light"
          >
            The Menu →
          </Link>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/exterior.jpg"
            alt="Com Com Restaurant storefront on Battersea Park Road"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c0a09]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Signature selections"
            title="Handcrafted dishes that define Com Com"
            description="Street-food classics prepared with care — from fragrant pho to generous rice and noodle plates."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {signatureDishes.map((dish) => (
              <article key={dish.name} className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl text-foreground">
                  {dish.name}
                </h3>
                <p className="mt-2 text-base font-light leading-relaxed text-muted">
                  {dish.description}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/menu"
            className="mt-12 inline-flex border border-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-gold transition hover:bg-gold hover:text-background"
          >
            View full menu
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Visit Us"
          title={`${restaurant.name} ${restaurant.location.label}`}
          description={restaurant.location.area}
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[320px] overflow-hidden">
            <Image
              src="/images/about-dining.jpg"
              alt="Dining at Com Com Battersea"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          <div className="flex flex-col justify-center border border-white/10 p-8 sm:p-10">
            <h3 className="font-display text-3xl text-gold">
              {restaurant.location.label}
            </h3>
            <p className="mt-4 text-base font-light text-foreground">
              {restaurant.location.addressLine1}
              <br />
              {restaurant.location.addressLine2}
            </p>
            <div className="mt-4 space-y-1 text-sm text-muted">
              {restaurant.location.hoursLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <a
              href={restaurant.location.phoneHref}
              className="mt-4 text-lg text-foreground transition hover:text-gold"
            >
              {restaurant.location.phone}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-background transition hover:bg-gold-light"
              >
                Reserve a table
              </Link>
              <Link
                href="/locations"
                className="inline-flex border border-white/40 px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition hover:border-white"
              >
                Plan your visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0c0a09]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Questions, hygiene & allergies"
            title="Helpful information before you dine with us"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/faq"
              className="border border-white/10 p-8 transition hover:border-gold/40"
            >
              <h3 className="font-display text-2xl text-foreground">
                Questions & Answers
              </h3>
              <p className="mt-3 text-base font-light text-muted">
                Reservations, opening hours, dietary requirements, parking, and
                more — {faqCount()} topics covered.
              </p>
              <span className="mt-6 inline-block text-sm uppercase tracking-[0.14em] text-gold">
                Read Q&A →
              </span>
            </Link>
            <Link
              href="/food-safety"
              className="border border-white/10 p-8 transition hover:border-gold/40"
            >
              <h3 className="font-display text-2xl text-foreground">
                Food hygiene & allergies
              </h3>
              <p className="mt-3 text-base font-light text-muted">
                Our food safety standards and allergen guidance for the 14 major
                allergens — please read if you or a guest has dietary needs.
              </p>
              <span className="mt-6 inline-block text-sm uppercase tracking-[0.14em] text-gold">
                Allergen info →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <Image
          src="/images/exterior.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
            Reservations
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl text-foreground sm:text-5xl">
            We look forward to welcoming you
          </h2>
          <p className="mt-4 max-w-xl text-lg font-light text-muted">
            Secure your table in moments. Select your preferred seating and
            receive a booking reference.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex bg-gold px-7 py-3.5 text-base font-medium uppercase tracking-[0.12em] text-background transition hover:bg-gold-light"
          >
            Book a Table
          </Link>
        </div>
      </section>
    </>
  );
}

function faqCount() {
  return 12;
}
