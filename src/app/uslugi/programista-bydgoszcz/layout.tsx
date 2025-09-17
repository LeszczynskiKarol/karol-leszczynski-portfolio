// src/app/uslugi/programista-bydgoszcz/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programista Bydgoszcz | Full-Stack Developer | Tworzenie aplikacji",
  description:
    "Doświadczony programista w Bydgoszczy. Full-Stack Developer z 15-letnim stażem. Tworzenie aplikacji webowych, systemów dla firm, integracje API. React, Node.js, TypeScript. Tel: 509 370 772",
  keywords:
    "programista Bydgoszcz, developer Bydgoszcz, full stack developer Bydgoszcz, tworzenie aplikacji Bydgoszcz, programista webowy Bydgoszcz, web developer Bydgoszcz, programista React Bydgoszcz, programista Node.js Bydgoszcz, software developer Bydgoszcz",
  alternates: {
    canonical: "https://www.karol-leszczynski.pl/uslugi/programista-bydgoszcz",
  },
  openGraph: {
    title: "Programista Bydgoszcz - Karol Leszczyński | Full-Stack Developer",
    description:
      "Senior Full-Stack Developer z Bydgoszczy. 15+ lat doświadczenia, 50+ projektów. Aplikacje webowe, e-commerce, SaaS. Lokalne wsparcie dla firm.",
    url: "https://www.karol-leszczynski.pl/uslugi/programista-bydgoszcz",
    type: "website",
    locale: "pl_PL",
    siteName: "Karol Leszczyński - Programista",
    images: [
      {
        url: "https://www.karol-leszczynski.pl/og-programista-bydgoszcz.jpg",
        width: 1200,
        height: 630,
        alt: "Programista Bydgoszcz - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Programista, usługi programistyczne Bydgoszcz | Full-Stack Developer",
    description:
      "Profesjonalne usługi programistyczne w Bydgoszczy. React, Node.js, TypeScript. Aplikacje webowe na miarę.",
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
  category: "Software Development",
  classification: "Technology Services",
  creator: "Karol Leszczyński",
  publisher: "Karol Leszczyński",
  verification: {
    google: "google-site-verification-code",
  },
};

export default function ProgramistaBydgoszczLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
