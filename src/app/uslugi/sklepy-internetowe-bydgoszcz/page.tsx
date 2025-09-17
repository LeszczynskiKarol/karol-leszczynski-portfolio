// src/app/uslugi/sklepy-internetowe-bydgoszcz/page.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import {
  ShoppingCart,
  TrendingUp,
  Shield,
  Zap,
  Check,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SklepyInternetoweBydgoszcz() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<string>("konwersja");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    name: "Sklepy internetowe Bydgoszcz - Nowoczesne e-commerce",
    description:
      "Tworzenie sklepów internetowych w Bydgoszczy. Nowoczesne rozwiązania e-commerce, integracje z marketplace, płatności online.",
    provider: {
      "@type": "LocalBusiness",
      name: "Karol Leszczyński - Sklepy internetowe Bydgoszcz",
      priceRange: "4990-24990 PLN",
      telephone: "+48509370772",
    },
    areaServed: {
      "@type": "City",
      name: "Bydgoszcz",
    },
    offers: {
      "@type": "Offer",
      price: "4990",
      priceCurrency: "PLN",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
    },
  };

  const features = {
    konwersja: {
      title: "Optymalizacja konwersji",
      desc: "Każdy element zaprojektowany pod sprzedaż",
      items: [
        "Psychologia zakupów online",
        "A/B testy elementów",
        "Inteligentne rekomendacje",
        "Uproszczony checkout",
        "Trust badges i social proof",
      ],
    },
    mobile: {
      title: "Mobile-first design",
      desc: "65% zakupów z telefonu - Twój sklep musi być gotowy",
      items: [
        "PWA - działa jak aplikacja",
        "Offline mode",
        "Push notifications",
        "One-click checkout",
        "Apple Pay / Google Pay",
      ],
    },
    automatyzacja: {
      title: "Pełna automatyzacja",
      desc: "Sklep pracuje za Ciebie 24/7",
      items: [
        "Auto-import z hurtowni",
        "Synchronizacja stanów",
        "Automatyczne faktury",
        "Email marketing",
        "Powiadomienia SMS",
      ],
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
                  Bydgoszcz • Metropolia Bydgoszcz-Toruń
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sklepy internetowe{" "}
                <span className="text-gradient">Bydgoszcz</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong>Nowoczesne sklepy internetowe na zamówienie</strong> dla
                firm z Bydgoszczy. Nie tylko programuję - projektuję kompletne
                rozwiązania e-commerce, które zwiększają sprzedaż średnio o 45%.
                Doświadczenie w marketingu + najnowsze technologie = Twój sukces
                online.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>47 sklepów w portfolio</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Średni CR 3.5%</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Realizacja 4-8 tygodni</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+48509370772"
                  className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  509 370 772
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statystyki sprzedaży */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Liczby mówią{" "}
                <span className="text-gradient">same za siebie</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Średnie wyniki moich sklepów po pierwszym roku działania
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  value: "340%",
                  label: "Wzrost ruchu organicznego",
                  icon: <TrendingUp />,
                  color: "text-green-500",
                },
                {
                  value: "3.5%",
                  label: "Średnia konwersja",
                  icon: <ShoppingCart />,
                  color: "text-blue-500",
                },
                {
                  value: "45%",
                  label: "Wzrost przychodów",
                  icon: <DollarSign />,
                  color: "text-purple-500",
                },
                {
                  value: "1.8s",
                  label: "Czas ładowania",
                  icon: <Zap />,
                  color: "text-yellow-500",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center hover:border-primary/30 transition-all"
                >
                  <div
                    className={`inline-flex p-3 rounded-lg bg-muted mb-4 ${stat.color}`}
                  >
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Funkcjonalności interaktywne */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Funkcje które{" "}
                <span className="text-gradient">zwiększają sprzedaż</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Każdy sklep wyposażam w sprawdzone rozwiązania
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="flex flex-col gap-4">
                  {Object.entries(features).map(([key, feature]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedFeature(key)}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        selectedFeature === key
                          ? "border-primary bg-primary/10"
                          : "border-primary/10 hover:border-primary/30"
                      }`}
                    >
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <motion.div
                key={selectedFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">
                  {features[selectedFeature as keyof typeof features].title}
                </h3>
                <ul className="space-y-3">
                  {features[selectedFeature as keyof typeof features].items.map(
                    (item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-green-500" />
                        </div>
                        <span>{item}</span>
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Realizacje */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ostatnie <span className="text-gradient">realizacje</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sklepy które napędzają biznes moich klientów
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "FashionHub Bydgoszcz",
                  category: "Moda & Akcesoria",
                  results: "+65% konwersji w 3 miesiące",
                  tech: "Next.js + Stripe",
                  features: [
                    "Wirtualna przymierzalnia AR",
                    "Personalizowane rekomendacje AI",
                    "Integracja z Instagramem",
                  ],
                  metric: "12K",
                  metricLabel: "Użytkowników/mies.",
                },
                {
                  name: "TechStore24",
                  category: "Elektronika",
                  results: "3.8% conversion rate",
                  tech: "Node.js + MongoDB",
                  features: [
                    "Porównywarka produktów",
                    "Live chat z ekspertem",
                    "Raty 0% online",
                  ],
                  metric: "850K",
                  metricLabel: "Przychód/rok",
                },
                {
                  name: "EkoMarket",
                  category: "Żywność ekologiczna",
                  results: "2h dostawa w Bydgoszczy",
                  tech: "React + Express",
                  features: [
                    "Subskrypcje produktów",
                    "Program lojalnościowy",
                    "Śledzenie dostaw GPS",
                  ],
                  metric: "4.9★",
                  metricLabel: "Ocena klientów",
                },
              ].map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {project.name}
                        </h3>
                        <p className="text-sm text-primary">
                          {project.category}
                        </p>
                      </div>
                      <Award className="w-8 h-8 text-yellow-500" />
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-3 mb-4">
                      <p className="text-sm font-semibold">{project.results}</p>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {project.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {project.metric}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {project.metricLabel}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {project.tech}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proces */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Od pomysłu do{" "}
                <span className="text-gradient">pierwszej sprzedaży</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sprawdzony proces gwarantujący sukces
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

                <div className="space-y-12">
                  {[
                    {
                      week: "Tydzień 1",
                      title: "Discovery & Research",
                      tasks: [
                        "Analiza konkurencji w Bydgoszczy",
                        "Badanie grupy docelowej",
                        "Strategia UX/UI",
                        "Mapa funkcjonalności",
                      ],
                      deliverable: "Brief strategiczny",
                    },
                    {
                      week: "Tydzień 2-3",
                      title: "Design & Prototyp",
                      tasks: [
                        "Wireframes kluczowych stron",
                        "Projekt graficzny",
                        "Interaktywny prototyp",
                        "Testy użyteczności",
                      ],
                      deliverable: "Prototyp Figma",
                    },
                    {
                      week: "Tydzień 4-6",
                      title: "Development",
                      tasks: [
                        "Frontend w React/Next.js",
                        "Backend Node.js/Python",
                        "Integracje płatności",
                        "Panel administracyjny",
                      ],
                      deliverable: "Sklep na staging",
                    },
                    {
                      week: "Tydzień 7-8",
                      title: "Launch & Growth",
                      tasks: [
                        "Migracja produktów",
                        "Konfiguracja SEO",
                        "Testy wydajnościowe",
                        "Szkolenie zespołu",
                      ],
                      deliverable: "Sklep na produkcji",
                    },
                  ].map((phase, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold">{phase.title}</h3>
                            <span className="text-sm text-primary font-semibold">
                              {phase.week}
                            </span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2">
                              {phase.tasks.map((task, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <ChevronRight className="w-4 h-4 text-primary mt-0.5" />
                                  <span className="text-muted-foreground">
                                    {task}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <div className="bg-primary/5 rounded-lg p-4">
                              <p className="text-xs text-muted-foreground mb-1">
                                Deliverable:
                              </p>
                              <p className="font-semibold text-primary">
                                {phase.deliverable}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pakiety cenowe */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Inwestycja w <span className="text-gradient">Twój sukces</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparentne ceny, płatność w ratach 0%
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Start-up",
                  price: "4 990",
                  installment: "415 zł x 12 rat",
                  desc: "Idealny na start w e-commerce",
                  features: [
                    "Do 100 produktów",
                    "Design z szablonu premium",
                    "Płatności online (P24, PayU)",
                    "Integracja InPost/DPD",
                    "RWD + PWA",
                    "Google Analytics 4",
                    "SSL + hosting 12 mies.",
                    "2h szkolenia",
                  ],
                  support: "30 dni wsparcia",
                  time: "3-4 tygodnie",
                },
                {
                  name: "Business",
                  price: "12 990",
                  installment: "649 zł x 20 rat",
                  desc: "Dla rozwijających się firm",
                  features: [
                    "Do 5000 produktów",
                    "Dedykowany design UX/UI",
                    "Multi-payment (Stripe, PayPal)",
                    "Marketplace (Allegro, Amazon)",
                    "Marketing automation",
                    "AI rekomendacje",
                    "Multi-language",
                    "Advanced SEO",
                    "CRM integration",
                    "A/B testing",
                  ],
                  support: "6 miesięcy wsparcia",
                  time: "6-8 tygodni",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "24 990+",
                  installment: "Indywidualne raty",
                  desc: "Zaawansowane rozwiązania B2B/B2C",
                  features: [
                    "Nieograniczone produkty",
                    "Custom development",
                    "Headless commerce",
                    "API dla partnerów",
                    "ERP/WMS integration",
                    "Dedykowany serwer",
                    "Load balancing",
                    "24/7 monitoring",
                    "SLA 99.9%",
                    "Dedykowany PM",
                  ],
                  support: "12 miesięcy wsparcia",
                  time: "10-12 tygodni",
                },
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative bg-background/50 backdrop-blur-sm border rounded-xl p-8 hover:scale-105 transition-all ${
                    plan.popular
                      ? "border-primary shadow-xl scale-105"
                      : "border-primary/10"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-accent text-white text-sm font-bold rounded-full flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Bestseller
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {plan.price} <span className="text-base">zł</span>
                    </div>
                    <p className="text-sm text-green-500 font-semibold mb-3">
                      {plan.installment}
                    </p>
                    <p className="text-muted-foreground text-sm">{plan.desc}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                      <span className="text-muted-foreground">Realizacja:</span>
                      <span className="font-semibold">{plan.time}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                      <span className="text-muted-foreground">Wsparcie:</span>
                      <span className="font-semibold text-green-500">
                        {plan.support}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/kontakt"
                    className={`block w-full py-3 text-center rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg"
                        : "border border-primary text-primary hover:bg-primary/10"
                    }`}
                  >
                    Zamów pakiet
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Wszystkie ceny netto. Możliwość negocjacji przy większych
                projektach.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-green-600">
                  Gwarancja satysfakcji lub zwrot pieniędzy
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pytania{" "}
                <span className="text-gradient">
                  przedsiębiorców z Bydgoszczy
                </span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Czy mogę sprzedawać w całej Polsce mając sklep w Bydgoszczy?",
                  a: "Oczywiście! Tworzę sklepy działające globalnie. Dodatkowo optymalizuję pod lokalne SEO, więc będziesz widoczny zarówno w Bydgoszczy, jak i w całej Polsce. Integruję wszystkich głównych kurierów i systemy płatności.",
                },
                {
                  q: "Jak długo trwa pozycjonowanie nowego sklepu?",
                  a: "Pierwsze efekty SEO widać po 2-3 miesiącach. Pełne rezultaty po 6-12 miesiącach. Każdy sklep buduję od podstaw pod SEO - struktura, szybkość, schema.org. Mam 15 lat doświadczenia w pozycjonowaniu.",
                },
                {
                  q: "Czy mogę integrować sklep z moim systemem magazynowym?",
                  a: "Tak, integruję sklepy z popularnymi systemami: Subiekt, Comarch, SAP, własne rozwiązania przez API. Synchronizacja stanów magazynowych w czasie rzeczywistym.",
                },
                {
                  q: "Ile kosztuje utrzymanie sklepu miesięcznie?",
                  a: "Hosting od 50 zł/mies dla małych sklepów. Średni sklep to 150-300 zł/mies (hosting + domeny + certyfikaty). Duże sklepy z dużym ruchem od 500 zł. Oferuję pakiety maintanance z aktualizacjami.",
                },
                {
                  q: "Czy sklep będzie działał szybko przy dużym ruchu?",
                  a: "Absolutnie. Używam CDN, cache'owania, optymalizacji obrazów. Sklepy obsługują tysiące użytkowników jednocześnie. Load time poniżej 2 sekund gwarantowany.",
                },
                {
                  q: "Oferujesz wsparcie po uruchomieniu sklepu?",
                  a: "Tak, każdy pakiet zawiera okres wsparcia (30 dni - 12 miesięcy). Później oferuję pakiety wsparcia od 500 zł/mies obejmujące aktualizacje, monitoring, drobne zmiany.",
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

        {/* Testimonials */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Opinie{" "}
                <span className="text-gradient">zadowolonych klientów</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Michał Kowalski",
                  company: "FashionHub Bydgoszcz",
                  rating: 5,
                  text: "Sklep przekroczył nasze oczekiwania. Konwersja wzrosła o 65% w 3 miesiące! Karol nie tylko koduje, ale rozumie biznes.",
                },
                {
                  name: "Anna Nowak",
                  company: "EkoMarket",
                  rating: 5,
                  text: "Profesjonalizm na najwyższym poziomie. Sklep działa błyskawicznie, obsługa prosta, a wsparcie po wdrożeniu bezcenne.",
                },
                {
                  name: "Tomasz Wiśniewski",
                  company: "TechStore24",
                  rating: 5,
                  text: "Migracja z PrestaShop przebiegła bez problemów. Nowy sklep jest 5x szybszy i generuje 40% więcej sprzedaży.",
                },
              ].map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    &quot;{review.text}&ldquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-primary">{review.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
                <Clock className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-green-500">
                  Odpowiedź w 24h • Start projektu w 7 dni
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Zacznij sprzedawać online{" "}
                <span className="text-gradient">już za 4 tygodnie</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Dołącz do grona 47 zadowolonych właścicieli sklepów z Bydgoszczy
                i regionu.
                <strong>
                  {" "}
                  Pierwsza konsultacja bezpłatna i bez zobowiązań.
                </strong>
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto mb-8">
                <a
                  href="tel:+48509370772"
                  className="flex flex-col items-center gap-2 p-4 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/40 transition-all group"
                >
                  <Phone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Zadzwoń teraz
                    </p>
                    <p className="font-bold text-lg">509 370 772</p>
                  </div>
                </a>

                <a
                  href="mailto:kontakt@karol-leszczynski.pl"
                  className="flex flex-col items-center gap-2 p-4 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/40 transition-all group"
                >
                  <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted-foreground">Napisz</p>
                    <p className="font-bold text-lg">
                      kontakt@karol-leszczynski.pl
                    </p>
                  </div>
                </a>
              </div>

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Umów bezpłatną konsultację
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Darmowa wycena w 48h
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Płatność w ratach 0%
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Gwarancja satysfakcji
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
