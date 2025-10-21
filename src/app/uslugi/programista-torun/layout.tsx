// src/app/uslugi/programista-torun/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programista, usługi programistyczne Toruń | Full-Stack Developer",
  description:
    "Szukasz programisty w Toruniu? 15 lat doświadczenia, aplikacje webowe, sklepy internetowe, AI. Lokalne wsparcie, spotkania osobiste. ☎ 509 370 772",
  keywords:
    "programista Toruń, developer Toruń, programista Bydgoszcz, tworzenie stron Toruń, aplikacje webowe Toruń, Full-Stack Developer Kujawsko-Pomorskie",
  alternates: {
    canonical: "https://www.karol-leszczynski.pl/uslugi/programista-torun",
  },
  openGraph: {
    title: "Programista Toruń | Karol Leszczyński",
    description:
      "Doświadczony z Torunia. 50+ projektów, spotkania osobiste, polska faktura VAT.",
    url: "https://www.karol-leszczynski.pl/uslugi/programista-torun",
  },
};

export default function ProgramistaTorunLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
