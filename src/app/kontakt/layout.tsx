// src/app/kontakt/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się ze mną. Karol Leszczyński - Full-Stack Developer z Torunia. ☎ 509 370 772 ✉ kontakt@karol-leszczynski.pl. Darmowa konsultacja.",
  keywords:
    "kontakt programista Toruń, kontakt developer Bydgoszcz, konsultacja IT",
  alternates: {
    canonical: "https://www.karol-leszczynski.pl/kontakt",
  },
  openGraph: {
    title: "Kontakt | Karol Leszczyński",
    description:
      "Skontaktuj się ze mną. Darmowa konsultacja dla firm z Torunia i Bydgoszczy.",
    url: "https://www.karol-leszczynski.pl/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
