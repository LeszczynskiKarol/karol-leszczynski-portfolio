// src/app/uslugi/integracje-ai/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integracje AI dla firm | Wdrożenia sztucznej inteligencji",
  description:
    "Wdrażam AI w Twojej firmie. Chatboty, automatyzacja, personalizacja. ROI 250% w 6 miesięcy. OpenAI, Anthropic. Darmowy audyt AI.",
  keywords:
    "integracje AI, sztuczna inteligencja dla firm, chatbot AI, OpenAI dla biznesu, Anthropic Claude, automatyzacja AI",
  alternates: {
    canonical: "https://www.karol-leszczynski.pl/uslugi/integracje-ai",
  },
  openGraph: {
    title: "Integracje AI dla firm",
    description:
      "Automatyzuj procesy które zabierają 80% czasu zespołu. Wdrożenie AI w 2-4 tygodnie.",
    url: "https://www.karol-leszczynski.pl/uslugi/integracje-ai",
  },
};

export default function IntegrajeAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
