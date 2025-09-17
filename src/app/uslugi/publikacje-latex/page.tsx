// src/app/uslugi/publikacje-latex/page.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import {
  Book,
  FileText,
  Code2,
  Check,
  ArrowRight,
  Award,
  ChevronRight,
  Phone,
  Mail,
  Lightbulb,
  Layers,
  CheckCircle,
  PenTool,
  FileCode,
  BookOpen,
  GraduationCap,
  Printer,
  Download,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PublikacjeLatex() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>("wszystkie");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Desktop Publishing",
    name: "Skład publikacji LaTeX i Quarto",
    description:
      "Profesjonalny skład książek, prac naukowych i publikacji edukacyjnych w LaTeX.",
    provider: {
      "@type": "Person",
      name: "Karol Leszczyński",
      knowsAbout: ["LaTeX", "Quarto", "Academic Publishing"],
    },
    areaServed: "PL",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Skład pracy naukowej",
            description: "Bibliografia, indeksy, formatowanie",
          },
        },
      ],
    },
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "50",
      priceCurrency: "PLN",
      unitText: "strona",
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
                <FileCode className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  LaTeX • Quarto • R Markdown • Pandoc
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Publikacje <span className="text-gradient">LaTeX/Quarto</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong>Od koncepcji do gotowej publikacji.</strong>
                Tworzę profesjonalne książki, podręczniki, zeszyty ćwiczeń i
                dokumenty naukowe. Zajmuję się wszystkim - treścią, składem i
                przygotowaniem do druku.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>11 publikacji wydanych</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>1500+ stron składu</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Print-ready PDF</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Wycena publikacji
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#portfolio"
                  className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  Zobacz portfolio
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dlaczego LaTeX */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dlaczego <span className="text-gradient">LaTeX/Quarto</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Profesjonalny skład, który wyróżnia Twoje publikacje na rynku
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* LaTeX vs Word */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-primary" />
                  LaTeX/Quarto
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Typografia na poziomie wydawnictw naukowych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Automatyczne numerowanie, spisy, indeksy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Perfekcyjne wzory matematyczne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Bibliografia zgodna ze standardami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Wielokrotne użycie szablonów</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Kontrola wersji (Git)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>PDF gotowy do druku profesjonalnego</span>
                  </li>
                </ul>
              </motion.div>

              {/* Word/InDesign */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-500/5 border border-red-500/20 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-red-500" />
                  Word/Typowe programy
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-muted-foreground">
                      Problemy z formatowaniem przy dużych dokumentach
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-muted-foreground">
                      Ręczna numeracja i aktualizacja spisów
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-muted-foreground">
                      Ograniczone możliwości wzorów
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-muted-foreground">
                      Problemy z bibliografią
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-muted-foreground">
                      Każda publikacja od zera
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-muted-foreground">
                      Brak kontroli wersji
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-muted-foreground">
                      Problemy z drukiem profesjonalnym
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Moje <span className="text-gradient">publikacje</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                11 profesjonalnych publikacji gotowych do druku
              </p>
            </motion.div>

            {/* Filtr */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {[
                "wszystkie",
                "zeszyty ćwiczeń",
                "podręczniki",
                "e-booki",
                "naukowe",
              ].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full transition-all capitalize ${
                    selectedType === type
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Edukowanie pacjentów w zakresie profilaktyki",
                  type: "zeszyty ćwiczeń",
                  pages: "120",
                  target: "Szkoły policealne - higienistka stomatologiczna",
                  features: [
                    "Ćwiczenia praktyczne",
                    "Schematy",
                    "Tabele",
                    "Kolorowe wykresy",
                  ],
                  tech: "LaTeX + TikZ",
                },
                {
                  title: "Diagnozowanie i planowanie leczenia",
                  type: "zeszyty ćwiczeń",
                  pages: "150",
                  target: "Technik masażysta",
                  features: [
                    "Case studies",
                    "Ćwiczenia",
                    "Diagramy",
                    "Formularze",
                  ],
                  tech: "Quarto + R",
                },
                {
                  title: "Wykonywanie zabiegów fizjoterapeutycznych",
                  type: "zeszyty ćwiczeń",
                  pages: "180",
                  target: "Technik fizjoterapii",
                  features: [
                    "Ilustracje anatomiczne",
                    "Procedury",
                    "Testy",
                    "Bibliografia",
                  ],
                  tech: "LaTeX + PGF",
                },
                {
                  title: "Jak zostać copywriterem",
                  type: "e-booki",
                  pages: "250",
                  target: "Początkujący copywriterzy",
                  features: [
                    "Praktyczne porady",
                    "Case studies",
                    "Szablony",
                    "Ćwiczenia",
                  ],
                  tech: "LaTeX + hyperref",
                },
                {
                  title: "Prowadzenie działalności profilaktyczno-leczniczej",
                  type: "zeszyty ćwiczeń",
                  pages: "140",
                  target: "Opiekun medyczny",
                  features: [
                    "Procedury medyczne",
                    "Checklisty",
                    "Formularze",
                    "Testy",
                  ],
                  tech: "Quarto",
                },
                {
                  title: "Świadczenie usług pielęgnacyjno-opiekuńczych",
                  type: "zeszyty ćwiczeń",
                  pages: "160",
                  target: "Opiekunka środowiskowa",
                  features: [
                    "Standardy opieki",
                    "Dokumentacja",
                    "Ćwiczenia",
                    "Przypadki",
                  ],
                  tech: "LaTeX + longtable",
                },
              ]
                .filter(
                  (pub) =>
                    selectedType === "wszystkie" || pub.type === selectedType
                )
                .map((publication, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <BookOpen className="w-8 h-8 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {publication.pages} stron
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2">
                      {publication.title}
                    </h3>
                    <p className="text-sm text-primary mb-3">
                      {publication.target}
                    </p>

                    <div className="space-y-2 mb-4">
                      {publication.features.map((feature, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                      <span className="text-xs text-muted-foreground">
                        {publication.tech}
                      </span>
                      <span className="text-xs px-2 py-1 bg-primary/10 rounded-full text-primary">
                        {publication.type}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                + 5 kolejnych publikacji w realizacji
              </p>
            </div>
          </div>
        </section>

        {/* Proces tworzenia */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Od pomysłu do{" "}
                <span className="text-gradient">gotowej książki</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kompleksowy proces tworzenia publikacji
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Koncepcja i planowanie",
                      desc: "Analiza grupy docelowej, określenie celów publikacji, struktura treści",
                      time: "2-3 dni",
                      icon: <Lightbulb />,
                    },
                    {
                      step: "2",
                      title: "Tworzenie treści",
                      desc: "Pisanie merytorycznej treści, ćwiczeń, przykładów, case studies",
                      time: "2-4 tygodnie",
                      icon: <PenTool />,
                    },
                    {
                      step: "3",
                      title: "Projekt graficzny",
                      desc: "Szablon LaTeX, style, kolory, układ stron, elementy graficzne",
                      time: "3-5 dni",
                      icon: <Layers />,
                    },
                    {
                      step: "4",
                      title: "Skład w LaTeX/Quarto",
                      desc: "Profesjonalny skład, wzory, tabele, wykresy, bibliografia",
                      time: "1-2 tygodnie",
                      icon: <FileCode />,
                    },
                    {
                      step: "5",
                      title: "Korekta i redakcja",
                      desc: "Korekta językowa, merytoryczna, adjustacja tekstu",
                      time: "3-5 dni",
                      icon: <CheckCircle />,
                    },
                    {
                      step: "6",
                      title: "Przygotowanie do druku",
                      desc: "PDF print-ready, spady, CMYK, preflight check",
                      time: "1-2 dni",
                      icon: <Printer />,
                    },
                  ].map((phase, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="relative z-10 w-16 h-16 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {phase.step}
                        </span>
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                              {phase.icon}
                              {phase.title}
                            </h3>
                            <span className="text-sm text-primary">
                              {phase.time}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{phase.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg font-semibold text-primary mb-2">
                Całkowity czas: 4-8 tygodni
              </p>
              <p className="text-muted-foreground">
                Od pierwszego spotkania do plików gotowych do druku
              </p>
            </div>
          </div>
        </section>

        {/* Co możesz zlecić */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Co mogę dla Ciebie{" "}
                <span className="text-gradient">stworzyć</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Każdy typ publikacji profesjonalnej
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Podręczniki akademickie",
                  icon: <GraduationCap />,
                  desc: "Podręczniki dla uczelni wyższych i szkół policealnych",
                  features: [
                    "Przypisy",
                    "Bibliografia",
                    "Indeksy",
                    "Wzory matematyczne",
                  ],
                  price: "od 5000 zł",
                },
                {
                  title: "Zeszyty ćwiczeń",
                  icon: <PenTool />,
                  desc: "Materiały ćwiczeniowe dla uczniów i studentów",
                  features: [
                    "Zadania",
                    "Testy",
                    "Klucz odpowiedzi",
                    "Ilustracje",
                  ],
                  price: "od 3000 zł",
                },
                {
                  title: "Książki branżowe",
                  icon: <Book />,
                  desc: "Publikacje specjalistyczne i poradniki",
                  features: [
                    "Case studies",
                    "Przykłady",
                    "Schematy",
                    "Checklisty",
                  ],
                  price: "od 4000 zł",
                },
                {
                  title: "E-booki",
                  icon: <Download />,
                  desc: "Publikacje elektroniczne w PDF z interaktywnością",
                  features: [
                    "Hyperlinki",
                    "Zakładki",
                    "Formularze",
                    "Multimedia",
                  ],
                  price: "od 2000 zł",
                },
                {
                  title: "Prace naukowe",
                  icon: <FileText />,
                  desc: "Dysertacje, monografie, artykuły naukowe",
                  features: [
                    "Cytowania",
                    "Bibliografia",
                    "Abstract",
                    "Peer-review ready",
                  ],
                  price: "od 1500 zł",
                },
                {
                  title: "Dokumentacja techniczna",
                  icon: <FileCode />,
                  desc: "Manualne, specyfikacje, dokumentacja API",
                  features: [
                    "Diagramy",
                    "Code snippets",
                    "Flowcharty",
                    "Wersjonowanie",
                  ],
                  price: "od 2500 zł",
                },
              ].map((type, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {type.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.desc}</p>

                  <ul className="space-y-2 mb-4">
                    {type.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-primary/10">
                    <span className="text-sm text-primary font-semibold">
                      {type.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dlaczego ja */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dlaczego warto mi <span className="text-gradient">zaufać</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Unikalne połączenie kompetencji
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
                  <PenTool className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Copywriter + Autor</h3>
                <p className="text-muted-foreground">
                  15 lat doświadczenia w pisaniu. <strong>5000+ tekstów</strong>{" "}
                  komercyjnych. Wiem jak pisać, żeby było zrozumiałe i
                  angażujące.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <FileCode className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ekspert LaTeX</h3>
                <p className="text-muted-foreground">
                  Zaawansowana znajomość LaTeX, Quarto, R Markdown.
                  <strong>11 publikacji</strong> przygotowanych do druku
                  profesjonalnego.
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
                <h3 className="text-xl font-bold mb-3">Programista</h3>
                <p className="text-muted-foreground">
                  Automatyzacja procesów, skrypty Python/R do generowania
                  treści.
                  <strong>Git dla kontroli wersji</strong> publikacji.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Kompleksowa obsługa = oszczędność czasu i pieniędzy
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nie musisz zatrudniać osobno: autora, redaktora, składacza i
                  grafika. Dostajesz wszystko od jednej osoby - szybciej,
                  taniej, sprawniej.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">-50%</div>
                    <div className="text-xs text-muted-foreground">kosztów</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">2x</div>
                    <div className="text-xs text-muted-foreground">
                      szybciej
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">1</div>
                    <div className="text-xs text-muted-foreground">kontakt</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground">
                      kontroli
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pakiety */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pakiety <span className="text-gradient">publikacyjne</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Od pojedynczego rozdziału po kompletną serię wydawniczą
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "1 990",
                  desc: "Dla małych projektów",
                  features: [
                    "Do 50 stron",
                    "Podstawowy szablon LaTeX",
                    "Skład tekstu i prostych tabel",
                    "1 runda korekt",
                    "PDF do druku cyfrowego",
                    "Pliki źródłowe LaTeX",
                  ],
                  best: false,
                },
                {
                  name: "Professional",
                  price: "4 990",
                  desc: "Pełna publikacja profesjonalna",
                  features: [
                    "Do 150 stron",
                    "Dedykowany szablon",
                    "Skład zaawansowany (wzory, wykresy)",
                    "Projekt okładki",
                    "2 rundy korekt",
                    "PDF print-ready + e-book",
                    "Bibliografia i indeksy",
                    "Kontrola wersji Git",
                  ],
                  best: true,
                },
                {
                  name: "Publisher",
                  price: "od 9 990",
                  desc: "Dla wydawnictw i serii",
                  features: [
                    "Bez limitu stron",
                    "System szablonów dla serii",
                    "Pełna automatyzacja składu",
                    "Projekt graficzny kompletny",
                    "Korekta profesjonalna",
                    "Wszystkie formaty (print, e-book, web)",
                    "Wsparcie przy druku",
                    "Długoterminowa współpraca",
                  ],
                  best: false,
                },
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative bg-background/50 backdrop-blur-sm border rounded-xl p-8 hover:scale-105 transition-all ${
                    plan.best ? "border-primary shadow-xl" : "border-primary/10"
                  }`}
                >
                  {plan.best && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Najpopularniejszy
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
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
                      plan.best
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-primary text-primary hover:bg-primary/10"
                    }`}
                  >
                    Wybierz pakiet
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Potrzebujesz tylko korekty lub samego składu? Wyceniam
                indywidualnie.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pytania o{" "}
                <span className="text-gradient">publikacje LaTeX</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Czym LaTeX różni się od Worda czy InDesign?",
                  a: "LaTeX to system składu profesjonalnego używany przez wydawnictwa naukowe i uczelnie na całym świecie. Gwarantuje perfekcyjną typografię, automatyczną numerację, bibliografia zgodną ze standardami. Word się 'sypie' przy dużych dokumentach, InDesign wymaga ręcznej pracy. LaTeX automatyzuje wszystko.",
                },
                {
                  q: "Czy mogę potem edytować publikację samodzielnie?",
                  a: "Tak! Dostarczam pliki źródłowe LaTeX/Quarto wraz z dokumentacją. Jeśli znasz podstawy LaTeX, możesz wprowadzać zmiany. Oferuję też wsparcie i szkolenia. Dla prostych zmian mogę przygotować szablon z instrukcją.",
                },
                {
                  q: "Ile trwa stworzenie publikacji?",
                  a: "Zeszyt ćwiczeń (100-150 stron) - około 4-6 tygodni. E-book (200-300 stron) - 6-8 tygodni. Podręcznik akademicki - 8-12 tygodni. Czas zależy od złożoności i ilości grafik/wzorów.",
                },
                {
                  q: "Czy tworzysz też treść, czy tylko skład?",
                  a: "Oferuję pełną usługę - od koncepcji, przez napisanie treści, po skład i przygotowanie do druku. Mogę też zrobić sam skład, jeśli masz gotową treść.",
                },
                {
                  q: "Jakie formaty dostarczasz?",
                  a: "PDF print-ready (CMYK, spady, znaczniki), PDF do publikacji online, źródła LaTeX/Quarto, opcjonalnie: HTML, EPUB, DOCX. Wszystko zależy od potrzeb.",
                },
                {
                  q: "Czy publikacje nadają się do druku offsetowego?",
                  a: "Absolutnie tak! Przygotowuję pliki zgodnie z wymogami drukarni: CMYK, rozdzielczość 300 DPI, spady, znaczniki cięcia. Mam doświadczenie we współpracy z drukarniami.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm rounded-lg border border-primary/10"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  11 publikacji • 1500+ stron • 100% satysfakcji
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Twoja publikacja{" "}
                <span className="text-gradient">
                  zasługuje na profesjonalny skład
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Nie pozwól, żeby Twoja wartościowa treść wyglądała amatorsko.
                LaTeX to standard w publikacjach naukowych i profesjonalnych.
                <strong> Darmowa konsultacja pokaże Ci możliwości.</strong>
              </p>

              <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 mb-8 max-w-md mx-auto">
                <h3 className="font-semibold mb-4">
                  Na konsultacji otrzymasz:
                </h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Przykład Twojej treści złożonej w LaTeX
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Porównanie LaTeX vs Word dla Twojego projektu
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Wycenę i harmonogram realizacji
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Portfolio podobnych publikacji
                    </span>
                  </li>
                </ul>
              </div>

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
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
              >
                Zamów darmową konsultację
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="mt-8 text-sm text-muted-foreground">
                📚 Portfolio 11 publikacji • ⚡ Wycena w 24h • 🎯 Przykład
                składu gratis • 📖 100% gotowe do druku
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
