// src/app/uslugi/platformy-saas-ai/page.tsx
'use client';

import { motion } from 'framer-motion';

import { Navigation } from '@/components/layout/navigation';
import {
  ArrowRight,
  Award,
  BarChart3,
  Bot,
  Brain,
  Check,
  ChevronRight,
  Code2,
  CreditCard,
  Database,
  DollarSign,
  FileText,
  Mail,
  Phone,
  RefreshCw,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PlatformySaaSAI() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    applicationCategory: 'BusinessApplication',
    name: 'Tworzenie platform SaaS z AI',
    description:
      'Kompletne platformy SaaS wykorzystujące sztuczną inteligencję. MVP w 4-8 tygodni.',
    creator: {
      '@type': 'Person',
      name: 'Karol Leszczyński',
    },
    offers: {
      '@type': 'Offer',
      price: '19990',
      priceCurrency: 'PLN',
      priceValidUntil: '2025-12-31',
    },
    featureList: [
      'Integracje AI (OpenAI, Anthropic)',
      'System płatności Stripe',
      'Skalowalna architektura',
      'Panel administracyjny',
      'API REST/GraphQL',
    ],
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
                    ease: 'linear',
                  }}
                />
              ))}
            </motion.div>
          </div>

          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Najnowsze technologie AI
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Platformy <span className="text-gradient">SaaS z AI</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong>Tworzę inteligentne platformy SaaS</strong>{' '}
                wykorzystujące moc sztucznej inteligencji. Od automatyzacji
                procesów po generowanie treści - buduję rozwiązania, które
                skalują Twój biznes.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>2000+ użytkowników Smart-Edu.AI</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Anthropic & OpenAI Partner</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>ROI już po 3 miesiącach</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Porozmawiajmy o Twoim projekcie
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#case-studies"
                  className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  Zobacz case studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dlaczego AI w SaaS */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dlaczego{' '}
                <span className="text-gradient">AI zmienia zasady gry</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Platformy SaaS z AI automatyzują procesy, które wcześniej
                wymagały całych zespołów. To nie przyszłość - to teraźniejszość
                biznesu.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <RefreshCw />,
                  title: 'Automatyzacja 24/7',
                  value: '90%',
                  desc: 'Redukcja czasu obsługi klienta',
                },
                {
                  icon: <DollarSign />,
                  title: 'Niższe koszty',
                  value: '70%',
                  desc: 'Oszczędności na procesach',
                },
                {
                  icon: <TrendingUp />,
                  title: 'Skalowalność',
                  value: '∞',
                  desc: 'Bez limitu użytkowników',
                },
                {
                  icon: <Target />,
                  title: 'Personalizacja',
                  value: '100%',
                  desc: 'Dopasowanie do użytkownika',
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <h3 className="font-semibold mb-1">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Co mogę dla Ciebie zbudować */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jakie platformy{' '}
                <span className="text-gradient">mogę dla Ciebie zbudować</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Od prostych chatbotów po zaawansowane systemy analizy danych
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Platformy edukacyjne z AI',
                  icon: <Brain />,
                  desc: 'Systemy e-learningowe z personalizacją treści, automatycznym sprawdzaniem zadań i generowaniem materiałów.',
                  examples: [
                    'Kursy online',
                    'Systemy egzaminacyjne',
                    'Generatory treści edukacyjnych',
                  ],
                  color: 'from-blue-500 to-purple-500',
                },
                {
                  title: 'Generatory treści AI',
                  icon: <FileText />,
                  desc: 'Platformy do automatycznego tworzenia tekstów, opisów produktów, postów social media.',
                  examples: [
                    'Copywriting AI',
                    'Content marketing',
                    'Opisy produktów',
                  ],
                  color: 'from-green-500 to-teal-500',
                },
                {
                  title: 'Chatboty i asystenci',
                  icon: <Bot />,
                  desc: 'Inteligentne systemy obsługi klienta, doradcy produktowi, wirtualni asystenci.',
                  examples: [
                    'Customer service',
                    'Doradcy sprzedażowi',
                    'FAQ automatyczne',
                  ],
                  color: 'from-orange-500 to-red-500',
                },
                {
                  title: 'Analizy predykcyjne',
                  icon: <BarChart3 />,
                  desc: 'Systemy przewidywania trendów, analizy ryzyka, optymalizacji procesów biznesowych.',
                  examples: [
                    'Prognozy sprzedaży',
                    'Analiza churn',
                    'Scoring leadów',
                  ],
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  title: 'Automatyzacja workflow',
                  icon: <RefreshCw />,
                  desc: 'Platformy automatyzujące procesy biznesowe, dokumenty, faktury, raporty.',
                  examples: [
                    'Obieg dokumentów',
                    'Automatyczne raporty',
                    'Procesy HR',
                  ],
                  color: 'from-cyan-500 to-blue-500',
                },
                {
                  title: 'Personalizacja e-commerce',
                  icon: <Target />,
                  desc: 'Systemy rekomendacji produktów, dynamiczne ceny, personalizowane oferty.',
                  examples: [
                    'Rekomendacje AI',
                    'Dynamic pricing',
                    'Personalizacja UX',
                  ],
                  color: 'from-indigo-500 to-purple-500',
                },
              ].map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all hover:scale-105"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center text-white mb-4`}
                  >
                    {platform.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{platform.title}</h3>
                  <p className="text-muted-foreground mb-4">{platform.desc}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">
                      Przykłady:
                    </p>
                    {platform.examples.map((example, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{example}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Platformy które{' '}
                <span className="text-gradient">już działają</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Realne projekty, mierzalne wyniki
              </p>
            </motion.div>

            {/* Case Study 1 - Smart-Edu.AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto mb-12"
            >
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full mb-4">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">
                        Case Study #1
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold mb-4">Smart-Edu.AI</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Platforma wykorzystująca{' '}
                      <strong>Claude AI (Anthropic)</strong> do generowania prac
                      naukowych i zaliczeniowych. System potrafi stworzyć
                      120-stronicową pracę dyplomową w 20 minut.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">Wyzwanie:</h4>
                        <p className="text-muted-foreground">
                          Stworzenie platformy zdolnej generować wysokiej
                          jakości treści akademickie z zachowaniem standardów
                          naukowych, cytowań i bibliografii.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Rozwiązanie:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>
                              Integracja z Claude AI (Anthropic) dla generowania
                              treści
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>
                              System subskrypcji Stripe z różnymi pakietami
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>
                              Automatyczne formatowanie APA, MLA, Chicago
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Wsparcie dla 8 języków</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <a
                      href="https://smart-edu.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                    >
                      Zobacz platformę <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        2000+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Aktywnych użytkowników
                      </div>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        10k+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Prac wygenerowanych
                      </div>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        8
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Obsługiwanych języków
                      </div>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        20 min
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Generowanie 120 stron
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2 - Ecopywriting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                    <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Klientów B2B
                      </div>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        100%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Automatyzacja
                      </div>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        24h
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Czas realizacji
                      </div>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        -80%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Redukcja kosztów
                      </div>
                    </div>
                  </div>

                  <div className="order-1 md:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full mb-4">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">
                        Case Study #2
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold mb-4">Ecopywriting.pl</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Platforma do{' '}
                      <strong>
                        automatycznego zamawiania tekstów copywriterskich
                      </strong>
                      . System łączy klientów z copywriterami, automatyzuje
                      wyceny i płatności.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">Wyzwanie:</h4>
                        <p className="text-muted-foreground">
                          Zastąpienie tradycyjnego modelu agencji wymagającego
                          ciągłego kontaktu automatyczną platformą self-service.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Rozwiązanie:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>
                              Automatyczna wycena na podstawie typu i długości
                              tekstu
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Panel klienta z historią zamówień</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>System komunikacji klient-copywriter</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Płatności Stripe i automatyczne faktury</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <a
                      href="https://ecopywriting.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                    >
                      Zobacz platformę <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technologie */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technologie, które{' '}
                <span className="text-gradient">wykorzystuję</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Najnowsze rozwiązania AI i sprawdzone technologie webowe
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {/* AI Providers */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Dostawcy AI
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: 'Anthropic Claude',
                      desc: 'Najlepszy do treści',
                      icon: '🤖',
                    },
                    {
                      name: 'OpenAI GPT-4',
                      desc: 'Uniwersalne zastosowania',
                      icon: '🧠',
                    },
                    {
                      name: 'Google Gemini',
                      desc: 'Analiza danych',
                      icon: '🌟',
                    },
                    {
                      name: 'Stable Diffusion',
                      desc: 'Generowanie grafik',
                      icon: '🎨',
                    },
                  ].map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-4 text-center hover:scale-105 transition-transform"
                    >
                      <div className="text-3xl mb-2">{tech.icon}</div>
                      <h4 className="font-semibold text-sm mb-1">
                        {tech.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {tech.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    Frontend & Backend
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Next.js 14',
                      'React',
                      'Node.js',
                      'Python FastAPI',
                      'TypeScript',
                      'GraphQL',
                    ].map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Bazy danych & Cloud
                  </h3>
                  <div className="space-y-2">
                    {[
                      'MongoDB',
                      'PostgreSQL',
                      'Redis',
                      'AWS',
                      'Vercel',
                      'Docker',
                    ].map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Płatności & Integracje
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Stripe',
                      'PayPal',
                      'Przelewy24',
                      'Make.com',
                      'Zapier',
                      'Webhook',
                    ].map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proces */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Od pomysłu do{' '}
                <span className="text-gradient">działającej platformy</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sprawdzony proces tworzenia platform SaaS
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  phase: 'Discovery',
                  time: '1-2 tygodnie',
                  title: 'Analiza potrzeb i planowanie',
                  tasks: [
                    'Warsztaty discovery',
                    'Analiza konkurencji',
                    'Wybór modelu AI',
                    'Architektura systemu',
                    'Plan MVP',
                  ],
                },
                {
                  phase: 'Design',
                  time: '2-3 tygodnie',
                  title: 'Projektowanie UX/UI',
                  tasks: [
                    'User flow',
                    'Wireframes',
                    'Prototyp interaktywny',
                    'Design system',
                    'Testy z użytkownikami',
                  ],
                },
                {
                  phase: 'Development',
                  time: '6-8 tygodni',
                  title: 'Programowanie',
                  tasks: [
                    'Setup infrastruktury',
                    'Integracja AI',
                    'Frontend & Backend',
                    'System płatności',
                    'Panel administracyjny',
                  ],
                },
                {
                  phase: 'Testing',
                  time: '1-2 tygodnie',
                  title: 'Testy i optymalizacja',
                  tasks: [
                    'Testy funkcjonalne',
                    'Testy wydajności',
                    'Testy bezpieczeństwa',
                    'Optymalizacja AI',
                    'Bug fixing',
                  ],
                },
                {
                  phase: 'Launch',
                  time: '1 tydzień',
                  title: 'Wdrożenie i wsparcie',
                  tasks: [
                    'Deploy na produkcję',
                    'Monitoring',
                    'Szkolenie zespołu',
                    'Dokumentacja',
                    'Plan rozwoju',
                  ],
                },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex gap-6 mb-8 ${
                    i % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                      {phase.phase}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                        <span className="text-sm text-primary">
                          {phase.time}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {phase.tasks.map((task, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-muted-foreground">
                              {task}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg font-semibold text-primary mb-2">
                Całkowity czas: 10-14 tygodni
              </p>
              <p className="text-muted-foreground">
                Od koncepcji do działającej platformy generującej przychody
              </p>
            </div>
          </div>
        </section>

        {/* Modele współpracy */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Modele <span className="text-gradient">współpracy</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Elastyczne opcje dopasowane do Twojego budżetu i potrzeb
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'MVP',
                  price: '15 000',
                  time: '6-8 tygodni',
                  desc: 'Minimum Viable Product do walidacji pomysłu',
                  features: [
                    'Podstawowa integracja AI',
                    'Do 5 głównych funkcji',
                    'System logowania',
                    'Podstawowe płatności',
                    'Hosting na 3 miesiące',
                    'Wsparcie 1 miesiąc',
                  ],
                  best: false,
                },
                {
                  name: 'Standard',
                  price: '35 000',
                  time: '10-12 tygodni',
                  desc: 'Pełnoprawna platforma SaaS gotowa do skalowania',
                  features: [
                    'Zaawansowana integracja AI',
                    'Nieograniczone funkcje',
                    'System subskrypcji',
                    'Panel administracyjny',
                    'Integracje zewnętrzne',
                    'Automatyzacje',
                    'Hosting na 6 miesięcy',
                    'Wsparcie 3 miesiące',
                  ],
                  best: true,
                },
                {
                  name: 'Enterprise',
                  price: 'od 60 000',
                  time: '3-6 miesięcy',
                  desc: 'Dedykowane rozwiązanie dla dużych organizacji',
                  features: [
                    'Multiple AI providers',
                    'Architektura mikroserwisowa',
                    'Zaawansowane bezpieczeństwo',
                    'White-label',
                    'SLA 99.9%',
                    'Dedykowany zespół',
                    'Wsparcie 12 miesięcy',
                    'Rozwój funkcjonalności',
                  ],
                  best: false,
                },
              ].map((model, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative bg-background/50 backdrop-blur-sm border rounded-xl p-8 hover:scale-105 transition-all ${
                    model.best
                      ? 'border-primary shadow-xl'
                      : 'border-primary/10'
                  }`}
                >
                  {model.best && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Rekomendowany
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                    <div className="text-sm text-primary mb-3">
                      {model.time}
                    </div>
                    <div className="mb-3">
                      <span className="text-3xl font-bold">{model.price}</span>
                      <span className="text-muted-foreground"> zł netto</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {model.desc}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className={`block w-full py-3 text-center rounded-lg font-semibold transition-all ${
                      model.best
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-primary text-primary hover:bg-primary/10'
                    }`}
                  >
                    Rozpocznij projekt
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Preferujesz inny model współpracy?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="px-4 py-2 bg-muted rounded-lg">
                  💰 Revenue share
                </div>
                <div className="px-4 py-2 bg-muted rounded-lg">
                  🤝 Joint venture
                </div>
                <div className="px-4 py-2 bg-muted rounded-lg">
                  ⏰ Time & Materials
                </div>
                <div className="px-4 py-2 bg-muted rounded-lg">
                  🎯 Success fee
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pytania o{' '}
                <span className="text-gradient">platformy SaaS z AI</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: 'Ile kosztuje utrzymanie platformy SaaS z AI?',
                  a: 'Koszty zależą od skali. Dla małej platformy (do 1000 użytkowników) to około 500-1500 zł/miesiąc (hosting, AI API, bazy danych). Dla większych platform 3000-10000 zł/miesiąc. Koszty AI to zazwyczaj $0.01-0.10 per zapytanie.',
                },
                {
                  q: 'Czy moja platforma będzie zgodna z RODO?',
                  a: 'Tak, wszystkie platformy buduję zgodnie z RODO i innymi regulacjami. Implementuję szyfrowanie danych, zgody użytkowników, prawo do usunięcia danych, DPA z dostawcami AI. Mogę też pomóc w przygotowaniu dokumentacji prawnej.',
                },
                {
                  q: 'Jaka jest różnica między różnymi modelami AI?',
                  a: 'Claude (Anthropic) jest najlepszy do długich, złożonych tekstów i zadań wymagających rozumowania. GPT-4 (OpenAI) jest bardziej uniwersalny i szybszy. Google Gemini świetnie radzi sobie z analizą danych. Dobieram model do konkretnego zastosowania.',
                },
                {
                  q: 'Czy platforma będzie skalowalna?',
                  a: 'Absolutnie tak. Używam architektury mikroserwisowej, auto-skalowania w chmurze, load balancerów. Platformy które tworzę obsługują od 10 do 100 000+ użytkowników bez zmiany kodu.',
                },
                {
                  q: 'Co jeśli API AI przestanie działać?',
                  a: "Implementuję fallback na alternatywne modele AI, cache'owanie odpowiedzi, graceful degradation. W krytycznych systemach można mieć backup z innym dostawcą AI.",
                },
                {
                  q: 'Jak długo trwa zwrot z inwestycji?',
                  a: 'Z moich doświadczeń, dobrze zaprojektowana platforma SaaS zwraca inwestycję w 6-12 miesięcy. Smart-Edu.AI zwróciła koszty już po 3 miesiącach dzięki modelowi subskrypcyjnemu.',
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
                        openFaq === i ? 'rotate-90' : ''
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
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Dołącz do rewolucji AI
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Gotowy wyprzedzić konkurencję{' '}
                <span className="text-gradient">o lata świetlne</span>?
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Platformy SaaS z AI to nie przyszłość - to teraźniejszość. Firmy
                które nie zautomatyzują procesów z AI, przegrają z tymi które to
                zrobią.
                <strong>
                  {' '}
                  Porozmawiajmy o tym, jak AI może transformować Twój biznes.
                </strong>
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
              >
                Umów bezpłatną konsultację AI
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="mt-8 text-sm text-muted-foreground">
                🚀 Pierwsze 30 minut konsultacji gratis • 📊 Otrzymasz analizę
                potencjału AI w Twoim biznesie
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
