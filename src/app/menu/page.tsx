import type { Metadata } from "next";
import Link from "next/link";
import { menuCategories, type MenuTag } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse the Com Com menu — starters, salads, pho & noodles, and chef specials in Battersea.",
};

const tagStyles: Record<MenuTag, string> = {
  Signature: "border-gold/50 text-gold",
  GF: "border-white/20 text-muted-light",
  V: "border-emerald-500/40 text-emerald-200",
  Vg: "border-emerald-500/40 text-emerald-200",
  Mild: "border-orange-400/40 text-orange-200",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
        Cuisine
      </p>
      <h1 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">
        The Menu
      </h1>
      <p className="mt-4 max-w-2xl text-lg font-light text-muted">
        Vietnamese street-food classics and chef specials. Prices may vary —
        ask your server for today’s details.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {menuCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="border border-white/15 px-4 py-2 text-sm uppercase tracking-[0.12em] text-muted-light transition hover:border-gold hover:text-gold"
          >
            {cat.name}
          </a>
        ))}
      </div>

      <div className="mt-16 space-y-20">
        {menuCategories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
              <h2 className="font-display text-3xl text-gold sm:text-4xl">
                {category.name}
              </h2>
              <p className="text-sm uppercase tracking-[0.14em] text-muted">
                {category.items.length} dishes
              </p>
            </div>
            <ul className="mt-8 divide-y divide-white/10">
              {category.items.map((item) => (
                <li
                  key={item.id}
                  className="grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:gap-8"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-medium text-foreground">
                        {item.name}
                      </h3>
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className={`border px-2 py-0.5 text-[11px] uppercase tracking-[0.12em] ${tagStyles[tag]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 max-w-2xl text-base font-light leading-relaxed text-muted">
                      {item.description}
                    </p>
                    {item.options ? (
                      <ul className="mt-3 space-y-1 text-sm text-muted-light">
                        {item.options.map((opt) => (
                          <li key={opt}>· {opt}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <p className="text-lg font-medium text-gold sm:text-right">
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-20 border border-white/10 p-8 text-center">
        <p className="text-lg font-light text-muted">
          Ready to join us? Reserve a table or call for same-day seating.
        </p>
        <Link
          href="/book"
          className="mt-6 inline-flex bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-background transition hover:bg-gold-light"
        >
          Book a Table
        </Link>
      </div>
    </div>
  );
}
