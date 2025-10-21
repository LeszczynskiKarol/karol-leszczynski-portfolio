// src/app/uslugi/automatyzacja-procesow/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatyzacja procesów biznesowych | Make.com, Zapier",
  description:
    "Automatyzuję procesy biznesowe. Łączę aplikacje bez kodowania. Make.com, Zapier, Airtable. 10h pracy tygodniowo zaoszczędzone. Wdrożenie w 3-7 dni.",
  keywords:
    "automatyzacja procesów, Make.com, Zapier, workflow automation, automatyzacja biznesu, integracje aplikacji",
  alternates: {
    canonical: "https://www.karol-leszczynski.pl/uslugi/automatyzacja-procesow",
  },
  openGraph: {
    title: "Automatyzacja procesów biznesowych",
    description:
      "Połącz wszystkie narzędzia w jeden sprawny system. Gmail + Slack + CRM = workflow który działa sam.",
    url: "https://www.karol-leszczynski.pl/uslugi/automatyzacja-procesow",
  },
};

export default function AutomatyzacjaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
