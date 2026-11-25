import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food Hygiene & Allergies",
  description:
    "Food safety standards and allergen guidance at Com Com Restaurant, Battersea.",
};

const allergens = [
  {
    name: "Cereals containing gluten",
    detail:
      "Some noodles, spring roll wrappers, and marinades may contain wheat or gluten.",
  },
  {
    name: "Crustaceans & molluscs",
    detail: "Prawns, crab, and squid appear in several dishes and stocks.",
  },
  {
    name: "Eggs",
    detail: "Used in some batters, noodles, fried rice, and desserts.",
  },
  {
    name: "Fish",
    detail:
      "Fish sauce (nước mắm) is used widely in Vietnamese cooking and dipping sauces.",
  },
  {
    name: "Peanuts & tree nuts",
    detail: "Peanuts and nuts may be used as garnishes or in sauces.",
  },
  {
    name: "Soy",
    detail: "Soy sauce and tofu are common across the menu.",
  },
  {
    name: "Sesame",
    detail: "Sesame oil and seeds may be used in dressings and garnishes.",
  },
  {
    name: "Celery, mustard & sulphites",
    detail: "May be present in stocks, seasonings, or wine used in cooking.",
  },
];

export default function FoodSafetyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
        Your wellbeing
      </p>
      <h1 className="mt-3 font-display text-5xl text-foreground">
        Food Hygiene & Allergies
      </h1>
      <p className="mt-4 text-lg font-light text-muted">
        We take food safety seriously. Please read this information if you or a
        guest has allergies or dietary requirements.
      </p>
      <p className="mt-6 border border-gold/30 bg-gold/5 p-5 text-base text-muted-light">
        If you have a <strong className="text-foreground">severe food allergy</strong>,
        please speak to a manager before ordering. We cannot guarantee an
        allergen-free kitchen environment.
      </p>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-gold">Our hygiene commitment</h2>
        <div className="mt-6 space-y-6 text-base font-light leading-relaxed text-muted">
          <div>
            <h3 className="text-xl font-medium text-foreground">
              Food hygiene standards
            </h3>
            <p className="mt-2">
              Com Com follows UK food safety law and HACCP principles. Our
              kitchen maintains cleaning schedules, temperature controls, and
              staff training so every dish is prepared safely.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-foreground">
              Fresh ingredients
            </h3>
            <p className="mt-2">
              We source quality produce and proteins regularly. Broths and
              sauces are prepared in-house; herbs and garnishes are prepared
              fresh for service.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-foreground">Staff training</h3>
            <p className="mt-2">
              Food-handling staff receive allergen awareness training. If you
              have questions about how a dish is prepared, please ask your
              server before ordering.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-gold">Allergen information</h2>
        <p className="mt-4 text-base font-light text-muted">
          Under UK law, we provide information on 14 major allergens. The
          following may be present in our menu:
        </p>
        <ul className="mt-8 space-y-5">
          {allergens.map((a) => (
            <li key={a.name} className="border-b border-white/10 pb-5">
              <h3 className="text-lg font-medium text-foreground">{a.name}</h3>
              <p className="mt-1 text-base font-light text-muted">{a.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-gold">Important advice</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-base font-light text-muted">
          <li>
            A full allergen matrix is available on request — ask your server or
            manager.
          </li>
          <li>
            We cannot guarantee a completely allergen-free environment because
            ingredients are prepared in shared kitchens.
          </li>
          <li>
            If you have a severe allergy, please speak to us before ordering.
          </li>
          <li>
            Always declare allergies when booking online in special requests,
            and remind your server when you arrive.
          </li>
        </ul>
      </section>

      <Link
        href="/faq"
        className="mt-12 inline-flex text-sm uppercase tracking-[0.14em] text-gold"
      >
        ← Questions & Answers
      </Link>
    </div>
  );
}
