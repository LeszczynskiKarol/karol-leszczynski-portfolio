// src/app/uslugi/sklepy-internetowe-torun/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sklepy internetowe Toruń | E-commerce Bydgoszcz",
  description:
    "Tworzenie sklepów internetowych w Toruniu. WooCommerce, własne rozwiązania Node.js, integracje płatności, Allegro. Lokalne wsparcie.",
  keywords:
    "sklep internetowy Toruń, e-commerce Toruń, WooCommerce Toruń, sklep online Bydgoszcz, tworzenie sklepów internetowych",
  alternates: {
    canonical:
      "https://www.karol-leszczynski.pl/uslugi/sklepy-internetowe-torun",
  },
  openGraph: {
    title: "Sklepy internetowe Toruń",
    description:
      "Profesjonalne sklepy internetowe dla firm z Torunia i okolic. Od 4990 zł.",
    url: "https://www.karol-leszczynski.pl/uslugi/sklepy-internetowe-torun",
  },
};

export default function SklepyTorunLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
