// src/app/uslugi/migracje-sklepow/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migracja sklepu internetowego | Z WooCommerce na własne rozwiązanie",
  description:
    "Migracja sklepu z WooCommerce, PrestaShop, Shopify na nowoczesne rozwiązanie. Zachowanie SEO, 0% utraty danych, szybsza strona.",
  keywords:
    "migracja sklepu, migracja WooCommerce, migracja PrestaShop, migracja e-commerce, przeniesienie sklepu",
  alternates: {
    canonical: "https://www.karol-leszczynski.pl/uslugi/migracje-sklepow",
  },
  openGraph: {
    title: "Migracja sklepu internetowego",
    description:
      "Przeniosę Twój sklep na szybszą platformę. +40% wzrost sprzedaży po migracji.",
    url: "https://www.karol-leszczynski.pl/uslugi/migracje-sklepow",
  },
};

export default function MigracjeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
