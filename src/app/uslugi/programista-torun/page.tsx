// src/app/uslugi/programista-torun/page.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import {
  Code2,
  Rocket,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  AlertCircle,
  Lightbulb,
  Settings,
  Package,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProgramistaTorun() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Programista Toruń - Karol Leszczyński",
    description:
      "Doświadczony programista w Toruniu. 15 lat doświadczenia, aplikacje webowe, sklepy internetowe.",
    provider: {
      "@type": "Person",
      name: "Karol Leszczyński",
      jobTitle: "Full-Stack Developer",
      telephone: "+48509370772",
      email: "kontakt@karol-leszczynski.pl",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toruń",
      addressRegion: "Kujawsko-Pomorskie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.0138",
      longitude: "18.5981",
    },
    areaServed: [{ "@type": "City", name: "Toruń" }],
    priceRange: "150-500 PLN/h",
    openingHours: "Mo-Fr 09:00-17:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
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
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 20 + 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </motion.div>
          </div>

          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Toruń • Kujawsko-Pomorskie
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Programista <span className="text-gradient">Toruń</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong>Szukasz doświadczonego programisty w Toruniu?</strong>{" "}
                15 lat doświadczenia w branży digital. Od copywritera do
                Full-Stack Developera - znam biznes od każdej strony. Tworzę
                aplikacje webowe, sklepy internetowe, platformy SaaS i integruję
                AI.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>50+ zrealizowanych projektów</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Lokalne wsparcie</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Spotkania osobiste</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Darmowa konsultacja
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+48509370772"
                  className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  509 370 772
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* O mnie - lokalny kontekst */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div {...fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Doświadczony{" "}
                  <span className="text-gradient">programista z Torunia</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Od 2009 roku w branży digital
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="space-y-6">
                    <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Dlaczego lokalny programista?
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <strong>Spotkania osobiste</strong>
                            <p className="text-sm text-muted-foreground">
                              Możemy spotkać się w Toruniu na kawę i omówić
                              projekt
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <strong>Dostępność</strong>
                            <p className="text-sm text-muted-foreground">
                              Szybka komunikacja bez opóźnień - jestem dostępny,
                              gdy potrzebujesz wsparcia
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <strong>Polska umowa i faktura</strong>
                            <p className="text-sm text-muted-foreground">
                              Pełna transparentność, polski NIP, możliwość
                              podpisania umowy
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <strong>Znam lokalny rynek</strong>
                            <p className="text-sm text-muted-foreground">
                              Wiem, jak działają firmy w regionie i jakie mają
                              potrzeby
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      Moje doświadczenie
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <span className="font-medium">Lata doświadczenia</span>
                        <span className="text-2xl font-bold text-primary">
                          15+
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <span className="font-medium">
                          Zrealizowane projekty
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          50+
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <span className="font-medium">Technologie</span>
                        <span className="text-2xl font-bold text-primary">
                          30+
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <span className="font-medium">Zadowoleni klienci</span>
                        <span className="text-2xl font-bold text-primary">
                          98%
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Usługi programistyczne */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Co mogę dla Ciebie{" "}
                <span className="text-gradient">zaprogramować</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kompleksowe usługi programistyczne dla firm z Torunia i okolic
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Aplikacje webowe",
                  icon: <Code2 />,
                  desc: "Nowoczesne aplikacje SPA/PWA w React i Next.js",
                  features: [
                    "Single Page Applications",
                    "Progressive Web Apps",
                    "Panel administracyjny",
                    "Systemy CRM/ERP",
                    "Dashboardy analityczne",
                  ],
                },
                {
                  title: "Sklepy internetowe",
                  icon: <Package />,
                  desc: "E-commerce od podstaw lub na gotowych platformach",
                  features: [
                    "Własne rozwiązania Node.js",
                    "WooCommerce",
                    "Shopify",
                    "Integracje płatności",
                    "Synchronizacja z Allegro",
                  ],
                },
                {
                  title: "Integracje AI",
                  icon: <Zap />,
                  desc: "Wdrażam sztuczną inteligencję w Twojej firmie",
                  features: [
                    "Chatboty AI",
                    "Automatyzacja procesów",
                    "Generowanie treści",
                    "Analiza danych",
                    "Personalizacja",
                  ],
                },
                {
                  title: "API & Backend",
                  icon: <Settings />,
                  desc: "Solidne rozwiązania backendowe i integracje",
                  features: [
                    "RESTful API",
                    "GraphQL",
                    "Mikrousługi",
                    "Integracje zewnętrzne",
                    "Websockets",
                  ],
                },
                {
                  title: "Automatyzacja",
                  icon: <Rocket />,
                  desc: "Automatyzuję procesy biznesowe i workflow",
                  features: [
                    "Make.com / Zapier",
                    "Skrypty automatyzujące",
                    "Web scraping",
                    "Integracje systemów",
                    "CI/CD pipelines",
                  ],
                },
                {
                  title: "Wsparcie techniczne",
                  icon: <Shield />,
                  desc: "Utrzymanie i rozwój istniejących aplikacji",
                  features: [
                    "Debugging",
                    "Optymalizacja wydajności",
                    "Aktualizacje",
                    "Migracje",
                    "Code review",
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

        {/* Technologie */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technologie które{" "}
                <span className="text-gradient">wykorzystuję</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pracuję z najnowszymi technologiami i frameworkami
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    category: "Frontend",
                    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                  },
                  {
                    category: "Backend",
                    techs: ["Node.js", "Express", "Python", "PHP"],
                  },
                  {
                    category: "Bazy danych",
                    techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
                  },
                  {
                    category: "Cloud",
                    techs: ["AWS", "Vercel", "Docker", "Nginx"],
                  },
                  {
                    category: "AI/ML",
                    techs: ["OpenAI", "Anthropic", "LangChain", "TensorFlow"],
                  },
                  {
                    category: "CMS",
                    techs: ["WordPress", "Strapi", "Sanity", "Directus"],
                  },
                  {
                    category: "E-commerce",
                    techs: ["WooCommerce", "Shopify", "Stripe", "PayPal"],
                  },
                  {
                    category: "DevOps",
                    techs: ["Git", "CI/CD", "Linux", "PM2"],
                  },
                ].map((group, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6"
                  >
                    <h3 className="font-semibold text-primary mb-3">
                      {group.category}
                    </h3>
                    <div className="space-y-2">
                      {group.techs.map((tech, j) => (
                        <div key={j} className="text-sm text-muted-foreground">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Proces współpracy */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jak wygląda <span className="text-gradient">współpraca</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Prosty i transparentny proces od pomysłu do wdrożenia
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Konsultacja",
                    desc: "Spotykamy się osobiście lub online. Omawiamy Twoje potrzeby i cele biznesowe.",
                    icon: <Lightbulb />,
                    time: "1-2 dni",
                  },
                  {
                    step: "2",
                    title: "Wycena",
                    desc: "Przygotowuję szczegółową wycenę z harmonogramem i zakresem prac.",
                    icon: <Target />,
                    time: "2-3 dni",
                  },
                  {
                    step: "3",
                    title: "Realizacja",
                    desc: "Programuję rozwiązanie z regularnym raportowaniem postępów.",
                    icon: <Code2 />,
                    time: "2-8 tygodni",
                  },
                  {
                    step: "4",
                    title: "Wdrożenie",
                    desc: "Deploy, testy, szkolenie. Gwarancja i wsparcie po uruchomieniu.",
                    icon: <Rocket />,
                    time: "3-5 dni",
                  },
                ].map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {phase.step}
                        </div>
                        <div className="text-primary">{phase.icon}</div>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                      <p className="text-sm text-primary mb-3">{phase.time}</p>
                      <p className="text-sm text-muted-foreground">
                        {phase.desc}
                      </p>
                    </div>
                    {i < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <ChevronRight className="w-6 h-6 text-primary" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dlaczego ja */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Co Ci mogę <span className="text-gradient">zaproponować</span>?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <Award />,
                  title: "15 lat doświadczenia",
                  desc: "Od 2009 roku w branży digital. Znam biznes od strony marketingu i technologii.",
                },
                {
                  icon: <Users />,
                  title: "Lokalne wsparcie",
                  desc: "Jestem z Torunia. Możemy spotkać się osobiście, podpisać umowę, wystawię fakturę.",
                },
                {
                  icon: <TrendingUp />,
                  title: "Biznesowe podejście",
                  desc: "Nie tylko koduję - rozumiem cele biznesowe i pomagam je osiągnąć przez technologię.",
                },
                {
                  icon: <Shield />,
                  title: "Gwarancja jakości",
                  desc: "Czysty kod, dokumentacja, testy. Gwarancja na wykonane prace.",
                },
                {
                  icon: <Clock />,
                  title: "Terminowość",
                  desc: "Dotrzymuję terminów. Regularnie informuję o postępach prac.",
                },
                {
                  icon: <Zap />,
                  title: "Nowoczesne rozwiązania",
                  desc: "Wykorzystuję najnowsze technologie, w tym AI i automatyzację.",
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
                Najczęstsze <span className="text-gradient">pytania</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Ile kosztuje stworzenie aplikacji webowej?",
                  a: "Ceny zaczynają się od 3000 zł za prostą stronę. Aplikacje webowe to koszt 8000-30000 zł w zależności od złożoności. Dokładną wycenę przygotuję po poznaniu wymagań.",
                },
                {
                  q: "Jak długo trwa realizacja projektu?",
                  a: "Prosta strona: 1-2 tygodnie. Sklep internetowy: 3-4 tygodnie. Zaawansowana aplikacja: 4-12 tygodni. Zawsze ustalam realistyczne terminy.",
                },
                {
                  q: "Czy oferujesz wsparcie po wdrożeniu?",
                  a: "Tak, oferuję pakiety wsparcia od 500 zł/miesiąc. Obejmują aktualizacje, drobne zmiany, monitoring i pomoc techniczną.",
                },
                {
                  q: "Jakie technologie wykorzystujesz?",
                  a: "Głównie React, Next.js, Node.js, TypeScript. Ale dobieriam technologię do projektu - WordPress dla blogów, WooCommerce dla e-commerce, Python dla AI.",
                },
                {
                  q: "Czy możesz przejąć istniejący projekt?",
                  a: "Tak, regularnie przejmuję i rozwijam istniejące projekty. Zaczynam od audytu kodu, identyfikuję problemy i proponuję plan rozwoju.",
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
                <AlertCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-green-500">
                  Darmowa konsultacja dla firm z Torunia
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Potrzebujesz{" "}
                <span className="text-gradient">programisty w Toruniu</span>?
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Zadzwoń lub napisz - omówimy Twój projekt i zaproponuję
                najlepsze rozwiązanie.
                <strong>
                  {" "}
                  Pierwsza konsultacja jest całkowicie bezpłatna i
                  niezobowiązująca.
                </strong>
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
                      <p className="text-sm text-muted-foreground">Zadzwoń</p>
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
                      <p className="text-sm text-muted-foreground">Napisz</p>
                      <p className="font-semibold text-lg">
                        kontakt@karol-leszczynski.pl
                      </p>
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-2 justify-center mt-6 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Toruń, Kujawsko-Pomorskie</span>
                </div>
              </div>

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
              >
                Umów darmową konsultację
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Bezpłatna wycena
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Lokalne spotkanie
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Umowa i faktura
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
