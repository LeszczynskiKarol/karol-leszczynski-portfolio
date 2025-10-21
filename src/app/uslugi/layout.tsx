// src/app/uslugi/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi programistyczne Toruń, Bydgoszcz | Full-Stack Developer",
  description:
    "Kompleksowe usługi programistyczne w Toruniu i Bydgoszczy. Strony internetowe, sklepy online, aplikacje webowe, integracje AI, automatyzacja. 15 lat doświadczenia.",
  keywords:
    "usługi programistyczne Toruń, usługi IT Bydgoszcz, programista Toruń, developer Bydgoszcz, tworzenie stron Toruń, aplikacje webowe, sklepy internetowe, integracje AI",
  alternates: {
    canonical: "https://www.karol-leszczynski.pl/uslugi",
  },
  openGraph: {
    title: "Usługi programistyczne Toruń, Bydgoszcz",
    description:
      "Profesjonalne usługi IT dla firm. Od stron WWW po zaawansowane platformy SaaS z AI. Lokalne wsparcie.",
    url: "https://www.karol-leszczynski.pl/uslugi",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "https://www.karol-leszczynski.pl/og-uslugi.jpg",
        width: 1200,
        height: 630,
        alt: "Usługi programistyczne - Karol Leszczyński",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Usługi programistyczne Toruń, Bydgoszcz",
    description: "Kompleksowe rozwiązania IT dla Twojej firmy",
    images: ["https://www.karol-leszczynski.pl/og-uslugi.jpg"],
  },
};

export default function UslugiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
