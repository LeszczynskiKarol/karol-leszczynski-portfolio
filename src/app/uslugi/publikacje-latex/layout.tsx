// src/app/uslugi/publikacje-latex/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publikacje LaTeX i Quarto | Skład książek i prac naukowych",
  description:
    "Profesjonalny skład publikacji w LaTeX i Quarto. Książki, prace naukowe, zeszyty ćwiczeń. Gotowe do druku PDF.",
  keywords:
    "LaTeX publikacje, Quarto skład, skład książek, prace naukowe LaTeX, zeszyty ćwiczeń, DTP LaTeX",
  alternates: {
    canonical: "https://www.karol-leszczynski.pl/uslugi/publikacje-latex",
  },
  openGraph: {
    title: "Publikacje LaTeX i Quarto",
    description:
      "Profesjonalny skład publikacji naukowych i edukacyjnych. 11 zrealizowanych publikacji.",
    url: "https://www.karol-leszczynski.pl/uslugi/publikacje-latex",
  },
};

export default function PublikacjeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
