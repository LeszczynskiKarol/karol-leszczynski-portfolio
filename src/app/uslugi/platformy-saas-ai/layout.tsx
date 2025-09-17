// src/app/uslugi/platformy-saas-ai/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platformy SaaS z AI | Tworzenie aplikacji SaaS",
  description:
    "Tworzę platformy SaaS wykorzystujące AI. Kompletne rozwiązania: backend, frontend, płatności, AI. MVP w 4-8 tygodni.",
  keywords:
    "platforma SaaS, aplikacja SaaS, SaaS development, tworzenie SaaS, SaaS z AI, MVP development",
  alternates: {
    canonical: "https://www.karol-leszczynski.pl/uslugi/platformy-saas-ai",
  },
  openGraph: {
    title: "Platformy SaaS z AI",
    description:
      "Stworzę Twoją platformę SaaS od podstaw. Integracje AI, system płatności, skalowalna architektura.",
    url: "https://www.karol-leszczynski.pl/uslugi/platformy-saas-ai",
  },
};

export default function SaaSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
