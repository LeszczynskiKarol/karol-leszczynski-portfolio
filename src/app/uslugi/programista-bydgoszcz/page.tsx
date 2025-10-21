// src/app/uslugi/programista-bydgoszcz/page.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Terminal,
  Bug,
  Layers,
  Server,
  Cloud,
  Lock,
  Smartphone,
  Globe,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Briefcase,
  GraduationCap,
  Coffee,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProgramistaBydgoszcz() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Programista, usługi programistyczne Bydgoszcz",
    description:
      "Profesjonalny programista w Bydgoszczy. Tworzenie aplikacji webowych, systemów dla firm, integracje API. 15 lat doświadczenia.",
    provider: {
      "@type": "Person",
      name: "Karol Leszczyński",
      jobTitle: "Senior Full-Stack Developer",
      telephone: "+48509370772",
      email: "kontakt@karol-leszczynski.pl",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bydgoszcz",
      addressRegion: "Kujawsko-Pomorskie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.1235",
      longitude: "18.0084",
    },
    areaServed: [{ "@type": "City", name: "Bydgoszcz" }],
    priceRange: "150-600 PLN/h",
    openingHours: "Mo-Fr 08:00-18:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
    },
  };

  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {/* Animated code-like particles */}
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-primary/20 font-mono text-xs"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 20 + 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {
                    ["</>", "{}", "[]", "()", "=>", "//"][
                      Math.floor(Math.random() * 6)
                    ]
                  }
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Bydgoszcz • Fordon • Błonie • Centrum
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Programista <span className="text-gradient">Bydgoszcz</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong>
                  Full-Stack Developer z Bydgoszczy do Twojej dyspozycji.
                </strong>{" "}
                Przekształcam pomysły biznesowe w działające aplikacje. Od
                prostych stron po złożone systemy enterprise - programuję
                rozwiązania, które napędzają biznes w erze cyfrowej.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Senior Developer 15+ lat</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Bydgoszcz i okolice</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Umowa B2B / zlecenie</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Omów projekt
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#portfolio"
                  className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Code2 className="w-5 h-5" />
                  Zobacz realizacje
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Developer z Bydgoszczy */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div {...fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Developer, który{" "}
                  <span className="text-gradient">rozumie Twój biznes</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nie jestem tylko programistą - jestem partnerem
                  technologicznym, który pomoże Ci wykorzystać potencjał
                  cyfryzacji
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        Od copywritera do Full-Stack Developera
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Moja droga zawodowa jest nietypowa. Przez 10 lat
                        pracowałem jako copywriter i specjalista SEO. Napisałem
                        ponad 5000 tekstów sprzedażowych, wypozycjonowałem setki
                        stron w Google.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        W 2021 roku postanowiłem zostać programistą. Intensywna
                        nauka, setki godzin kodowania, dziesiątki projektów.
                        Dziś łączę wiedzę marketingową z umiejętnościami
                        technicznymi.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Rezultat?</strong> Tworzę aplikacje, które
                        działają sprawnie technicznie, a jednocześnie skutecznie
                        realizują Twoje cele biznesowe.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                      <Briefcase className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold mb-2">Biznesowe myślenie</h4>
                      <p className="text-sm text-muted-foreground">
                        ROI, konwersja, KPI - znam język biznesu
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                      <Terminal className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold mb-2">Czysty kod</h4>
                      <p className="text-sm text-muted-foreground">
                        TypeScript, testy, dokumentacja, best practices
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                      <Coffee className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold mb-2">Lokalna współpraca</h4>
                      <p className="text-sm text-muted-foreground">
                        Spotkania w Bydgoszczy, szybki kontakt
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                      <GraduationCap className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold mb-2">Ciągły rozwój</h4>
                      <p className="text-sm text-muted-foreground">
                        Najnowsze technologie, kursy, certyfikaty
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Specjalizacje */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                W czym się <span className="text-gradient">specjalizuję</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kompleksowe usługi programistyczne dla firm z Bydgoszczy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Systemy dla firm",
                  icon: <Server />,
                  desc: "Nowoczesne rozwiązania usprawniające procesy biznesowe",
                  features: [
                    "Systemy CRM na miarę",
                    "Platformy B2B/B2C",
                    "Panele administracyjne",
                    "Systemy rezerwacji",
                    "Automatyzacja workflow",
                  ],
                },
                {
                  title: "Aplikacje webowe",
                  icon: <Globe />,
                  desc: "Nowoczesne aplikacje działające w przeglądarce",
                  features: [
                    "Progressive Web Apps",
                    "Single Page Applications",
                    "Real-time dashboards",
                    "Portale społecznościowe",
                    "Platformy e-learningowe",
                  ],
                },
                {
                  title: "E-commerce & SaaS",
                  icon: <TrendingUp />,
                  desc: "Sklepy internetowe i aplikacje subskrypcyjne",
                  features: [
                    "Sklepy headless commerce",
                    "Platformy marketplace",
                    "Systemy subskrypcji",
                    "Integracje płatności",
                    "Multi-tenant SaaS",
                  ],
                },
                {
                  title: "Integracje systemów",
                  icon: <GitBranch />,
                  desc: "Łączę różne systemy w spójną całość",
                  features: [
                    "REST API & GraphQL",
                    "Integracje ERP",
                    "Synchronizacja danych",
                    "Webhook automation",
                    "Legacy system migration",
                  ],
                },
                {
                  title: "DevOps & Cloud",
                  icon: <Cloud />,
                  desc: "Wdrożenia, hosting, monitoring aplikacji",
                  features: [
                    "AWS & Azure deployment",
                    "CI/CD pipelines",
                    "Docker & Kubernetes",
                    "Monitoring & logging",
                    "Optymalizacja kosztów",
                  ],
                },
                {
                  title: "Wsparcie & rozwój",
                  icon: <Bug />,
                  desc: "Utrzymanie i rozwój istniejących systemów",
                  features: [
                    "Code review & refactoring",
                    "Debugowanie błędów",
                    "Optymalizacja wydajności",
                    "Migracje technologiczne",
                    "Dokumentacja techniczna",
                  ],
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack technologiczny */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mój stack <span className="text-gradient">technologiczny</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pracuję z sprawdzonymi, nowoczesnymi technologiami
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    category: "Frontend Excellence",
                    icon: <Smartphone />,
                    techs: [
                      { name: "React 18", level: "✅" },
                      { name: "Next.js 14", level: "✅" },
                      { name: "TypeScript", level: "✅" },
                      { name: "Tailwind CSS", level: "✅" },
                      { name: "Redux Toolkit", level: "✅" },
                    ],
                  },
                  {
                    category: "Backend Power",
                    icon: <Cpu />,
                    techs: [
                      { name: "Node.js", level: "✅" },
                      { name: "Express/Fastify", level: "✅" },
                      { name: "Python/FastAPI", level: "✅" },
                      { name: "PHP/Laravel", level: "✅" },
                      { name: "GraphQL", level: "✅" },
                    ],
                  },
                  {
                    category: "Database & Storage",
                    icon: <Database />,
                    techs: [
                      { name: "PostgreSQL", level: "✅" },
                      { name: "MongoDB", level: "✅" },
                      { name: "Redis", level: "✅" },
                      { name: "Prisma ORM", level: "✅" },
                      { name: "AWS S3", level: "✅" },
                    ],
                  },
                  {
                    category: "DevOps & Tools",
                    icon: <Layers />,
                    techs: [
                      { name: "Docker", level: "✅" },
                      { name: "AWS/Vercel", level: "✅" },
                      { name: "GitHub Actions", level: "✅" },
                      { name: "Jest/Cypress", level: "✅" },
                      { name: "Nginx", level: "✅" },
                    ],
                  },
                ].map((stack, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {stack.icon}
                      </div>
                      <h3 className="font-bold">{stack.category}</h3>
                    </div>
                    <div className="space-y-3">
                      {stack.techs.map((tech, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm">{tech.name}</span>
                          <span className="text-xs px-2 py-1 bg-primary/10 rounded text-primary">
                            {tech.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Wybrane <span className="text-gradient">realizacje</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Projekty, które zwiększyły efektywność i przychody moich
                klientów
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Case 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-muted/30 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Smart-Edu.AI</h3>
                      <p className="text-sm text-primary">Platforma SaaS</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Zaawansowana platforma edukacyjna z AI generującą prace
                    naukowe. System obsługujący 2000+ użytkowników z 8 językami.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Stack:
                      </span>
                      <span className="text-sm font-mono">
                        Next.js, MongoDB, Stripe, AI
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Czas realizacji:
                      </span>
                      <span className="text-sm">8 tygodni</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Efekt:
                      </span>
                      <span className="text-sm text-green-500">
                        10k+ wygenerowanych prac
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://smart-edu.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    Zobacz projekt <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Case 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-muted/30 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Stojan Shop</h3>
                      <p className="text-sm text-primary">E-commerce</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Migracja z WooCommerce do własnego rozwiązania. Integracja z
                    Allegro, AI do opisów, wzrost sprzedaży o 40%.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Stack:
                      </span>
                      <span className="text-sm font-mono">
                        TypeScript, PostgreSQL, AWS
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Czas realizacji:
                      </span>
                      <span className="text-sm">6 tygodni</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Efekt:
                      </span>
                      <span className="text-sm text-green-500">
                        +40% sprzedaży
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://silniki-elektryczne.com.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    Zobacz projekt <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
              >
                Zobacz więcej projektów <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Proces współpracy */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jak pracuję nad{" "}
                <span className="text-gradient">projektami</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sprawdzona metodologia Agile dostosowana do potrzeb klienta
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    phase: "Discovery & Planning",
                    icon: <Layers />,
                    time: "1 tydzień",
                    desc: "Analiza wymagań, architektura systemu, stack technologiczny, harmonogram",
                    deliverables: [
                      "Specyfikacja techniczna",
                      "Mockupy",
                      "Estymacja czasu",
                    ],
                  },
                  {
                    phase: "Development Sprint",
                    icon: <Code2 />,
                    time: "2-4 tygodnie",
                    desc: "Iteracyjne programowanie, code review, testy jednostkowe, daily updates",
                    deliverables: [
                      "Working software",
                      "Dokumentacja API",
                      "Test coverage",
                    ],
                  },
                  {
                    phase: "Testing & QA",
                    icon: <Bug />,
                    time: "3-5 dni",
                    desc: "Testy integracyjne, UAT, optymalizacja wydajności, security audit",
                    deliverables: [
                      "Bug-free code",
                      "Performance report",
                      "Security check",
                    ],
                  },
                  {
                    phase: "Deployment & Support",
                    icon: <Cloud />,
                    time: "2-3 dni",
                    desc: "Wdrożenie produkcyjne, monitoring, szkolenie, dokumentacja użytkownika",
                    deliverables: [
                      "Live application",
                      "User manual",
                      "Support plan",
                    ],
                  },
                ].map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        {phase.icon}
                      </div>
                    </div>
                    <div className="flex-1 bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold">{phase.phase}</h3>
                        <span className="text-sm text-primary">
                          {phase.time}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{phase.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((item, j) => (
                          <span
                            key={j}
                            className="text-xs px-3 py-1 bg-primary/10 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dlaczego Bydgoszcz */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Programista z{" "}
                <span className="text-gradient">Bydgoszczy do usług</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <MapPin />,
                  title: "Lokalność ma znaczenie",
                  desc: "Spotkajmy się w Bydgoszczy - Stary Rynek, Wyspa Młyńska, Focus Mall. Omówimy projekt przy kawie.",
                },
                {
                  icon: <Clock />,
                  title: "Dostępność 24/7",
                  desc: "Mieszkam i pracuję w okolicach Bydgoszczy. W nagłych sytuacjach mogę być u Ciebie w 60 minut.",
                },
                {
                  icon: <Users />,
                  title: "Wsparcie lokalne biznesu",
                  desc: "Znam bydgoskie firmy i ich potrzeby. Współpracuję z lokalnymi przedsiębiorcami od lat.",
                },
                {
                  icon: <Award />,
                  title: "Szerokie umiejętności",
                  desc: "Łączę usługi programowania z kompetencjami marketingowymi i content marketingowymi.",
                },
                {
                  icon: <Lock />,
                  title: "Bezpieczeństwo prawne",
                  desc: "Polska umowa, faktura VAT, możliwość NDA. Pełna transparentność współpracy.",
                },
                {
                  icon: <Zap />,
                  title: "Elastyczność",
                  desc: "Dopasowuję się do Twoich potrzeb - godziny pracy, forma współpracy, zakres projektu.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pytania które często{" "}
                <span className="text-gradient">zadają klienci</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Jakie są Twoje stawki godzinowe?",
                  a: "Moje stawki zaczynają się od 150 zł/h netto w zależności od złożoności projektu. Dla długoterminowej współpracy oferuję korzystniejsze stawki. Możliwa też wycena ryczałtowa całego projektu.",
                },
                {
                  q: "Czy pracujesz tylko dla firm z Bydgoszczy?",
                  a: "Nie, ale firmy z Bydgoszczy i regionu kujawsko-pomorskiego mają u mnie priorytet. Cenię sobie możliwość osobistych spotkań i budowania długoterminowych relacji biznesowych.",
                },
                {
                  q: "W jakim modelu preferujesz pracować?",
                  a: "Najchętniej w modelu B2B (faktura) lub umowa zlecenie. Dla stałej współpracy możliwy kontrakt. Pracuję zarówno zdalnie jak i u klienta w Bydgoszczy.",
                },
                {
                  q: "Czy możesz przejąć i rozwinąć istniejący projekt?",
                  a: "Tak, regularnie przejmuję projekty po innych developerach. Zaczynam od code review, identyfikuję problemy i proponuję plan modernizacji. Mam doświadczenie z legacy code.",
                },
                {
                  q: "Jak szybko możesz rozpocząć projekt?",
                  a: "Zazwyczaj w ciągu 3-5 dni roboczych. Dla pilnych przypadków z Bydgoszczy mogę zacząć nawet następnego dnia. Zawsze dotrzymuję ustalonych terminów.",
                },
                {
                  q: "Czy oferujesz gwarancję na swoje prace?",
                  a: "Tak, daję 3-miesięczną gwarancję na napisany kod. W tym czasie bezpłatnie usuwam ewentualne błędy. Oferuję też pakiety maintenance dla długoterminowego wsparcia.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-muted/30 rounded-lg border border-primary/10"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold">{item.q}</span>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        openFaq === i ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground">{item.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
                <Terminal className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-green-500">
                  console.log(Ready to code!);
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Szukasz{" "}
                <span className="text-gradient">programisty w Bydgoszczy</span>?
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Porozmawiajmy o Twoim projekcie. Pierwsza konsultacja jest
                bezpłatna - omówimy wymagania, technologie i możliwości
                realizacji.
                <strong> Spotkajmy się w Bydgoszczy lub online.</strong>
              </p>

              <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <a
                    href="tel:+48509370772"
                    className="flex flex-col items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefon</p>
                      <p className="font-semibold text-lg">+48 509 370 772</p>
                    </div>
                  </a>

                  <a
                    href="mailto:kontakt@karol-leszczynski.pl"
                    className="flex flex-col items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-mail</p>
                      <p className="font-semibold text-lg">
                        kontakt@karol-leszczynski.pl
                      </p>
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-2 justify-center mt-6 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Bydgoszcz, Fordon, Błonie, Centrum</span>
                </div>
              </div>

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
              >
                Rozpocznij projekt
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Darmowa konsultacja
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Umowa B2B
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  15+ lat doświadczenia
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
