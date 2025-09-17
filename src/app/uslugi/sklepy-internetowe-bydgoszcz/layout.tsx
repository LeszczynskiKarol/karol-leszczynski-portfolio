// src/app/uslugi/sklepy-internetowe-bydgoszcz/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sklepy internetowe Bydgoszcz - tworzenie i projektowanie sklepów e-commerce",
  description:
    "Profesjonalne tworzenie sklepów internetowych w Bydgoszczy. Sklepy e-commerce, platformy sprzedażowe online, integracje płatności. Next.js, React, WooCommerce. Realizacja do 21 dni. Tel: 509 370 772",
  keywords:
    "sklepy internetowe Bydgoszcz, ecommerce Bydgoszcz, tworzenie sklepów www Bydgoszcz, projektowanie sklepów internetowych, sklep online Bydgoszcz, platforma e-commerce Bydgoszcz, WooCommerce Bydgoszcz, sklep internetowy na zamówienie Bydgoszcz",
  alternates: {
    canonical:
      "https://www.karol-leszczynski.pl/uslugi/sklepy-internetowe-bydgoszcz",
  },
  openGraph: {
    title:
      "Sklepy internetowe Bydgoszcz - tworzenie sklepów e-commerce | Karol Leszczyński",
    description:
      "Profesjonalne sklepy internetowe dla firm z Bydgoszczy. Nowoczesne platformy e-commerce, integracje płatności, zarządzanie produktami. 15 lat doświadczenia, lokalne wsparcie.",
    url: "https://www.karol-leszczynski.pl/uslugi/sklepy-internetowe-bydgoszcz",
    type: "website",
    locale: "pl_PL",
    siteName: "Karol Leszczyński - Web Developer",
    images: [
      {
        url: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/karol_leszczynski_copywriter.jpeg",
        width: 1200,
        height: 630,
        alt: "Sklepy internetowe Bydgoszcz - tworzenie e-commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sklepy internetowe Bydgoszcz - e-commerce na zamówienie",
    description:
      "Profesjonalne sklepy online dla przedsiębiorców z Bydgoszczy. Nowoczesne platformy e-commerce, szybkie, bezpieczne, skuteczne w sprzedaży.",
    images: [
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/karol_leszczynski_copywriter.jpeg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: "Karol Leszczyński",
      url: "https://www.karol-leszczynski.pl",
    },
  ],
  category: "E-commerce Development",
  classification: "Business",
  creator: "Karol Leszczyński",
  publisher: "Karol Leszczyński",
  verification: {
    google: "google-site-verification-code",
  },
};

export default function SklepyBydgoszczLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
