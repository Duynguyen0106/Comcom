"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Visit" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b transition duration-500",
        scrolled || open
          ? "border-white/10 bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="inline-block shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Com Com — Vietnamese Street Food"
            width={220}
            height={56}
            className="h-12 w-auto object-contain sm:h-14"
            priority
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex xl:gap-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative text-base font-medium uppercase tracking-[0.12em] transition-colors duration-300",
                pathname === link.href
                  ? "text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-gold/70"
                  : "text-white/95 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="hidden items-center justify-center border border-white px-6 py-3 text-base font-medium uppercase tracking-[0.1em] text-white transition duration-300 hover:bg-white hover:text-foreground lg:inline-flex"
          >
            Reserve
          </Link>
          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center rounded border border-white/30 text-white transition hover:border-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-background/95 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg uppercase tracking-[0.12em] text-white/95"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-2 inline-flex items-center justify-center border border-gold px-6 py-3 text-base font-medium uppercase tracking-[0.1em] text-gold"
            >
              Reserve
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
