import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Josefin_Sans,
  Playfair_Display,
} from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { restaurant } from "@/lib/restaurant";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${restaurant.name} | Vietnamese Street Food in Battersea`,
    template: `%s | ${restaurant.name}`,
  },
  description:
    "Authentic Vietnamese street food at Com Com, Battersea. Reserve your table for fragrant pho, crispy bánh xèo, and warm hospitality.",
  keywords: [
    "Com Com",
    "Vietnamese restaurant",
    "Battersea",
    "pho",
    "street food",
    "London",
  ],
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.fullName,
  servesCuisine: "Vietnamese",
  telephone: restaurant.location.phone,
  email: restaurant.location.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.location.addressLine1,
    addressLocality: "London",
    postalCode: "SW11 4LB",
    addressCountry: "GB",
  },
  acceptsReservations: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${josefin.variable} ${cormorant.variable} ${playfair.variable} luxury-grain flex min-h-full flex-col bg-background font-sans text-lg font-light text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
