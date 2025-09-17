// src/app/uslugi/strony-internetowe-bydgoszcz/page.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import {
  Globe,
  Search,
  Smartphone,
  Package,
  Rocket,
  Check,
  ArrowRight,
  BarChart,
  Lock,
  GraduationCap,
  Shield,
  Gauge,
  HeadphonesIcon,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  Users,
  Award,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function StronyInternetoweBydgoszcz() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tworzenie stron internetowych Bydgoszcz",
    description:
      "Profesjonalne tworzenie stron www w Bydgoszczy. Firmowe strony internetowe, sklepy online, landing page. Next.js, WordPress, SEO.",
    creator: {
      "@type": "LocalBusiness",
      name: "Karol Leszczyński - Strony internetowe Bydgoszcz",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bydgoszcz",
        addressRegion: "Kujawsko-Pomorskie",
      },
      telephone: "+48509370772",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PLN",
      lowPrice: "2490",
      highPrice: "12990",
    },
    potentialAction: {
      "@type": "ContactAction",
      target: {
        "@type": "ContactPoint",
        telephone: "+48509370772",
        contactType: "sales",
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
                  Bydgoszcz • Kujawsko-Pomorskie
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Tworzenie stron internetowych{" "}
                <span className="text-gradient">Bydgoszcz</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong>
                  Firmowa strona internetowa, która pracuje na Twój sukces 24/7.
                </strong>{" "}
                Projektuję i programuję nowoczesne witryny WWW dla firm i osób
                prywatnych z Bydgoszczy. Każda realizacja to połączenie
                estetyki, wydajności i skuteczności marketingowej.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Realizacja do 21 dni</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Gwarancja PageSpeed 90+</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Wsparcie lokalne</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Otrzymaj darmową wycenę
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#portfolio"
                  className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  Portfolio realizacji
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "15+", label: "Lat doświadczenia" },
                { value: "50+", label: "Zrealizowanych projektów" },
                { value: "90%", label: "Średnia PageSpeed" },
                { value: "5.0", label: "Ocena klientów" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-1">
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

        {/* Dlaczego warto */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tworzenie stron www to{" "}
                <span className="text-gradient">więcej niż programowanie</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Firmowa strona internetowa to Twoja wizytówka online, centrum
                sprzedaży i narzędzie budowania relacji. Dlatego podchodzę do
                każdego projektu kompleksowo.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Znam biznes w Bydgoszczy
                </h3>
                <p className="text-muted-foreground">
                  Współpracuję z <strong>lokalnymi przedsiębiorcami</strong> od
                  lat. Rozumiem specyfikę rynku bydgoskiego i wiem, jak dotrzeć
                  do klientów z regionu kujawsko-pomorskiego.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Kompleksowa realizacja
                </h3>
                <p className="text-muted-foreground">
                  Od strategii przez projekt po wdrożenie.{" "}
                  <strong>Tworzenie stron internetowych w Bydgoszczy</strong> to
                  moja pasja - dbam o każdy detal, od UX po treści marketingowe.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Layers className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Najnowsze technologie
                </h3>
                <p className="text-muted-foreground">
                  Wykorzystuję <strong>Next.js, React, Node.js, Astro</strong> -
                  technologie gigantów jak Netflix czy Facebook. Twoja strona
                  będzie nowoczesna przez lata.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-3xl mx-auto text-center"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Partner biznesowy, nie tylko wykonawca
              </h3>
              <p className="text-muted-foreground mb-6">
                Mieszkam i pracuję w regionie kujawsko-pomorskim. Spotkajmy się
                w Bydgoszczy na kawie przy Starym Rynku, w Młynach Rothera czy
                gdziekolwiek indziej, gdzie Ci pasuje. Omówimy Twój projekt i
                cele biznesowe twarzą w twarz.
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <span className="px-3 py-1 bg-primary/10 rounded-full">
                  Konsultacje osobiste
                </span>
                <span className="px-3 py-1 bg-primary/10 rounded-full">
                  Wsparcie po wdrożeniu
                </span>
                <span className="px-3 py-1 bg-primary/10 rounded-full">
                  Rozwój długoterminowy
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rodzaje stron */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Firmowe strony internetowe{" "}
                <span className="text-gradient">dla każdej branży</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specjalizuję się w tworzeniu stron WWW dopasowanych do potrzeb
                Twojego biznesu
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Strony dla firm usługowych",
                  desc: "Profesjonalna prezentacja usług z systemem rezerwacji i wyceny online. Idealne dla salonów, gabinetów, warsztatów.",
                  features: [
                    "Katalog usług",
                    "System rezerwacji",
                    "Kalendarz dostępności",
                    "Wycena online",
                    "Opinie klientów",
                  ],
                  icon: <Calendar />,
                },
                {
                  title: "Strony dla producentów",
                  desc: "Katalog produktów, specyfikacje techniczne, do pobrania. Dla firm produkcyjnych z Bydgoszczy.",
                  features: [
                    "Katalog produktów",
                    "Karty techniczne",
                    "Pliki CAD do pobrania",
                    "Konfigurator produktu",
                    "Zapytania ofertowe",
                  ],
                  icon: <Package />,
                },
                {
                  title: "Strony korporacyjne",
                  desc: "Rozbudowane serwisy dla średnich i dużych firm. Wielojęzyczność, intranety, portale B2B.",
                  features: [
                    "Struktura wielopoziomowa",
                    "Wersje językowe",
                    "Portal pracowniczy",
                    "Relacje inwestorskie",
                    "CSR i ESG",
                  ],
                  icon: <Globe />,
                },
                {
                  title: "Strony dla startupów",
                  desc: "Nowoczesny design, pitch deck online, integracje z CRM. Dla innowacyjnych firm z Bydgoszczy.",
                  features: [
                    "Landing page",
                    "Prezentacja produktu",
                    "Blog technologiczny",
                    "Integracje API",
                    "Analytics & tracking",
                  ],
                  icon: <Rocket />,
                },
                {
                  title: "Strony medyczne i prawne",
                  desc: "RODO-compliant, wysokie bezpieczeństwo, profesjonalny wizerunek dla kancelarii i przychodni.",
                  features: [
                    "Rejestracja online",
                    "Portal pacjenta",
                    "Baza wiedzy",
                    "Formularze RODO",
                    "Szyfrowanie SSL",
                  ],
                  icon: <Shield />,
                },
                {
                  title: "Strony edukacyjne",
                  desc: "Platformy e-learningowe, kursy online, materiały edukacyjne dla szkół i uczelni.",
                  features: [
                    "System kursów",
                    "Testy online",
                    "Materiały do pobrania",
                    "Forum dyskusyjne",
                    "Certyfikaty",
                  ],
                  icon: <GraduationCap />,
                },
              ].map((type, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {type.desc}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Przykładowe <span className="text-gradient">realizacje</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strony internetowe które zwiększają sprzedaż i budują markę
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Realizacja 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="group"
              >
                <div className="bg-muted/30 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src="/projects/grandkuchnie.jpg"
                      alt="Meble-Bydgoszcz - strona internetowa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">GrandKuchnie.pl</h3>
                    <p className="text-sm text-primary mb-3">
                      Strona firmowa z CMS
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Elegancka strona firmowa z rozbudowanym portfolio
                      realizacji, zoptymalizowana pod kątem SEO. System CMS do
                      samodzielnego dodawania projektów.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 bg-muted rounded">
                        Next.js
                      </span>
                      <span className="text-xs px-2 py-1 bg-muted rounded">
                        Prisma
                      </span>
                      <span className="text-xs px-2 py-1 bg-muted rounded">
                        AWS S3
                      </span>
                    </div>

                    <a
                      href="https://grandkuchnie.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                    >
                      Zobacz stronę <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Realizacja 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="group"
              >
                <div className="bg-muted/30 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src="/projects/meble-bydgoszcz.png"
                      alt="Meble-Bydgoszcz - strona internetowa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Meble-Bydgoszcz.pl
                    </h3>
                    <p className="text-sm text-primary mb-3">
                      Statyczna strona firmowa
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Rozbudowana strony firmy zajmującej się projektowaniem i
                      tworzeniem mebli na wymiar. Pełen zakres usług,
                      optymalizacja SEO, formularz kontaktowy, galeria zdjęć,
                      czytelna struktura.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 bg-muted rounded">
                        Astro
                      </span>
                      <span className="text-xs px-2 py-1 bg-muted rounded">
                        AWS Cloudfront
                      </span>
                      <span className="text-xs px-2 py-1 bg-muted rounded">
                        AWS S3
                      </span>
                    </div>

                    <a
                      href="https://meble-bydgoszcz.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                    >
                      Zobacz stronę <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
              >
                Zobacz wszystkie projekty <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Proces realizacji */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jak powstaje{" "}
                <span className="text-gradient">Twoja strona WWW</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Przejrzysty proces tworzenia stron internetowych
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  day: "Etap 1",
                  title: "Analiza potrzeb",
                  tasks: [
                    "Konsultacja biznesowa",
                    "Analiza konkurencji",
                    "Strategia UX/UI",
                    "Plan funkcjonalności",
                  ],
                },
                {
                  day: "Etap 2",
                  title: "Projektowanie",
                  tasks: [
                    "Mockupy i wireframe",
                    "Projekt graficzny",
                    "Architektura informacji",
                    "Prototyp interaktywny",
                  ],
                },
                {
                  day: "Etap 3",
                  title: "Programowanie",
                  tasks: [
                    "Kodowanie front-end",
                    "Backend i bazy danych",
                    "Integracje systemów",
                    "Testy wydajności",
                  ],
                },
                {
                  day: "Etap 4",
                  title: "Wdrożenie",
                  tasks: [
                    "Konfiguracja hostingu",
                    "Optymalizacja SEO",
                    "Szkolenie z obsługi",
                    "Start i monitoring",
                  ],
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
                    <div className="text-sm text-primary font-semibold mb-2">
                      {phase.day}
                    </div>
                    <h3 className="text-lg font-bold mb-4">{phase.title}</h3>
                    <div className="space-y-2">
                      {phase.tasks.map((task, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Co otrzymujesz */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Co zawiera{" "}
                <span className="text-gradient">każda realizacja</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kompletna usługa tworzenia stron www w Bydgoszczy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <Smartphone />,
                  title: "Design responsywny",
                  desc: "Strona dopasowana do każdego ekranu - mobile first",
                },
                {
                  icon: <Gauge />,
                  title: "Szybkość działania",
                  desc: "Optymalizacja Core Web Vitals dla lepszego SEO",
                },
                {
                  icon: <Search />,
                  title: "Podstawy SEO",
                  desc: "Struktura przyjazna Google, meta tagi, sitemapy",
                },
                {
                  icon: <Lock />,
                  title: "Bezpieczeństwo SSL",
                  desc: "Certyfikat HTTPS i zabezpieczenia przed atakami",
                },
                {
                  icon: <BarChart />,
                  title: "Analityka ruchu",
                  desc: "Google Analytics 4 i Search Console w standardzie",
                },
                {
                  icon: <HeadphonesIcon />,
                  title: "Wsparcie techniczne",
                  desc: "3 miesiące opieki i aktualizacji w cenie",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cennik */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Przejrzyste <span className="text-gradient">ceny</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Wybierz pakiet dopasowany do Twoich potrzeb
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Wizytówka",
                  price: "1 990",
                  time: "7 dni",
                  desc: "Prosta strona dla małych firm i freelancerów",
                  features: [
                    "Do 5 podstron",
                    "Responsywny design",
                    "Formularz kontaktowy",
                    "Podstawowe SEO",
                    "Google Maps",
                    "SSL i hosting (1 rok)",
                    "1 miesiąc wsparcia",
                  ],
                  popular: false,
                },
                {
                  name: "Biznes",
                  price: "3 990",
                  time: "14 dni",
                  desc: "Profesjonalna strona firmowa z CMS",
                  features: [
                    "Do 15 podstron",
                    "System CMS",
                    "Blog firmowy",
                    "Galeria/Portfolio",
                    "Zaawansowane SEO",
                    "Google Analytics",
                    "Newsletter",
                    "Animacje i efekty",
                    "SSL i hosting (1 rok)",
                    "3 miesiące wsparcia",
                  ],
                  popular: true,
                },
                {
                  name: "Premium",
                  price: "+7 990",
                  time: "21+ dni",
                  desc: "Zaawansowane strony i aplikacje webowe",
                  features: [
                    "Nieograniczone podstrony",
                    "Dedykowany projekt UX/UI",
                    "Zaawansowany CMS",
                    "Integracje API",
                    "Panel klienta",
                    "Wielojęzyczność",
                    "Optymalizacja konwersji",
                    "A/B testy",
                    "Dedykowany hosting",
                    "6 miesięcy wsparcia",
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

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-sm text-primary mb-3">
                      Realizacja: {plan.time}
                    </div>
                    <div className="mb-3">
                      {plan.price.includes("od") ? (
                        <span className="text-3xl font-bold">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-3xl font-bold">
                            {plan.price}
                          </span>
                          <span className="text-muted-foreground">
                            {" "}
                            zł netto
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.desc}</p>
                  </div>

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
                    Zamów pakiet
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
                Pytania o tworzenie{" "}
                <span className="text-gradient">stron internetowych</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Jak długo trwa tworzenie strony internetowej?",
                  a: "Standardowa firmowa strona internetowa powstaje w 14-21 dni roboczych. Prosta wizytówka może być gotowa w 7-10 dni, zaawansowane projekty mogą zająć 4-6 tygodni. Dokładny czas zależy od zakresu projektu i szybkości dostarczania materiałów.",
                },
                {
                  q: "Czy mogę edytować stronę samodzielnie po wdrożeniu?",
                  a: "Jeśli zamawiasz stronę z CMS-em, edytowanie treści odbywa się w intuicyjnym, graficznym panelu administratora. W przypadku statycznych stron WWW edycja zawartości odbywa się poprzez modyfikację kodu plików składających się na witrynę.",
                },
                {
                  q: "Jakie technologie wykorzystujesz do tworzenia stron www?",
                  a: "Specjalizuję się w nowoczesnych technologiach: Next.js, React, Node.js dla zaawansowanych projektów oraz Astro i WordPress dla prostszych stron. Zawsze dobieram technologię do potrzeb i budżetu klienta.",
                },
                {
                  q: "Czy cena zawiera hosting i domenę?",
                  a: "Tak, każdy pakiet zawiera hosting i domenę na pierwszy rok. Po tym okresie koszt to około 300-500 zł rocznie dla standardowej strony.",
                },
                {
                  q: "Obsługujesz tylko firmy z Bydgoszczy?",
                  a: "Pracuję z firmami z całego regionu kujawsko-pomorskiego. Mogę spotkać się osobiście w Bydgoszczy lub pracować zdalnie.",
                },
                {
                  q: "Co wyróżnia Twoje usługi tworzenia stron internetowych?",
                  a: "15 lat doświadczenia w marketingu internetowym, copywritingu i SEO. Nie tylko programuję, ale rozumiem biznes. Każda strona to przemyślane narzędzie sprzedażowe, nie tylko ładna wizytówka.",
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
                Szukasz specjalisty od{" "}
                <span className="text-gradient">
                  tworzenia stron internetowych w Bydgoszczy
                </span>
                ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Skontaktuj się już dziś i otrzymaj darmową wycenę swojej strony.
                Spotkajmy się w Bydgoszczy przy kawie i porozmawiajmy o Twoim
                projekcie!
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

              <p className="mt-6 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 inline mr-1" />
                Tworzenie stron WWW Bydgoszcz
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
