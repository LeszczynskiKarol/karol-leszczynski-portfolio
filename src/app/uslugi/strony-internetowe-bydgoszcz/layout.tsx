// src/app/uslugi/strony-internetowe-bydgoszcz/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tworzenie stron WWW Bydgoszcz - projektowanie witryn internetowych firmowych",
  description:
    "Profesjonalne tworzenie stron internetowych w Bydgoszczy. Firmowe strony WWW, sklepy online, aplikacje webowe. Next.js, React, WordPress. Realizacja do 21 dni. Tel: 509 370 772",
  keywords:
    "tworzenie stron internetowych Bydgoszcz, strony www Bydgoszcz, firmowe strony internetowe, tworzenie stron www, projektowanie stron Bydgoszcz, strona internetowa Bydgoszcz, web developer Bydgoszcz, programista stron Bydgoszcz",
  alternates: {
    canonical:
      "https://www.karol-leszczynski.pl/uslugi/strony-internetowe-bydgoszcz",
  },
  openGraph: {
    title: "Tworzenie stron internetowych Bydgoszcz | Karol Leszczyński",
    description:
      "Profesjonalne firmowe strony internetowe dla firm z Bydgoszczy. 15 lat doświadczenia, nowoczesne technologie, lokalne wsparcie. Darmowa wycena.",
    url: "https://www.karol-leszczynski.pl/uslugi/strony-internetowe-bydgoszcz",
    type: "website",
    locale: "pl_PL",
    siteName: "Karol Leszczyński - Web Developer",
    images: [
      {
        url: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/karol_leszczynski_copywriter.jpeg",
        width: 1200,
        height: 630,
        alt: "Tworzenie stron internetowych Bydgoszcz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tworzenie stron internetowych Bydgoszcz",
    description:
      "Firmowe strony WWW dla przedsiębiorców z Bydgoszczy. Nowoczesne, szybkie, skuteczne.",
    images: ["https://www.karol-leszczynski.pl/og-bydgoszcz.jpg"],
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
  category: "Web Development",
  classification: "Business",
  creator: "Karol Leszczyński",
  publisher: "Karol Leszczyński",
  verification: {
    google: "google-site-verification-code",
  },
};

export default function StronyBydgoszczLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
