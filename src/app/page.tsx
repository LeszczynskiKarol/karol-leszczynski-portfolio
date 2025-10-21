// src/app/page.tsx
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";
import { Navigation } from "@/components/layout/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karol Leszczyński | Full-Stack Developer & Digital Creator",
  description:
    "Portfolio Full-Stack Developera specjalizującego się w Next.js, React, Node.js, AWS. Tworzę aplikacje webowe, e-commerce i rozwiązania SaaS.",
  keywords:
    "Full-Stack Developer, Next.js, React, Node.js, AWS, E-commerce, SaaS, Toruń, Bydgoszcz",
  openGraph: {
    title: "Karol Leszczyński | Full-Stack Developer",
    description: "Portfolio Full-Stack Developera z 15-letnim doświadczeniem",
    url: "https://karol-leszczynski.pl",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Karol Leszczyński",
  jobTitle: "Full-Stack Developer",
  url: "https://www.karol-leszczynski.pl",
  image:
    "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/karol_leszczynski_copywriter.jpeg",
  telephone: "+48509370772",
  email: "kontakt@karol-leszczynski.pl",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toruń",
    addressRegion: "Kujawsko-Pomorskie",
    addressCountry: "PL",
  },

  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "Node.js",
    "AI Integration",
  ],
  offers: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Usługi programistyczne",
    },
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
