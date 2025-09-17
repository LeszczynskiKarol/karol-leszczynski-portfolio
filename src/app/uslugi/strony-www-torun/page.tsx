// src/app/uslugi/strony-www-torun/page.tsx
"use client";

import { motion } from "framer-motion";

import { Navigation } from "@/components/layout/navigation";
import {
  Globe,
  Search,
  Smartphone,
  Code2,
  Check,
  ArrowRight,
  Palette,
  BarChart,
  Lock,
  Gauge,
  HeadphonesIcon,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  MousePointer,
  FileText,
  Calendar,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function StronyWWWTorun() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Strony internetowe Toruń",
    description:
      "Tworzenie stron internetowych w Toruniu. Next.js, WordPress, responsywne, SEO.",
    creator: {
      "@type": "LocalBusiness",
      name: "Karol Leszczyński - Strony WWW",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toruń",
        addressRegion: "Kujawsko-Pomorskie",
      },
      telephone: "+48509370772",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PLN",
      lowPrice: "1990",
      highPrice: "9990",
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
                  Toruń • Kujawsko-Pomorskie
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Strony internetowe <span className="text-gradient">Toruń</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Strony WWW, które przyciągają klientów i budują zaufanie. Łączę
                15 lat doświadczenia w copywritingu z najnowszymi technologiami
                web. Twoja strona będzie szybka, piękna i skuteczna w sprzedaży.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>PageSpeed 95+</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Gotowa w 14 dni</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>SEO w standardzie</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Zamów bezpłatną wycenę
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#realizacje"
                  className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  Zobacz realizacje
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
                { value: "50+", label: "Stron WWW zrealizowanych" },
                { value: "95+", label: "Średni PageSpeed" },
                { value: "14 dni", label: "Średni czas realizacji" },
                { value: "100%", label: "Zadowolonych klientów" },
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

        {/* Dlaczego ja */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Strona WWW to{" "}
                <span className="text-gradient">więcej niż kod</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                To przede wszystkim narzędzie sprzedaży. Dlatego każdą stronę
                projektuję z myślą o konwersji, wykorzystując wiedzę z 15 lat
                pracy w marketingu.
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
                  <FileText className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Copywriter z 15-letnim stażem
                </h3>
                <p className="text-muted-foreground">
                  Napisałem ponad <strong>5000 tekstów sprzedażowych</strong>.
                  Wiem, jak słowa przekładają się na sprzedaż. Twoja strona WWW
                  będzie miała treści, które konwertują.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Specjalista SEO</h3>
                <p className="text-muted-foreground">
                  Od 2012 roku pozycjonuję strony.{" "}
                  <strong>Każdą stronę buduję od podstaw pod Google</strong>.
                  Zero dodatkowych kosztów na późniejszą optymalizację.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Code2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Full-Stack Developer</h3>
                <p className="text-muted-foreground">
                  Używam najnowszych technologii:{" "}
                  <strong>Next.js, React, Node.js, Astro</strong>. Twoja strona
                  będzie szybsza od 95% konkurencji.
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
              <h3 className="text-2xl font-bold mb-3">Webdesigner z Torunia</h3>
              <p className="text-muted-foreground mb-6">
                Możemy spotkać się na kawę w Toruniu. Omówimy projekt twarzą w
                twarz. Po wdrożeniu jestem na miejscu, gdy potrzebujesz pomocy.
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <span className="px-3 py-1 bg-primary/10 rounded-full">
                  Spotkania osobiste
                </span>
                <span className="px-3 py-1 bg-primary/10 rounded-full">
                  Szkolenia na miejscu
                </span>
                <span className="px-3 py-1 bg-primary/10 rounded-full">
                  Lokalne wsparcie
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Typy stron */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jakie strony internetowe{" "}
                <span className="text-gradient">tworzę</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Od wizytówek po zaawansowane aplikacje webowe
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Strony firmowe",
                  desc: "Profesjonalne strony prezentujące Twoją firmę, usługi i portfolio. Idealne dla małych i średnich firm.",
                  features: [
                    "O firmie",
                    "Usługi",
                    "Portfolio",
                    "Kontakt",
                    "Blog firmowy",
                  ],
                  icon: <Globe />,
                },
                {
                  title: "Landing Page",
                  desc: "Strony sprzedażowe nastawione na konkretną konwersję. Idealne do kampanii reklamowych.",
                  features: [
                    "Jeden cel",
                    "Wysoka konwersja",
                    "A/B testy",
                    "Integracje",
                    "Analytics",
                  ],
                  icon: <MousePointer />,
                },
                {
                  title: "Strony portfolio",
                  desc: "Prezentacja Twoich projektów i realizacji. Dla freelancerów, artystów, architektów.",
                  features: [
                    "Galerie",
                    "Case studies",
                    "Filtry projektów",
                    "Lightbox",
                    "Animacje",
                  ],
                  icon: <Palette />,
                },
                {
                  title: "Strony usługowe",
                  desc: "Kompleksowa prezentacja usług z możliwością rezerwacji i wyceny online.",
                  features: [
                    "Katalog usług",
                    "Kalendarze",
                    "Formularze",
                    "Kalkulatory",
                    "Płatności",
                  ],
                  icon: <Calendar />,
                },
                {
                  title: "Blogi i magazyny",
                  desc: "Platformy contentowe z zaawansowanym CMS. Łatwe zarządzanie treścią.",
                  features: [
                    "CMS",
                    "Kategorie",
                    "Tagi",
                    "Newsletter",
                    "Komentarze",
                  ],
                  icon: <FileText />,
                },
                {
                  title: "Aplikacje webowe",
                  desc: "Zaawansowane systemy i platformy SaaS. Panele klienta, CRM, automatyzacje.",
                  features: [
                    "Logowanie",
                    "Panel admina",
                    "API",
                    "Bazy danych",
                    "Integracje",
                  ],
                  icon: <Code2 />,
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

        {/* Realizacje */}
        <section id="realizacje" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ostatnie <span className="text-gradient">realizacje</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strony które przynoszą efekty moim klientom
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
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
                      Producent mebli kuchennych
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
                      Firmowa strona WWW
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
                Zobacz więcej projektów <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Proces */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Strona WWW w <span className="text-gradient">14 dni</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sprawdzony proces, który gwarantuje terminowość
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  day: "Dzień 1-2",
                  title: "Brief & Strategia",
                  tasks: [
                    "Analiza konkurencji",
                    "Mapa strony",
                    "Strategia SEO",
                    "Wireframes",
                  ],
                },
                {
                  day: "Dzień 3-5",
                  title: "Projekt graficzny",
                  tasks: [
                    "Projekt UI/UX",
                    "Wybór kolorystyki",
                    "Typografia",
                    "Responsywność",
                  ],
                },
                {
                  day: "Dzień 6-10",
                  title: "Kodowanie",
                  tasks: ["Frontend", "Backend", "Integracje", "Optymalizacja"],
                },
                {
                  day: "Dzień 11-14",
                  title: "Finalizacja",
                  tasks: ["Treści i SEO", "Testy", "Szkolenie", "Publikacja"],
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
                Co otrzymujesz <span className="text-gradient">w pakiecie</span>
                ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kompletne rozwiązanie bez ukrytych kosztów
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <Smartphone />,
                  title: "Responsywny design",
                  desc: "Strona idealnie dopasowana do każdego urządzenia",
                },
                {
                  icon: <Gauge />,
                  title: "PageSpeed 80+",
                  desc: "Błyskawiczne ładowanie, lepsza pozycja w Google",
                },
                {
                  icon: <Search />,
                  title: "Optymalizacja SEO",
                  desc: "Meta tagi, struktura URL, Schema.org, sitemap",
                },
                {
                  icon: <Lock />,
                  title: "Certyfikat SSL",
                  desc: "Bezpieczne połączenie HTTPS w standardzie",
                },
                {
                  icon: <BarChart />,
                  title: "Google Analytics",
                  desc: "Pełna analityka ruchu i zachowań użytkowników",
                },
                {
                  icon: <HeadphonesIcon />,
                  title: "Wsparcie 3 miesiące",
                  desc: "Pomoc techniczna i drobne poprawki gratis",
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
                Często zadawane <span className="text-gradient">pytania</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "W jakich technologiach tworzysz strony WWW?",
                  a: "Używam najnowszych technologii: Next.js, React, Astro, Node.js, TypeScript. To gwarantuje szybkość, bezpieczeństwo i skalowalność. Dla prostszych projektów mogę użyć WordPress, ale zawsze polecam nowoczesne, dedykowany strony internetowe czy to firmowe, czy na użytek prywatny.",
                },
                {
                  q: "Czy mogę sam edytować treści na stronie?",
                  a: "Jeśli zamawiasz stronę z CMS-em, edytowanie treści odbywa się w intuicyjnym, graficznym panelu administratora. W przypadku statycznych stron WWW edycja zawartości odbywa się poprzez modyfikację kodu plików składających się na witrynę.",
                },
                {
                  q: "Ile kosztuje utrzymanie strony?",
                  a: "Hosting i domena to koszt około 300-500 zł rocznie dla standardowej strony. Pierwszy rok masz w cenie.",
                },
                {
                  q: "Czy strona będzie wysoko w Google?",
                  a: "Każdą stronę buduję zgodnie z najlepszymi praktykami SEO. To solidna podstawa do pozycjonowania, jednak pamiętaj, że bez działań w zakresie SEO istnieją nikłe szanse na osiągnięcie wysokich pozycji, szczególnie jeśli działasz w wysoce konkurencyjnym otoczeniu.",
                },
                {
                  q: "Co, jeśli będę potrzebował zmian po wdrożeniu?",
                  a: "Przez pierwsze 1-3 miesiące (zależnie od pakietu) masz darmowe wsparcie i drobne poprawki. Później oferuję wsparcie w abonamencie lub rozliczenie godzinowe.",
                },
                {
                  q: "Dlaczego warto wybrać lokalnego wykonawcę z Torunia?",
                  a: "Możemy spotkać się osobiście, omówić projekt przy kawie. Jestem na miejscu, gdy potrzebujesz pomocy. Znam lokalny rynek i specyfikę firm z regionu kujawsko-pomorskiego.",
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
                Potrzebujesz strony WWW w{" "}
                <span className="text-gradient">Toruniu</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Zadzwoń lub napisz. Przygotuje bezpłatną wycenę Twojej strony
                internetowej. Spotkajmy się na kawę w Toruniu i omówmy Twój
                projekt!
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
                Zamów bezpłatną wycenę
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="mt-6 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 inline mr-1" />
                Toruń
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
