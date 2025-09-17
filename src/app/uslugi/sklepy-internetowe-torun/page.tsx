// src/app/uslugi/sklepy-internetowe-torun/page.tsx
"use client";

import { motion } from "framer-motion";

import { Navigation } from "@/components/layout/navigation";
import {
  Rocket,
  TrendingUp,
  Shield,
  Zap,
  Code2,
  Check,
  Server,
  ArrowRight,
  Package,
  CreditCard,
  Globe,
  Gauge,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SklepyInternetoweTorun() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [imageError, setImageError] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    name: "Sklepy internetowe Toruń - E-commerce",
    description:
      "Tworzenie sklepów internetowych w Toruniu. WooCommerce, własne rozwiązania, integracje płatności.",
    provider: {
      "@type": "LocalBusiness",
      name: "Karol Leszczyński - Sklepy internetowe",
      priceRange: "4990-19990 PLN",
      telephone: "+48509370772",
    },
    areaServed: {
      "@type": "City",
      name: "Toruń",
    },
    offers: {
      "@type": "Offer",
      price: "4990",
      priceCurrency: "PLN",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
    },
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.karol-leszczynski.pl/kontakt",
      },
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
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
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
                  Toruń i okolice
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sklepy internetowe <span className="text-gradient">Toruń</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Tworzę <strong>szybkie, konwertujące sklepy internetowe</strong>{" "}
                które naprawdę sprzedają. 15 lat doświadczenia w e-commerce,
                copywritingu i SEO - połączenie, którego nie znajdziesz często u
                programisty.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Wzrost sprzedaży nawet o +40%</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>PageSpeed 90+</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Integracje z Allegro, InPost</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Zamów darmową wycenę
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#portfolio"
                  className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  Zobacz realizacje
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dlaczego ja - USP */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dlaczego Twój sklep{" "}
                <span className="text-gradient">zarobi więcej</span> ze mną?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Większość programistów nie rozumie sprzedaży ani biznesu.
                Większość marketerów nie potrafi kodować. Ja łączę oba światy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Technologia + Marketing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nie tylko koduję, ale też{" "}
                  <strong>rozumiem psychologię zakupów</strong>. Twój sklep
                  będzie szybki technicznie i przekonujący marketingowo.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Opisy produktów które sprzedają</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>CTA zoptymalizowane pod konwersję</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Efektywna komunikacja</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  SEO od pierwszego dnia
                </h3>
                <p className="text-muted-foreground mb-4">
                  Sklep zbudowany <strong>od podstaw pod pozycjonowanie</strong>
                  . Bez dodatkowych kosztów na późniejszą optymalizację.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Struktura URL przyjazna Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Schema.org dla produktów</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Automatyczne sitemaps XML</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Lokalna przewaga</h3>
                <p className="text-muted-foreground mb-4">
                  Jestem z Torunia. <strong>Możemy spotkać się na kawę</strong>{" "}
                  i omówić projekt. Wsparcie po wdrożeniu na miejscu.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Spotkania osobiste w Toruniu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Szkolenia dla zespołu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Szybka pomoc w nagłych sytuacjach</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio / Case Studies */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sklepy które{" "}
                <span className="text-gradient">naprawdę sprzedają</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Realizacje z konkretnymi wynikami biznesowymi
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Case Study 1 - Stojan Shop */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-muted/30 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        Silniki-Elektryczne.com.pl
                      </h3>
                      <p className="text-primary">
                        Branża: Sprzedaż silników elektrycznych
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-500">
                        +40%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        wzrost sprzedaży
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Wyzwanie:</h4>
                      <p className="text-muted-foreground">
                        Mało wygodny sklep na WooCommerce, wolne ładowanie,
                        wysokie koszty utrzymania, ograniczone możliwości edycji
                        panelu, brak integracji z Allegro.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Rozwiązanie:</h4>
                      <p className="text-muted-foreground">
                        Migracja do własnego rozwiązania Next.js + Node.js.
                        Pełna integracja z Allegro, automatyczne opisy AI,
                        synchronizacja stanów magazynowych. Logiczna struktura
                        sklepu obejmnująca ponad 2000 produktów. Rozbudowany i
                        czytelny panel admina. Mailing AWS SES.
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.silniki-elektryczne.com.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    Zobacz sklep <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
              {/* Case Study 2 - Placeholder for Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-muted/30 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all"
              >
                <div className="relative h-full min-h-[400px] flex flex-col">
                  {/* Image Placeholder Area */}
                  <div className="relative flex-1 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    {!imageError ? (
                      <img
                        src="https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/stojan/invoices/sklepstojan.png"
                        alt="Case Study"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                        <Package className="w-16 h-16 mb-4 opacity-30" />
                        <p className="text-sm">Miejsce na obraz projektu</p>
                        <p className="text-xs mt-2 opacity-60">
                          [Wklej link do obrazu]
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
              {/* Case Study 2 - Smart-Edu.AI 
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-muted/30 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        eBookCopywriting.pl
                      </h3>
                      <p className="text-primary">Copywriting</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Wyzwanie:</h4>
                      <p className="text-muted-foreground">
                        Stworzenie maksymalnie intuicyjnego w obsłudze sklepu, w
                        którym po błyskawicznej płatności użytkownik będzie mógł
                        pobrać zamówiony ebook.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Rozwiązanie:</h4>
                      <p className="text-muted-foreground">
                        Strona typu landing page
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        10k+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Prac wygenerowanych
                      </div>
                    </div>
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-primary">8</div>
                      <div className="text-sm text-muted-foreground">
                        Języków
                      </div>
                    </div>
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        4.8/5
                      </div>
                      <div className="text-sm text-muted-foreground">Ocena</div>
                    </div>
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        99.9%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Uptime
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://smart-edu.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    Zobacz platformę <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>*/}
            </div>
          </div>
        </section>

        {/* Proces */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jak powstaje <span className="text-gradient">Twój sklep</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sprawdzony proces, który gwarantuje sukces projektu
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  nr: "01",
                  title: "Analiza i strategia",
                  desc: "Analizuję Twoją konkurencję, grupę docelową i cele biznesowe. Przygotowuję strategię UX/UI i plan SEO.",
                  time: "2-3 dni",
                },
                {
                  nr: "02",
                  title: "Projekt i prototyp",
                  desc: "Projektuję interfejs sklepu z myślą o konwersji. Przygotowuję interaktywny prototyp do akceptacji.",
                  time: "5-7 dni",
                },
                {
                  nr: "03",
                  title: "Programowanie",
                  desc: "Koduję sklep w najnowszych technologiach. Integruję płatności, dostawy, Allegro i inne systemy.",
                  time: "3-4 tygodnie",
                },
                {
                  nr: "04",
                  title: "Content i SEO",
                  desc: "Wypełniam sklep treścią, piszę opisy kategorii i produktów. Optymalizuję pod wyszukiwarki.",
                  time: "1 tydzień",
                },
                {
                  nr: "05",
                  title: "Testy i wdrożenie",
                  desc: "Testuję każdy element sklepu. Przeprowadzam szkolenie z obsługi. Uruchamiam na produkcji.",
                  time: "3-5 dni",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 mb-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{step.nr}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <span className="text-sm text-muted-foreground">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg font-semibold text-primary mb-2">
                Całkowity czas realizacji: 6-8 tygodni
              </p>
              <p className="text-muted-foreground">
                Sklep gotowy do sprzedaży w niecałe 2 miesiące
              </p>
            </div>
          </div>
        </section>

        {/* Technologie */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technologie które{" "}
                <span className="text-gradient">gwarantują sukces</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Używam tylko sprawdzonych, najnowszych rozwiązań
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  name: "Next.js 14",
                  desc: "Błyskawiczne ładowanie",
                  icon: <Zap />,
                },
                { name: "Node.js", desc: "Wydajny backend", icon: <Server /> },
                {
                  name: "PostgreSQL",
                  desc: "Niezawodna baza danych",
                  icon: <Shield />,
                },
                {
                  name: "Stripe",
                  desc: "Bezpieczne płatności",
                  icon: <CreditCard />,
                },
                { name: "AWS", desc: "Skalowalny hosting", icon: <Globe /> },
                { name: "TypeScript", desc: "Kod bez błędów", icon: <Code2 /> },
                {
                  name: "Tailwind CSS",
                  desc: "Responsywny design",
                  icon: <Package />,
                },
                {
                  name: "Redis",
                  desc: "Szybkie cache'owanie",
                  icon: <Gauge />,
                },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-muted/30 border border-primary/10 rounded-lg p-4 hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                    {tech.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pakiety */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Wybierz pakiet{" "}
                <span className="text-gradient">dopasowany do Ciebie</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparentne ceny, bez ukrytych kosztów
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Start",
                  price: "4 900",
                  desc: "Dla małych firm rozpoczynających sprzedaż online",
                  features: [
                    "Do 100 produktów",
                    "Responsywny design",
                    "Płatności Przelewy24",
                    "Integracja InPost",
                    "Panel administracyjny",
                    "Podstawowe SEO",
                    "SSL i hosting (1 rok)",
                    "Szkolenie z obsługi",
                  ],
                  popular: false,
                },
                {
                  name: "Profesjonalny",
                  price: "9 900",
                  desc: "Dla firm z większym asortymentem i ambicjami",
                  features: [
                    "Do 1000 produktów",
                    "Projekt UX/UI na miarę",
                    "Płatności Stripe + PayPal",
                    "Integracja Allegro",
                    "Automatyzacja procesów",
                    "Zaawansowane SEO",
                    "Newsletter i email marketing",
                    "AI do opisów produktów",
                    "Multijęzyczność",
                    "3 miesiące wsparcia",
                  ],
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "na zapytanie",
                  desc: "Dedykowane rozwiązania dla dużych firm",
                  features: [
                    "Nieograniczona ilość produktów",
                    "Integracje B2B",
                    "API dla partnerów",
                    "Zaawansowana automatyzacja",
                    "Dedicated hosting AWS",
                    "Wsparcie 24/7",
                    "Rozwój i optymalizacja",
                  ],
                  popular: false,
                },
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative bg-background/50 backdrop-blur-sm border rounded-xl p-8 hover:scale-105 transition-all ${
                    plan.popular
                      ? "border-primary shadow-xl"
                      : "border-primary/10"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Najpopularniejszy
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {plan.price === "na zapytanie" ? (
                      <span className="text-3xl font-bold">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground"> zł netto</span>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.desc}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className={`block w-full py-3 text-center rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-primary text-primary hover:bg-primary/10"
                    }`}
                  >
                    Wybierz pakiet
                  </Link>
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
                Najczęściej zadawane{" "}
                <span className="text-gradient">pytania</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Ile trwa stworzenie sklepu internetowego?",
                  a: "Standardowy sklep internetowy tworzę w 6-8 tygodni. Prosty sklep może być gotowy w 4 tygodnie, bardziej rozbudowany projekt może zająć do 12 tygodni.",
                },
                {
                  q: "Czy mogę sam zarządzać sklepem po wdrożeniu?",
                  a: "Oczywiście! Każdy sklep wyposażam w intuicyjny panel administracyjny. Dodatkowo przeprowadzam szkolenie z obsługi i dostarczam dokumentację. Oferuję też wsparcie po wdrożeniu.",
                },
                {
                  q: "Czy sklep będzie działał na telefonie?",
                  a: "Tak, wszystkie sklepy tworzę w technologii responsive (RWD). Sklep będzie perfekcyjnie wyglądał i działał na każdym urządzeniu - telefonie, tablecie i komputerze.",
                },
                {
                  q: "Jakie integracje oferujesz?",
                  a: "Integruję sklepy z Allegro, InPost, DPD, PayU, Przelewy24, Stripe, PayPal, Fakturownia, BaseLinker, Google Analytics, Facebook Pixel i wieloma innymi.",
                },
                {
                  q: "Czy zajmujesz się też pozycjonowaniem?",
                  a: "Każdy sklep buduję od podstaw z myślą o SEO. Po wdrożeniu mogę również prowadzić działania pozycjonerskie - mam 15 lat doświadczenia w SEO.",
                },
                {
                  q: "Co jeśli mam już sklep na WooCommerce?",
                  a: "Specjalizuję się w migracjach z WooCommerce. Przeniosę wszystkie produkty, zachowam adresy URL (ważne dla SEO) i poprawię wydajność nawet o 300%.",
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

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Gotowy na sklep, który{" "}
                <span className="text-gradient">naprawdę sprzedaje</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Skontaktuj się ze mną i przekonaj się, dlaczego firmy z Torunia
                wybierają moje rozwiązania. Pierwsze 30 minut konsultacji za
                darmo.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <a
                  href="tel:+48509370772"
                  className="flex items-center gap-3 text-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Zadzwoń</p>
                    <p className="font-semibold">+48 509 370 772</p>
                  </div>
                </a>

                <a
                  href="mailto:kontakt@karol-leszczynski.pl"
                  className="flex items-center gap-3 text-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Napisz</p>
                    <p className="font-semibold">
                      kontakt@karol-leszczynski.pl
                    </p>
                  </div>
                </a>
              </div>

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Zamów darmową wycenę
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
