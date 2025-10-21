// src/app/polityka-prywatnosci/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności strony karol-leszczynski.pl. Informacje o przetwarzaniu danych osobowych, cookies, RODO.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.karol-leszczynski.pl/polityka-prywatnosci",
  },
};

export default function PolitykaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
