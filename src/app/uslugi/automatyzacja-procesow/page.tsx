// src/app/uslugi/automatyzacja-procesow/page.tsx
"use client";

import { motion } from "framer-motion";

import { Navigation } from "@/components/layout/navigation";
import {
  RefreshCw,
  Rocket,
  Check,
  ArrowRight,
  Users,
  Globe,
  HeadphonesIcon,
  Phone,
  Mail,
  Sparkles,
  Database,
  ChevronRight,
  FileText,
  Package,
  MessageSquare,
  Settings,
  Briefcase,
  Lightbulb,
  Timer,
  Link2,
  GitBranch,
  PlayCircle,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AutomatyzacjaProcesow() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedProcess, setSelectedProcess] = useState<string | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Automatyzacja procesów biznesowych - Make.com, Zapier",
    description:
      "Automatyzuję procesy biznesowe łącząc aplikacje bez kodowania. 10h pracy tygodniowo zaoszczędzone.",
    provider: {
      "@type": "Person",
      name: "Karol Leszczyński",
      telephone: "+48509370772",
    },
    areaServed: "PL",
    priceRange: "990-5990 PLN",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PLN",
      lowPrice: "990",
      highPrice: "5990",
      offerCount: "3",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pakiety automatyzacji",
      itemListElement: [
        { "@type": "Offer", name: "Quick Win", price: "990" },
        { "@type": "Offer", name: "Business Flow", price: "2990" },
        { "@type": "Offer", name: "Full Automation", price: "5990" },
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
                <RefreshCw className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Make.com • Zapier • Airtable • n8n
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Automatyzacja{" "}
                <span className="text-gradient">procesów biznesowych</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong>
                  Połącz wszystkie narzędzia w jeden sprawny system.
                </strong>
                Automatyzuję procesy między aplikacjami bez kodowania. Gmail +
                Slack + CRM + Excel = workflow który działa sam.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>10h pracy tygodniowo zaoszczędzone</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>0 błędów ludzkich</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Wdrożenie w 3-7 dni</span>
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
                  href="#przyklady"
                  className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  Zobacz przykłady automatyzacji
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem wizualizacja */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Czy Twoja firma{" "}
                <span className="text-gradient">tak wygląda</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Większość firm traci 30% produktywności na ręcznym przeklejaniu
                danych między systemami
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Przed automatyzacją */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      Przed automatyzacją
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-semibold">Klient wysyła email</p>
                          <p className="text-sm text-muted-foreground">
                            Czeka w skrzynce...
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-semibold">
                            Ręczne kopiowanie do CRM
                          </p>
                          <p className="text-sm text-muted-foreground">
                            15 minut pracy
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-semibold">
                            Tworzenie zadania w Asana
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Kolejne 10 minut
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-semibold">
                            Informowanie zespołu na Slack
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Często zapominane...
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 flex-shrink-0">
                          5
                        </div>
                        <div>
                          <p className="font-semibold">
                            Aktualizacja arkusza Excel
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Błędy w formułach
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-red-500/5 rounded-lg">
                      <p className="text-sm text-red-600">
                        ⏱️ <strong>45 minut na jedno zgłoszenie</strong>
                        <br />
                        ❌ Wysokie ryzyko błędu
                        <br />
                        😓 Frustracja zespołu
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Po automatyzacji */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Po automatyzacji
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-semibold">Klient wysyła email</p>
                          <p className="text-sm text-muted-foreground">
                            Automatycznie przetwarzany
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 flex-shrink-0">
                          ✨
                        </div>
                        <div>
                          <p className="font-semibold">
                            Wszystko dzieje się automatycznie:
                          </p>
                          <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                            <li>→ Lead w CRM (1 sekunda)</li>
                            <li>→ Zadanie w Asana (1 sekunda)</li>
                            <li>→ Notyfikacja na Slack (1 sekunda)</li>
                            <li>→ Wpis w Excel (1 sekunda)</li>
                            <li>→ Email potwierdzenia (1 sekunda)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-500/5 rounded-lg">
                      <p className="text-sm text-green-600">
                        ⚡ <strong>5 sekund całość</strong>
                        <br />
                        ✅ 0% błędów
                        <br />
                        🚀 Zespół zajmuje się ważnymi zadaniami
                      </p>
                    </div>

                    <div className="mt-4 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full">
                        <Sparkles className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-600">
                          540x szybciej!
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Przykłady automatyzacji */}
        <section id="przyklady" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Popularne <span className="text-gradient">automatyzacje</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Gotowe scenariusze które możesz wdrożyć w swojej firmie
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Lead → CRM → Slack",
                  icon: <Users />,
                  trigger: "Nowy formularz na stronie",
                  actions: [
                    "Dodaj lead do CRM",
                    "Przypisz do sprzedawcy",
                    "Powiadom na Slack",
                    "Wyślij email powitalny",
                  ],
                  time: "Oszczędność: 20 min/lead",
                  tools: ["WordPress", "HubSpot", "Slack", "Gmail"],
                },
                {
                  title: "Faktura → Księgowość",
                  icon: <FileText />,
                  trigger: "Nowa faktura w email",
                  actions: [
                    "Wyciągnij dane z PDF",
                    "Dodaj do systemu księgowego",
                    "Zapisz w Google Drive",
                    "Aktualizuj cashflow",
                  ],
                  time: "Oszczędność: 15 min/faktura",
                  tools: ["Gmail", "InFakt", "Google Drive", "Sheets"],
                },
                {
                  title: "Zamówienie → Realizacja",
                  icon: <Package />,
                  trigger: "Nowe zamówienie w sklepie",
                  actions: [
                    "Generuj etykietę InPost",
                    "Aktualizuj stan magazynu",
                    "Powiadom magazyn",
                    "Email do klienta",
                  ],
                  time: "Oszczędność: 25 min/zamówienie",
                  tools: ["WooCommerce", "InPost", "BaseLinker", "SMS API"],
                },
                {
                  title: "Social Media → Publikacja",
                  icon: <Globe />,
                  trigger: "Nowy post w kalendarzu",
                  actions: [
                    "Publikuj na Facebook",
                    "Publikuj na Instagram",
                    "Publikuj na LinkedIn",
                    "Raport w arkuszu",
                  ],
                  time: "Oszczędność: 30 min/dzień",
                  tools: ["Airtable", "Facebook", "Instagram", "LinkedIn"],
                },
                {
                  title: "Rekrutacja → HR",
                  icon: <Briefcase />,
                  trigger: "Nowe CV w email",
                  actions: [
                    "Parsuj CV",
                    "Dodaj do ATS",
                    "Scoring kandydata",
                    "Email z potwierdzeniem",
                  ],
                  time: "Oszczędność: 20 min/CV",
                  tools: ["Gmail", "Workday", "Make.com", "Calendar"],
                },
                {
                  title: "Support → Tickety",
                  icon: <HeadphonesIcon />,
                  trigger: "Email na support@",
                  actions: [
                    "Utwórz ticket",
                    "Kategoryzuj problem",
                    "Przypisz do agenta",
                    "Auto-odpowiedź",
                  ],
                  time: "Oszczędność: 10 min/ticket",
                  tools: ["Gmail", "Zendesk", "Slack", "Knowledge Base"],
                },
              ].map((automation, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all hover:scale-105 cursor-pointer"
                  onClick={() =>
                    setSelectedProcess(
                      selectedProcess === automation.title
                        ? null
                        : automation.title
                    )
                  }
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {automation.icon}
                    </div>
                    <span className="text-xs text-green-500 font-semibold">
                      {automation.time}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-3">{automation.title}</h3>

                  <div className="bg-primary/5 rounded-lg p-3 mb-4">
                    <p className="text-sm text-primary flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      {automation.trigger}
                    </p>
                  </div>

                  {selectedProcess === automation.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-3"
                    >
                      <div className="space-y-2">
                        {automation.actions.map((action, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-2 text-sm"
                          >
                            <ChevronRight className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">
                              {action}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-primary/10">
                        <p className="text-xs text-muted-foreground mb-2">
                          Integracje:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {automation.tools.map((tool, k) => (
                            <span
                              key={k}
                              className="text-xs px-2 py-1 bg-muted rounded"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                To tylko przykłady. Mogę zautomatyzować dowolny proces w Twojej
                firmie.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
              >
                Opisz swój proces do automatyzacji{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Narzędzia */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Łączę <span className="text-gradient">1000+ aplikacji</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Twoje ulubione narzędzia w jednym zautomatyzowanym ekosystemie
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {/* Platformy automatyzacji */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Platformy automatyzacji
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Make.com",
                      desc: "Wizualne workflow",
                      users: "500k+",
                      power: "⭐⭐⭐⭐⭐",
                    },
                    {
                      name: "Zapier",
                      desc: "5000+ integracji",
                      users: "2M+",
                      power: "⭐⭐⭐⭐⭐",
                    },
                    {
                      name: "n8n",
                      desc: "Self-hosted",
                      users: "100k+",
                      power: "⭐⭐⭐⭐",
                    },
                    {
                      name: "Airtable",
                      desc: "Baza + automatyzacja",
                      users: "300k+",
                      power: "⭐⭐⭐⭐",
                    },
                  ].map((platform, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-4 text-center hover:scale-105 transition-transform"
                    >
                      <h4 className="font-bold mb-1">{platform.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {platform.desc}
                      </p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">
                          {platform.users}
                        </span>
                        <span>{platform.power}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Kategorie aplikacji */}
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Komunikacja
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Gmail",
                      "Outlook",
                      "Slack",
                      "Teams",
                      "Discord",
                      "Telegram",
                    ].map((app) => (
                      <div
                        key={app}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    CRM & Sprzedaż
                  </h3>
                  <div className="space-y-2">
                    {[
                      "HubSpot",
                      "Salesforce",
                      "Pipedrive",
                      "Monday",
                      "ClickUp",
                      "Notion",
                    ].map((app) => (
                      <div
                        key={app}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    E-commerce
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Shopify",
                      "WooCommerce",
                      "PrestaShop",
                      "Allegro",
                      "Amazon",
                      "eBay",
                    ].map((app) => (
                      <div
                        key={app}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  + setki innych: Google Sheets, Dropbox, Trello, Asana, Jira,
                  GitHub, Stripe, PayPal, Facebook, Instagram, LinkedIn,
                  Twitter, YouTube, Mailchimp, SendGrid, Twilio...
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Link2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    Jeśli ma API, mogę to zautomatyzować
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Kalkulator */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ile zaoszczędzisz na{" "}
                  <span className="text-gradient">automatyzacji</span>?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Prosty kalkulator ROI dla Twojej firmy
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="space-y-6">
                  {/* Inputy */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background/50 rounded-lg p-4">
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Ile procesów powtarzasz dziennie?
                      </label>
                      <div className="text-3xl font-bold">20</div>
                      <input type="range" className="w-full mt-2" />
                    </div>

                    <div className="bg-background/50 rounded-lg p-4">
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Średni czas na jeden proces (min)
                      </label>
                      <div className="text-3xl font-bold">15</div>
                      <input type="range" className="w-full mt-2" />
                    </div>
                  </div>

                  {/* Wyniki */}
                  <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-primary/20">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">5h</div>
                      <p className="text-sm text-muted-foreground">dziennie</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-500">
                        100h
                      </div>
                      <p className="text-sm text-muted-foreground">
                        miesięcznie
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-500">
                        1200h
                      </div>
                      <p className="text-sm text-muted-foreground">rocznie</p>
                    </div>
                  </div>

                  <div className="bg-green-500/10 rounded-lg p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Przy stawce 50 zł/h oszczędzasz
                    </p>
                    <div className="text-5xl font-bold text-green-500">
                      60 000 zł
                    </div>
                    <p className="text-lg text-green-600 mt-2">
                      rocznie na automatyzacji
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                  >
                    Otrzymaj spersonalizowaną wycenę
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Firmy które{" "}
                <span className="text-gradient">zautomatyzowałem</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Realne wdrożenia, mierzalne efekty
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Case 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                    📚
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Agencja Ecopywriting</h3>
                    <p className="text-sm text-muted-foreground">
                      Agencja copywriterska, 10 osób
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Problem:</h4>
                    <p className="text-sm text-muted-foreground">
                      Chaos w zarządzaniu zleceniami. Klienci pisali na email,
                      Messenger, WhatsApp. Zespół gubił zadania, przekraczał
                      deadline&apos;y.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Rozwiązanie:</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatyzacja Make.com + Airtable + Slack. Wszystkie
                      zgłoszenia trafiają do jednej bazy, automatyczne
                      przypisywanie do copywriterów, przypomnienia o
                      deadline&apos;ach.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">0</div>
                    <div className="text-xs text-muted-foreground">
                      Zgubione zlecenia
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">
                      -70%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Czas obsługi
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500">2x</div>
                    <div className="text-xs text-muted-foreground">
                      Więcej zleceń
                    </div>
                  </div>
                </div>

                <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary/30 pl-3">
                  &quot;Wreszcie mamy porządek. Automatyzacja pozwoliła nam
                  obsłużyć 2x więcej klientów bez zwiększania zespołu.&quot;
                </blockquote>
              </motion.div>

              {/* Case 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                    🛍️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Stojan Shop</h3>
                    <p className="text-sm text-muted-foreground">
                      Sklep e-commerce, 3 osoby
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Problem:</h4>
                    <p className="text-sm text-muted-foreground">
                      Ręczne wprowadzanie zamówień do systemu, generowanie
                      etykiet, aktualizacja stanów magazynowych w 3 miejscach.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Rozwiązanie:</h4>
                    <p className="text-sm text-muted-foreground">
                      Integracja WooCommerce + BaseLinker + InPost API +
                      Allegro. Pełna automatyzacja od zamówienia do wysyłki.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2 min</div>
                    <div className="text-xs text-muted-foreground">
                      Na zamówienie
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">
                      100%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Automatycznie
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500">4h</div>
                    <div className="text-xs text-muted-foreground">
                      Dziennie oszczędzone
                    </div>
                  </div>
                </div>

                <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary/30 pl-3">
                  &quot;Teraz mogę skupić się na pozyskiwaniu klientów zamiast
                  klikać w systemy. Automatyzacja obsługuje 100% zamówień.&quot;
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proces wdrożenia */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Automatyzacja w <span className="text-gradient">7 dni</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Szybkie wdrożenie, natychmiastowe efekty
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

                <div className="space-y-8">
                  {[
                    {
                      day: "Dzień 1",
                      title: "Audyt procesów",
                      desc: "Analizuję Twoje procesy, identyfikuję bottlenecki i potencjał automatyzacji",
                      icon: <Lightbulb />,
                    },
                    {
                      day: "Dzień 2-3",
                      title: "Projekt workflow",
                      desc: "Projektuję optymalny przepływ danych między aplikacjami",
                      icon: <GitBranch />,
                    },
                    {
                      day: "Dzień 4-5",
                      title: "Konfiguracja",
                      desc: "Konfiguruję automatyzacje w Make.com/Zapier, łączę API",
                      icon: <Settings />,
                    },
                    {
                      day: "Dzień 6",
                      title: "Testy",
                      desc: "Testuję każdy scenariusz, sprawdzam edge case'y",
                      icon: <CheckCircle />,
                    },
                    {
                      day: "Dzień 7",
                      title: "Wdrożenie",
                      desc: "Uruchamiam automatyzacje na produkcji, szkolę zespół",
                      icon: <Rocket />,
                    },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="relative z-10 w-16 h-16 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold">{step.title}</h3>
                            <span className="text-sm text-primary">
                              {step.day}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pakiety */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pakiety <span className="text-gradient">automatyzacji</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Od pojedynczych workflow po kompleksową automatyzację firmy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Quick Win",
                  price: "990",
                  time: "2-3 dni",
                  desc: "Jedna konkretna automatyzacja",
                  features: [
                    "1 proces do automatyzacji",
                    "Do 5 kroków w workflow",
                    "2 aplikacje do połączenia",
                    "Dokumentacja",
                    "Szkolenie online",
                    "7 dni wsparcia",
                  ],
                  best: false,
                  examples: "np. Email → CRM, Formularz → Slack",
                },
                {
                  name: "Business Flow",
                  price: "2 990",
                  time: "1 tydzień",
                  desc: "Automatyzacja działu lub procesu",
                  features: [
                    "Do 5 procesów",
                    "Nieograniczone kroki",
                    "Wszystkie potrzebne integracje",
                    "Dashboard w Airtable",
                    "Szkolenie zespołu",
                    "30 dni wsparcia",
                    "Optymalizacja po wdrożeniu",
                  ],
                  best: true,
                  examples: "np. Cały proces sprzedaży, Obsługa zamówień",
                },
                {
                  name: "Full Automation",
                  price: "od 5 990",
                  time: "2-3 tygodnie",
                  desc: "Kompleksowa automatyzacja firmy",
                  features: [
                    "Nieograniczone procesy",
                    "Zaawansowane workflow",
                    "Custom integracje API",
                    "Własne dashboardy",
                    "Automatyczne raporty",
                    "3 miesiące wsparcia",
                    "Miesięczna optymalizacja",
                    "SLA gwarancja",
                  ],
                  best: false,
                  examples: "np. Pełna automatyzacja wszystkich działów",
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

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-xs text-muted-foreground mb-6 italic">
                    {plan.examples}
                  </div>

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
                Koszty platform (Make.com/Zapier) od 19$/mies - pomogę wybrać
                najlepszą opcję
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pytania o <span className="text-gradient">automatyzację</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Czy automatyzacja jest trudna w obsłudze?",
                  a: "Nie! Platformy jak Make.com czy Zapier mają wizualne interfejsy. Po krótkim szkoleniu będziesz mógł sam modyfikować automatyzacje. To jak układanie klocków - przeciągasz i łączysz aplikacje.",
                },
                {
                  q: "Co jeśli zmienię narzędzia w firmie?",
                  a: "Automatyzacje są elastyczne. Jeśli zmienisz np. CRM, wystarczy podmienić jeden moduł w workflow. Reszta automatyzacji pozostaje bez zmian. Pomogę w migracji.",
                },
                {
                  q: "Ile kosztuje utrzymanie automatyzacji?",
                  a: "Make.com kosztuje od 9$/mies (1000 operacji), Zapier od 19$/mies. Dla małej firmy to zazwyczaj 50-200 zł/mies. To ułamek tego, co zaoszczędzisz na czasie pracy.",
                },
                {
                  q: "Czy mogę zacząć od jednej automatyzacji?",
                  a: "Oczywiście! Pakiet Quick Win za 990 zł to idealne rozwiązanie na start. Zobaczysz efekty i zdecydujesz o kolejnych automatyzacjach.",
                },
                {
                  q: "Jakie procesy najlepiej automatyzować najpierw?",
                  a: "Te najbardziej powtarzalne i czasochłonne: wprowadzanie danych, generowanie raportów, powiadomienia, synchronizacja między systemami. Podczas audytu wskażę najlepsze kandydatów.",
                },
                {
                  q: "Czy automatyzacja jest bezpieczna?",
                  a: "Tak. Platformy automatyzacji są zgodne z GDPR, używają szyfrowania, mają certyfikaty bezpieczeństwa. Dodatkowo ustawiam limity i zabezpieczenia przed błędami.",
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
                <Timer className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-green-500">
                  Średnio 10h tygodniowo zaoszczędzone
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Przestań tracić czas na{" "}
                <span className="text-gradient">kopiuj-wklej</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Twoi konkurenci już automatyzują procesy i zyskują przewagę.
                Każdy dzień zwłoki to stracone pieniądze i frustracja zespołu.
                <strong>
                  {" "}
                  Darmowa konsultacja pokaże Ci, co możesz zautomatyzować już
                  dziś.
                </strong>
              </p>

              <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 mb-8 max-w-md mx-auto">
                <h3 className="font-semibold mb-4">
                  Na konsultacji dowiesz się:
                </h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Które procesy automatyzować najpierw
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Ile godzin tygodniowo zaoszczędzisz
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Jakie narzędzia będą najlepsze
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Dokładny koszt i czas wdrożenia
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
                Zarezerwuj darmową konsultację
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="mt-8 text-sm text-muted-foreground">
                ⚡ Konsultacja 30 min • 🎯 Konkretne rekomendacje • 📊 Wycena na
                miejscu • 🚀 Start automatyzacji w 48h
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
