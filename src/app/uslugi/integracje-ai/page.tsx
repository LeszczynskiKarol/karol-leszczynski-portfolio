// src/app/uslugi/integracje-ai/page.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import {
  Brain,
  Rocket,
  TrendingUp,
  Check,
  ArrowRight,
  Users,
  HeadphonesIcon,
  ChevronRight,
  Phone,
  Mail,
  Target,
  Calculator,
  Settings,
  Lightbulb,
  Timer,
  PiggyBank,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function IntegrajeAI() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState("wszystkie");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Integracje AI dla firm",
    description:
      "Wdrażam sztuczną inteligencję w firmach. Chatboty, automatyzacja, ROI 250%.",
    author: {
      "@type": "Person",
      name: "Karol Leszczyński",
      expertise: "AI Integration",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PLN",
      lowPrice: "2990",
      highPrice: "19990",
      offerCount: "3",
      offers: [
        { "@type": "Offer", name: "AI Starter", price: "2990" },
        { "@type": "Offer", name: "AI Business", price: "9990" },
        { "@type": "Offer", name: "AI Enterprise", price: "19990" },
      ],
    },
    about: {
      "@type": "Thing",
      name: "Artificial Intelligence",
      description: "OpenAI, Anthropic Claude, Custom AI Solutions",
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
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Wdrożenia AI • Automatyzacja • Optymalizacja
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Integracje <span className="text-gradient">AI dla firm</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong>
                  Automatyzuj procesy, które zabierają 80% czasu Twojego
                  zespołu.
                </strong>
                Wdrażam sztuczną inteligencję w istniejące systemy biznesowe.
                Bez rewolucji, bez wymiany oprogramowania - tylko realne
                usprawnienia.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Średni ROI: 250% w 6 miesięcy</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>70% redukcja kosztów operacyjnych</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Wdrożenie w 2-4 tygodnie</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Zamów darmowy audyt AI
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#kalkulator"
                  className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  Kalkulator oszczędności
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Problem */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-red-500/5 border border-red-500/20 rounded-xl p-8"
                >
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 mb-4">
                    <Timer className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Bez AI - tracisz czas i pieniądze
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-muted-foreground">
                        Pracownicy spędzają 60% czasu na powtarzalnych zadaniach
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-muted-foreground">
                        Klienci czekają godzinami na odpowiedź
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-muted-foreground">
                        Błędy ludzkie kosztują tysiące złotych
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-muted-foreground">
                        Konkurencja z AI przejmuje Twoich klientów
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-muted-foreground">
                        Skalowanie wymaga zatrudniania nowych osób
                      </span>
                    </li>
                  </ul>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-green-500/5 border border-green-500/20 rounded-xl p-8"
                >
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 mb-4">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Z AI - automatyzacja i wzrost
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-muted-foreground">
                        AI wykonuje 80% rutynowych zadań automatycznie
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-muted-foreground">
                        Chatbot odpowiada klientom 24/7 w sekundach
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-muted-foreground">
                        99.9% dokładność w przetwarzaniu danych
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-muted-foreground">
                        Przewaga konkurencyjna dzięki innowacji
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-muted-foreground">
                        Skalowanie bez zwiększania zespołu
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Co możesz zautomatyzować */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Co możesz{" "}
                <span className="text-gradient">zautomatyzować z AI</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Praktyczne zastosowania AI w każdym dziale Twojej firmy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  dept: "Obsługa klienta",
                  icon: <HeadphonesIcon />,
                  tasks: [
                    "Chatbot odpowiadający na 80% pytań",
                    "Automatyczna kategoryzacja zgłoszeń",
                    "Analiza sentymentu rozmów",
                    "Generowanie odpowiedzi email",
                    "FAQ dynamiczne",
                  ],
                  savings: "60% czasu",
                },
                {
                  dept: "Sprzedaż",
                  icon: <TrendingUp />,
                  tasks: [
                    "Scoring i kwalifikacja leadów",
                    "Personalizowane oferty",
                    "Automatyczne follow-upy",
                    "Prognozowanie sprzedaży",
                    "Analiza konkurencji",
                  ],
                  savings: "40% więcej konwersji",
                },
                {
                  dept: "Marketing",
                  icon: <Target />,
                  tasks: [
                    "Generowanie treści i postów",
                    "Optymalizacja kampanii",
                    "Personalizacja contentu",
                    "A/B testy automatyczne",
                    "Analiza trendów",
                  ],
                  savings: "70% czasu",
                },
                {
                  dept: "HR",
                  icon: <Users />,
                  tasks: [
                    "Screening CV",
                    "Chatbot dla pracowników",
                    "Onboarding automatyczny",
                    "Analiza satysfakcji",
                    "Planowanie szkoleń",
                  ],
                  savings: "50% procesów",
                },
                {
                  dept: "Finanse",
                  icon: <Calculator />,
                  tasks: [
                    "Automatyczne faktury",
                    "Kategoryzacja wydatków",
                    "Prognozy finansowe",
                    "Wykrywanie anomalii",
                    "Raporty automatyczne",
                  ],
                  savings: "80% rutyny",
                },
                {
                  dept: "Operacje",
                  icon: <Settings />,
                  tasks: [
                    "Optymalizacja procesów",
                    "Predykcyjne utrzymanie",
                    "Zarządzanie zapasami",
                    "Automatyzacja workflow",
                    "Monitoring KPI",
                  ],
                  savings: "45% kosztów",
                },
              ].map((dept, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {dept.icon}
                      </div>
                      <h3 className="text-lg font-bold">{dept.dept}</h3>
                    </div>
                    <span className="text-sm text-green-500 font-semibold">
                      {dept.savings}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {dept.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
                        <span className="text-muted-foreground">{task}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Branże */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI dla <span className="text-gradient">każdej branży</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specjalizuję się w wdrożeniach AI dostosowanych do specyfiki
                branży
              </p>
            </motion.div>

            {/* Industry Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {[
                "wszystkie",
                "e-commerce",
                "usługi",
                "produkcja",
                "edukacja",
                "zdrowie",
              ].map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full transition-all capitalize ${
                    selectedIndustry === industry
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  industry: "e-commerce",
                  title: "E-commerce i retail",
                  icon: "🛍️",
                  solutions: [
                    "Rekomendacje produktów AI",
                    "Chatbot sprzedażowy 24/7",
                    "Automatyczne opisy produktów",
                    "Dynamic pricing",
                    "Analiza koszyka",
                  ],
                  case: "Sklep odzieżowy zwiększył sprzedaż o 35% dzięki personalizacji AI",
                },
                {
                  industry: "usługi",
                  title: "Firmy usługowe",
                  icon: "💼",
                  solutions: [
                    "Automatyczna rezerwacja terminów",
                    "Wirtualny asystent",
                    "Wyceny automatyczne",
                    "CRM z AI",
                    "Analiza satysfakcji",
                  ],
                  case: "Salon fryzjerski zredukował no-shows o 60% dzięki AI",
                },
                {
                  industry: "produkcja",
                  title: "Produkcja i logistyka",
                  icon: "🏭",
                  solutions: [
                    "Predictive maintenance",
                    "Optymalizacja łańcucha dostaw",
                    "Kontrola jakości AI",
                    "Planowanie produkcji",
                    "Automatyzacja dokumentów",
                  ],
                  case: "Fabryka mebli zmniejszyła przestoje o 40% dzięki AI",
                },
                {
                  industry: "edukacja",
                  title: "Edukacja i szkolenia",
                  icon: "🎓",
                  solutions: [
                    "Personalizacja ścieżek nauki",
                    "Automatyczne sprawdzanie prac",
                    "Chatbot dla studentów",
                    "Generowanie materiałów",
                    "Analiza postępów",
                  ],
                  case: "Szkoła językowa zwiększyła retencję o 50% dzięki AI",
                },
                {
                  industry: "zdrowie",
                  title: "Zdrowie i wellness",
                  icon: "🏥",
                  solutions: [
                    "Rejestracja online z AI",
                    "Wstępna diagnoza",
                    "Przypomnienia o lekach",
                    "Analiza wyników",
                    "Dokumentacja medyczna",
                  ],
                  case: "Przychodnia skróciła czas rejestracji o 70% dzięki AI",
                },
                {
                  industry: "wszystkie",
                  title: "Uniwersalne rozwiązania",
                  icon: "🚀",
                  solutions: [
                    "Automatyzacja dokumentów",
                    "Chatboty i asystenci",
                    "Analiza danych",
                    "Generowanie raportów",
                    "Integracje API",
                  ],
                  case: "Każda firma może zaoszczędzić min. 20h/tydzień z AI",
                },
              ]
                .filter(
                  (item) =>
                    selectedIndustry === "wszystkie" ||
                    item.industry === selectedIndustry
                )
                .map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-8 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <span className="text-4xl">{item.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-primary">{item.case}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {item.solutions.map((solution, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Kalkulator oszczędności */}
        <section id="kalkulator" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Kalkulator{" "}
                  <span className="text-gradient">oszczędności z AI</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Zobacz ile możesz zaoszczędzić automatyzując procesy
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Twoje dane:</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground">
                          Liczba pracowników
                        </label>
                        <div className="text-2xl font-bold">10-50</div>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">
                          Średnia pensja (brutto)
                        </label>
                        <div className="text-2xl font-bold">6 000 zł</div>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">
                          % czasu na rutynowe zadania
                        </label>
                        <div className="text-2xl font-bold">40%</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">
                      Potencjalne oszczędności:
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-background/50 rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">
                          Miesięcznie
                        </div>
                        <div className="text-3xl font-bold text-green-500">
                          12 000 zł
                        </div>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">
                          Rocznie
                        </div>
                        <div className="text-3xl font-bold text-green-500">
                          144 000 zł
                        </div>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">
                          Zwolniony czas
                        </div>
                        <div className="text-3xl font-bold text-primary">
                          800h/miesiąc
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    * Kalkulacja dla 30 pracowników przy automatyzacji 40% zadań
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                  >
                    Otrzymaj dokładną wycenę
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Proces wdrożenia */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Wdrożenie AI w{" "}
                <span className="text-gradient">4 prostych krokach</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Od audytu do działającego rozwiązania w 2-4 tygodnie
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Audyt AI",
                    time: "1-2 dni",
                    desc: "Analizuję procesy w Twojej firmie i identyfikuję obszary do automatyzacji",
                    icon: <Lightbulb />,
                    deliverables: [
                      "Mapa procesów",
                      "Potencjał oszczędności",
                      "Rekomendacje AI",
                    ],
                  },
                  {
                    step: "2",
                    title: "Strategia",
                    time: "2-3 dni",
                    desc: "Przygotowuję plan wdrożenia AI dopasowany do Twoich celów biznesowych",
                    icon: <Target />,
                    deliverables: [
                      "Roadmapa",
                      "Wybór technologii",
                      "KPIs i metryki",
                    ],
                  },
                  {
                    step: "3",
                    title: "Implementacja",
                    time: "1-2 tygodnie",
                    desc: "Integruję AI z Twoimi systemami i konfiguruję automatyzacje",
                    icon: <Settings />,
                    deliverables: [
                      "Integracja API",
                      "Konfiguracja AI",
                      "Testy",
                    ],
                  },
                  {
                    step: "4",
                    title: "Optymalizacja",
                    time: "Ongoing",
                    desc: "Monitoruję wyniki i optymalizuję AI dla maksymalnej efektywności",
                    icon: <TrendingUp />,
                    deliverables: ["Monitoring", "Fine-tuning", "Raporty ROI"],
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
                      <p className="text-sm text-muted-foreground mb-4">
                        {phase.desc}
                      </p>

                      <div className="space-y-1">
                        {phase.deliverables.map((item, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-2 text-xs"
                          >
                            <Check className="w-3 h-3 text-green-500" />
                            <span className="text-muted-foreground">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
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

        {/* ROI Examples */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Realne <span className="text-gradient">wyniki wdrożeń</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Liczby nie kłamią - AI naprawdę działa
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  company: "Agencja marketingowa",
                  size: "15 osób",
                  implementation: "AI do generowania contentu",
                  results: [
                    { metric: "Czas tworzenia treści", value: "-75%" },
                    { metric: "Liczba obsługiwanych klientów", value: "+200%" },
                    { metric: "ROI", value: "320%" },
                  ],
                  quote:
                    "AI pozwoliło nam obsłużyć 3x więcej klientów bez zwiększania zespołu",
                },
                {
                  company: "Sklep internetowy",
                  size: "5 osób",
                  implementation: "Chatbot i rekomendacje AI",
                  results: [
                    { metric: "Konwersja", value: "+35%" },
                    { metric: "Średnia wartość koszyka", value: "+48%" },
                    { metric: "Zwroty", value: "-22%" },
                  ],
                  quote:
                    "Chatbot obsługuje 80% pytań klientów automatycznie 24/7",
                },
                {
                  company: "Firma produkcyjna",
                  size: "50 osób",
                  implementation: "Automatyzacja procesów",
                  results: [
                    { metric: "Czas przetwarzania zamówień", value: "-60%" },
                    { metric: "Błędy w dokumentacji", value: "-95%" },
                    { metric: "Oszczędności", value: "25k zł/mies" },
                  ],
                  quote:
                    "Automatyzacja AI zwolniła 30% czasu naszego zespołu na rozwój",
                },
              ].map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all"
                >
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">{study.company}</h3>
                    <p className="text-sm text-muted-foreground">
                      {study.size}
                    </p>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3 mb-4">
                    <p className="text-sm text-primary">
                      {study.implementation}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {study.results.map((result, j) => (
                      <div
                        key={j}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-muted-foreground">
                          {result.metric}
                        </span>
                        <span
                          className={`text-sm font-bold ${
                            result.value.includes("+") ||
                            result.value.includes("k")
                              ? "text-green-500"
                              : "text-blue-500"
                          }`}
                        >
                          {result.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary/30 pl-3">
                    &quot;{study.quote}&quot;
                  </blockquote>
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
                Pakiety <span className="text-gradient">wdrożeniowe</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Od prostych automatyzacji po kompleksowe transformacje AI
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "AI Starter",
                  price: "2 990",
                  time: "1 tydzień",
                  desc: "Idealne do rozpoczęcia przygody z AI",
                  features: [
                    "1 proces do automatyzacji",
                    "Chatbot na stronę WWW",
                    "Integracja z 1 systemem",
                    "Szkolenie zespołu",
                    "1 miesiąc wsparcia",
                    "Raport ROI",
                  ],
                  best: false,
                },
                {
                  name: "AI Business",
                  price: "9 990",
                  time: "2-3 tygodnie",
                  desc: "Kompleksowa automatyzacja dla firm",
                  features: [
                    "Do 5 procesów",
                    "Zaawansowany chatbot",
                    "Integracje API",
                    "Personalizacja AI",
                    "Panel analityczny",
                    "3 miesiące wsparcia",
                    "Optymalizacja co miesiąc",
                  ],
                  best: true,
                },
                {
                  name: "AI Enterprise",
                  price: "od 19 990",
                  time: "4+ tygodnie",
                  desc: "Transformacja cyfrowa z AI",
                  features: [
                    "Nieograniczone procesy",
                    "Dedykowane modele AI",
                    "Pełna automatyzacja",
                    "Integracja z ERP/CRM",
                    "Machine Learning",
                    "SLA 99.9%",
                    "Dedykowany opiekun",
                    "Rozwój ciągły",
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
                    <div className="text-sm text-primary mb-3">
                      Wdrożenie: {plan.time}
                    </div>
                    <div className="mb-3">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground"> zł netto</span>
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
                Potrzebujesz rozwiązania szytego na miarę?
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
              >
                Zapytaj o dedykowane wdrożenie{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pytania o <span className="text-gradient">wdrożenia AI</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Czy AI zastąpi moich pracowników?",
                  a: "Nie, AI nie zastępuje pracowników, tylko automatyzuje nudne, powtarzalne zadania. Twój zespół będzie mógł skupić się na kreatywnej pracy, strategii i budowaniu relacji z klientami. AI to narzędzie, które zwiększa produktywność zespołu.",
                },
                {
                  q: "Ile czasu zajmuje wdrożenie AI?",
                  a: "Podstawowe wdrożenie (np. chatbot) może być gotowe w 3-5 dni. Średniej złożoności automatyzacje zajmują 2-3 tygodnie. Kompleksowe transformacje AI to 4-8 tygodni. Zawsze zaczynamy od pilotażu, żebyś mógł szybko zobaczyć efekty.",
                },
                {
                  q: "Czy muszę wymienić moje obecne systemy?",
                  a: "Nie! AI integruję z Twoimi obecnymi systemami przez API. Pracuję z WordPress, Shopify, WooCommerce, systemami CRM, ERP, narzędziami Google, Microsoft i wieloma innymi. AI działa jako warstwa nad istniejącą infrastrukturą.",
                },
                {
                  q: "Jakie są koszty utrzymania AI?",
                  a: "Koszty zależą od skali użycia. Dla małej firmy to 200-500 zł/miesiąc za API AI. Średnie firmy płacą 1000-3000 zł/miesiąc. Zawsze pokazuję dokładną kalkulację kosztów vs oszczędności przed wdrożeniem.",
                },
                {
                  q: "Co jeśli AI popełni błąd?",
                  a: "Implementuję zabezpieczenia: walidację odpowiedzi, limity decyzyjne, human-in-the-loop dla krytycznych procesów. AI ma 95-99% skuteczności, ale zawsze jest możliwość interwencji człowieka. Dodatkowo AI uczy się i poprawia swoją dokładność.",
                },
                {
                  q: "Czy moje dane będą bezpieczne?",
                  a: "Absolutnie. Używam tylko certyfikowanych dostawców AI (OpenAI, Anthropic, Google). Dane są szyfrowane, przetwarzane zgodnie z RODO. Możemy też wdrożyć AI on-premise dla maksymalnego bezpieczeństwa.",
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
                <PiggyBank className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-green-500">
                  Średni zwrot z inwestycji: 250% w 6 miesięcy
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Każdy dzień bez AI to{" "}
                <span className="text-gradient">stracone pieniądze</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Twoja konkurencja już wdraża AI. Firma która zautomatyzuje
                procesy pierwsza, wygra rynek.{" "}
                <strong>
                  Darmowy audyt AI pokaże Ci dokładnie, gdzie tracisz pieniądze
                  i jak AI może to zmienić.
                </strong>
              </p>

              <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 mb-8 max-w-md mx-auto">
                <h3 className="font-semibold mb-4">
                  Darmowy audyt AI zawiera:
                </h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Analiza 5 kluczowych procesów w firmie
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Kalkulacja potencjalnych oszczędności
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Rekomendacje konkretnych rozwiązań AI
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Plan wdrożenia z timeline i kosztami
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
                    <p className="text-sm text-muted-foreground">
                      Zadzwoń teraz
                    </p>
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
                Zamów darmowy audyt AI
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="mt-8 text-sm text-muted-foreground">
                ⚡ Audyt w 48h • 📊 Raport PDF • 🎯 100% praktycznych
                rekomendacji • 🆓 Bez zobowiązań
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
