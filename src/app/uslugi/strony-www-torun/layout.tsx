// src/app/uslugi/strony-www-torun/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strony WWW Toruń - tworzenie i projektowanie witryn internetowych",
  description:
    "Tworzenie stron internetowych w Toruniu. Nowoczesne, szybkie strony w Next.js i WordPress. RWD, SEO, lokalne wsparcie. Od 1990 zł.",
  keywords:
    "strony internetowe Toruń, strony www Toruń, tworzenie stron w Toruniu, projektowanie stron Toruń, strona firmowa Toruń",
  alternates: {
    canonical: "https://www.karol-leszczynski.pl/uslugi/strony-www-torun",
  },
  openGraph: {
    title: "Strony internetowe Toruń",
    description:
      "Nowoczesne strony internetowe dla firm z Torunia. Szybkie, responsywne, zoptymalizowane SEO.",
    url: "https://www.karol-leszczynski.pl/uslugi/strony-www-torun",
  },
};

export default function StronyTorunLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
