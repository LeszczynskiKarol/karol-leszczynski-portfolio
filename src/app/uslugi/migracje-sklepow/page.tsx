// src/app/uslugi/migracje-sklepow/page.tsx
'use client';

import { Navigation } from '@/components/layout/navigation';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Check,
  CheckCircle,
  ChevronRight,
  Code2,
  Database,
  DollarSign,
  Gauge,
  HeadphonesIcon,
  Lock,
  Mail,
  Phone,
  RefreshCw,
  Shield,
  ShoppingCart,
  Target,
  Timer,
  TrendingUp,
  XCircle,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MigracjeSklepow() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentPlatform, setCurrentPlatform] = useState<string>('woocommerce');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Data Migration Service',
    name: 'Migracja sklepów internetowych',
    description:
      'Bezpieczna migracja sklepu z WooCommerce, PrestaShop na nowoczesną platformę.',
    provider: {
      '@type': 'Person',
      name: 'Karol Leszczyński',
    },
    offers: {
      '@type': 'Offer',
      price: '4990',
      priceCurrency: 'PLN',
      availability: 'https://schema.org/InStock',
    },
    benefits: [
      '0% utraty danych',
      'Zachowanie SEO i pozycji',
      '+40% wzrost wydajności',
      'Pełne wsparcie podczas migracji',
    ],
    duration: 'P7D',
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
                    ease: 'linear',
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
                  WooCommerce → Next.js • PrestaShop → Custom • Shopify → React
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Migracje{' '}
                <span className="text-gradient">sklepów internetowych</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong>
                  Twój sklep działa wolno? Płacisz fortunę za wtyczki?
                </strong>
                Migruję sklepy z WooCommerce, PrestaShop, Shopify na szybkie,
                dedykowane rozwiązania. Zachowuję SEO, zwiększam sprzedaż.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>+40% wzrost sprzedaży (case Stojan)</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>100% zachowanie SEO</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>3x szybszy sklep</span>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Darmowy audyt sklepu
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

        {/* Problem z obecnymi platformami */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Problemy które{' '}
                <span className="text-gradient">Cię frustrują</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Poznajemy? To znak, że czas na migrację
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  problem: 'Sklep ładuje się 5+ sekund',
                  platform: 'WooCommerce',
                  icon: <Timer />,
                  desc: 'WordPress + 30 wtyczek = katastrofa wydajności',
                  solution: 'Next.js ładuje się w 1-2 sekundy',
                },
                {
                  problem: 'Miesięczne koszty rosną',
                  platform: 'Shopify',
                  icon: <DollarSign />,
                  desc: 'Plan $299 + aplikacje $500 = $800/mies',
                  solution: 'Własny sklep = tylko hosting $50/mies',
                },
                {
                  problem: 'Limity i ograniczenia',
                  platform: 'Platformy SaaS',
                  icon: <Lock />,
                  desc: 'Nie możesz dodać funkcji której potrzebujesz',
                  solution: 'Dedykowany sklep = nieograniczone możliwości',
                },
                {
                  problem: 'SEO nie działa',
                  platform: 'PrestaShop',
                  icon: <TrendingUp />,
                  desc: 'Duplikaty, wolne ładowanie, brak kontroli',
                  solution: 'Pełna kontrola nad SEO i wydajnością',
                },
                {
                  problem: 'Wtyczki się konfliktują',
                  platform: 'WooCommerce',
                  icon: <AlertTriangle />,
                  desc: 'Aktualizacja = wszystko się sypie',
                  solution: 'Kod na miarę = zero konfliktów',
                },
                {
                  problem: 'Checkout porzucany',
                  platform: 'Wszystkie',
                  icon: <ShoppingCart />,
                  desc: 'Skomplikowany proces, wolne ładowanie',
                  solution: 'Checkout w 2 krokach, konwersja +30%',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500">
                      {item.icon}
                    </div>
                    <span className="text-xs text-red-500">
                      {item.platform}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{item.problem}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.desc}
                  </p>

                  <div className="pt-4 border-t border-primary/10">
                    <p className="text-sm text-green-500 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      {item.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study - Stojan Shop */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-4">
                  <Award className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold text-green-500">
                    Case Study
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Stojan Shop:{' '}
                  <span className="text-gradient">
                    +40% sprzedaży po migracji
                  </span>
                </h2>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Przed */}
                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      Przed migracją (WooCommerce)
                    </h3>

                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <div>
                          <p className="font-semibold">PageSpeed: 45</p>
                          <p className="text-sm text-muted-foreground">
                            Sklep ładował się 6-8 sekund
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <div>
                          <p className="font-semibold">30+ wtyczek</p>
                          <p className="text-sm text-muted-foreground">
                            Konflikty, problemy z aktualizacjami
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <div>
                          <p className="font-semibold">Brak integracji</p>
                          <p className="text-sm text-muted-foreground">
                            Ręczne wprowadzanie na Allegro
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <div>
                          <p className="font-semibold">Wysokie koszty</p>
                          <p className="text-sm text-muted-foreground">
                            Hosting + wtyczki premium = 500 zł/mies
                          </p>
                        </div>
                      </li>
                    </ul>

                    <div className="bg-red-500/10 rounded-lg p-4">
                      <p className="text-sm font-semibold text-red-600">
                        Bounce rate: 68% • Konwersja: 1.2%
                      </p>
                    </div>
                  </div>

                  {/* Po */}
                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Po migracji (Next.js + Node.js)
                    </h3>

                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <div>
                          <p className="font-semibold">PageSpeed: 92</p>
                          <p className="text-sm text-muted-foreground">
                            Sklep ładuje się w 2 sekundy
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <div>
                          <p className="font-semibold">Kod na miarę</p>
                          <p className="text-sm text-muted-foreground">
                            Zero konfliktów, pełna kontrola
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <div>
                          <p className="font-semibold">Allegro API</p>
                          <p className="text-sm text-muted-foreground">
                            Automatyczna synchronizacja
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <div>
                          <p className="font-semibold">Niskie koszty</p>
                          <p className="text-sm text-muted-foreground">
                            Tylko hosting AWS = 100 zł/mies
                          </p>
                        </div>
                      </li>
                    </ul>

                    <div className="bg-green-500/10 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-600">
                        Bounce rate: 42% • Konwersja: 3.2% • Sprzedaż: +40%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Z czego migrujemy */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Migruję z{' '}
                <span className="text-gradient">każdej platformy</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Wybierz swoją obecną platformę
              </p>
            </motion.div>

            {/* Platform selector */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {[
                'woocommerce',
                'prestashop',
                'shopify',
                'shoper',
                'magento',
                'inne',
              ].map((platform) => (
                <button
                  key={platform}
                  onClick={() => setCurrentPlatform(platform)}
                  className={`px-6 py-3 rounded-lg transition-all capitalize ${
                    currentPlatform === platform
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>

            {/* Platform specific info */}
            <div className="max-w-4xl mx-auto">
              {currentPlatform === 'woocommerce' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                    Migracja z WooCommerce
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Co migruję:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Wszystkie produkty z wariantami</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Klienci i historia zamówień</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Kategorie i tagi</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Obrazki i media</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Kupony i promocje</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Recenzje produktów</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Co zyskujesz:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowUpRight className="w-4 h-4 text-primary" />
                          <span>3-5x szybszy sklep</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowUpRight className="w-4 h-4 text-primary" />
                          <span>Koniec z wtyczkami</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowUpRight className="w-4 h-4 text-primary" />
                          <span>Niższe koszty hostingu</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowUpRight className="w-4 h-4 text-primary" />
                          <span>Lepsze SEO</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowUpRight className="w-4 h-4 text-primary" />
                          <span>Stabilność i bezpieczeństwo</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowUpRight className="w-4 h-4 text-primary" />
                          <span>Własność kodu</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm">
                      <strong>Najpopularniejsza migracja:</strong> 70% moich
                      klientów migruje z WooCommerce. Średni wzrost wydajności:
                      300%. Czas migracji: 2-3 tygodnie.
                    </p>
                  </div>
                </motion.div>
              )}

              {currentPlatform === 'shoper' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                    Migracja z Shoper
                  </h3>

                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Shoper to polska platforma SaaS popularna wśród małych i
                      średnich sklepów. Migracja daje pełną kontrolę nad kodem i
                      eliminuje miesięczne opłaty abonamentowe.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">
                          Koszty Shoper (miesięcznie):
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Plan Standard</span>
                            <span className="text-red-500">299 zł</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Aplikacje dodatkowe</span>
                            <span className="text-red-500">150-400 zł</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Szablon premium</span>
                            <span className="text-red-500">
                              500 zł (jednorazowo)
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Prowizje transakcyjne</span>
                            <span className="text-red-500">0.5-1%</span>
                          </li>
                          <li className="pt-2 border-t flex justify-between font-semibold">
                            <span>Suma</span>
                            <span className="text-red-500">
                              450-700 zł/mies
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">
                          Koszty po migracji:
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Hosting VPS/Cloud</span>
                            <span className="text-green-500">100-200 zł</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Funkcje wbudowane</span>
                            <span className="text-green-500">0 zł</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Własny design</span>
                            <span className="text-green-500">0 zł</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Płatności (tylko prowizja)</span>
                            <span className="text-green-500">1.4% + 1 zł</span>
                          </li>
                          <li className="pt-2 border-t flex justify-between font-semibold">
                            <span>Suma</span>
                            <span className="text-green-500">
                              100-200 zł/mies
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <p className="text-sm">
                        <strong>Główne ograniczenia Shoper:</strong> Brak
                        dostępu do kodu, limity produktów w tańszych planach,
                        ograniczone możliwości SEO, brak zaawansowanych
                        automatyzacji.
                      </p>
                    </div>

                    <div className="text-center p-4 bg-green-500/10 rounded-lg">
                      <p className="text-2xl font-bold text-green-500">
                        Oszczędzasz 350-500 zł miesięcznie!
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        To 4200-6000 zł rocznie + własność kodu
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentPlatform === 'magento' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                    Migracja z Magento
                  </h3>

                  <div className="space-y-6">
                    <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <p className="text-sm">
                        <strong>Uwaga:</strong> Magento to potężna, ale bardzo
                        wymagająca platforma. Większość sklepów wykorzystuje
                        tylko 20% jej możliwości, płacąc za 100% złożoności.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Problemy Magento</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Wymaga drogiego hostingu</li>
                          <li>• Kosztowni specjaliści</li>
                          <li>• Wolne bez optymalizacji</li>
                          <li>• Skomplikowane aktualizacje</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Koszty utrzymania
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Hosting: 500-2000 zł/mies</li>
                          <li>• Developer: 150-300 zł/h</li>
                          <li>• Licencje: 0-1000 zł</li>
                          <li>• Rozszerzenia: 200-800 zł</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Po migracji</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Hosting: 200-400 zł/mies</li>
                          <li>• Wsparcie: 100-200 zł/mies</li>
                          <li>• Licencje: 0 zł</li>
                          <li>• Funkcje wbudowane: 0 zł</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-500/10 to-green-500/10 rounded-lg p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            Typowy sklep Magento:
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li>⚠️ Czas ładowania: 4-8 sekund</li>
                            <li>⚠️ Koszty miesięczne: 1500-3500 zł</li>
                            <li>⚠️ Czas wdrożenia zmian: dni/tygodnie</li>
                            <li>⚠️ Wymagana wiedza: ekspert Magento</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">
                            Po migracji na Next.js:
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li>✅ Czas ładowania: 1-2 sekundy</li>
                            <li>✅ Koszty miesięczne: 300-600 zł</li>
                            <li>✅ Czas wdrożenia zmian: godziny</li>
                            <li>✅ Wymagana wiedza: podstawy CMS</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-green-500/10 rounded-lg">
                      <p className="text-2xl font-bold text-green-500">
                        Redukcja kosztów o 70-80%
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Oszczędność 1200-2900 zł miesięcznie + 5x szybszy sklep
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentPlatform === 'inne' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                    Migracja z innych platform
                  </h3>

                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Migruję również sklepy z mniej popularnych platform i
                      rozwiązań custom. Każdy przypadek analizuję indywidualnie.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">OpenCart</h4>
                        <p className="text-sm text-muted-foreground">
                          Przestarzały kod PHP, problemy z bezpieczeństwem, brak
                          wsparcia
                        </p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">osCommerce</h4>
                        <p className="text-sm text-muted-foreground">
                          Technologia z 2000 roku, brak responsywności, słabe
                          SEO
                        </p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Joomla + VirtueMart
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Wolne działanie, skomplikowana obsługa, wysokie koszty
                        </p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">IdoSell</h4>
                        <p className="text-sm text-muted-foreground">
                          Wysokie prowizje, ograniczenia w customizacji, vendor
                          lock-in
                        </p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Własne rozwiązania
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Stary kod, brak dokumentacji, problemy z utrzymaniem
                        </p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Sklepy na Allegro
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Przejście na własny sklep z integracją Allegro API
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-6">
                      <h4 className="font-semibold mb-4">
                        Proces migracji z nietypowych platform:
                      </h4>
                      <ol className="space-y-3 text-sm">
                        <li className="flex gap-3">
                          <span className="font-bold text-primary">1.</span>
                          <div>
                            <strong>Audyt techniczny</strong> - analizuję
                            strukturę bazy danych, format eksportu, API
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-primary">2.</span>
                          <div>
                            <strong>Mapa danych</strong> - tworzę plan migracji
                            każdego typu danych
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-primary">3.</span>
                          <div>
                            <strong>Skrypty migracyjne</strong> - piszę
                            dedykowane konwertery danych
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-primary">4.</span>
                          <div>
                            <strong>Testy i walidacja</strong> - sprawdzam
                            kompletność migracji
                          </div>
                        </li>
                      </ol>
                    </div>

                    <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                      <p className="text-lg font-bold text-blue-500 mb-2">
                        Darmowa analiza możliwości migracji
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Wyślij mi dostęp do panelu lub przykładowy eksport
                        danych - przygotuję plan migracji w 24h
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentPlatform === 'prestashop' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                    Migracja z PrestaShop
                  </h3>

                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      PrestaShop to potężna platforma, ale często przytłaczająca
                      dla średnich sklepów. Migruję zachowując wszystkie
                      funkcje, ale w prostszej, szybszej formie.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Problemy PrestaShop
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Skomplikowany panel</li>
                          <li>• Wolne ładowanie</li>
                          <li>• Drogie moduły</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Moje rozwiązanie</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Intuicyjny CMS</li>
                          <li>• Optymalizacja kodu</li>
                          <li>• Funkcje wbudowane</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Efekty</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• -80% czasu obsługi</li>
                          <li>• +200% wydajności</li>
                          <li>• -70% kosztów</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentPlatform === 'shopify' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                    Migracja z Shopify
                  </h3>

                  <div className="space-y-6">
                    <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <p className="text-sm">
                        <strong>Uwaga:</strong> Shopify to zamknięty ekosystem.
                        Migracja wymaga eksportu danych i odtworzenia
                        funkcjonalności, ale daje pełną wolność.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">
                          Koszty Shopify (miesięcznie):
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Plan Shopify</span>
                            <span className="text-red-500">1299 zł</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Aplikacje (średnio 10)</span>
                            <span className="text-red-500">870-2170 zł</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Szablon premium</span>
                            <span className="text-red-500">780 zł</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Prowizje transakcyjne</span>
                            <span className="text-red-500">2.4-2.9%</span>
                          </li>
                          <li className="pt-2 border-t flex justify-between font-semibold">
                            <span>Suma</span>
                            <span className="text-red-500">
                              2170-3470 zł/mies
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">
                          Koszty po migracji:
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>Hosting AWS/Vercel</span>
                            <span className="text-green-500">220-430 zł</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Funkcje wbudowane</span>
                            <span className="text-green-500">$0</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Własny design</span>
                            <span className="text-green-500">$0</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Stripe (prowizja)</span>
                            <span className="text-green-500">1.4%+€0.25</span>
                          </li>
                          <li className="pt-2 border-t flex justify-between font-semibold">
                            <span>Suma</span>
                            <span className="text-green-500">
                              220-430 zł/mies
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-green-500/10 rounded-lg">
                      <p className="text-2xl font-bold text-green-500">
                        Oszczędzasz 1950-3040 zł miesięcznie!
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        To 23 400-36 480 zł rocznie
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Proces migracji */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Migracja <span className="text-gradient">bez przestoju</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Twój sklep działa normalnie podczas całego procesu
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

                <div className="space-y-6">
                  {[
                    {
                      day: 'Dzień 1-2',
                      title: 'Audyt i backup',
                      desc: 'Analizuję obecny sklep, robię pełny backup danych',
                      icon: <Shield />,
                      status: 'Sklep działa normalnie',
                    },
                    {
                      day: 'Dzień 3-7',
                      title: 'Budowa nowego sklepu',
                      desc: 'Tworzę nową platformę na środowisku testowym',
                      icon: <Code2 />,
                      status: 'Sklep działa normalnie',
                    },
                    {
                      day: 'Dzień 8-12',
                      title: 'Migracja danych',
                      desc: 'Przenoszę produkty, klientów, zamówienia',
                      icon: <Database />,
                      status: 'Sklep działa normalnie',
                    },
                    {
                      day: 'Dzień 13-14',
                      title: 'Testy i optymalizacja',
                      desc: 'Testuję każdą funkcję, optymalizuję wydajność',
                      icon: <Gauge />,
                      status: 'Sklep działa normalnie',
                    },
                    {
                      day: 'Dzień 15',
                      title: 'Przełączenie DNS',
                      desc: 'Przekierowuję domenę na nowy sklep',
                      icon: <RefreshCw />,
                      status: '15 minut przerwy technicznej',
                    },
                    {
                      day: 'Dzień 16-20',
                      title: 'Monitoring i wsparcie',
                      desc: 'Monitoruję działanie, rozwiązuję ewentualne problemy',
                      icon: <HeadphonesIcon />,
                      status: 'Nowy sklep działa!',
                    },
                  ].map((phase, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="relative z-10 w-16 h-16 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center text-primary">
                        {phase.icon}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold">{phase.title}</h3>
                            <span className="text-sm text-primary">
                              {phase.day}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-3">
                            {phase.desc}
                          </p>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs text-green-600">
                              {phase.status}
                            </span>
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

        {/* Kalkulator oszczędności */}
        <section id="kalkulator" className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Kalkulator <span className="text-gradient">oszczędności</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Zobacz ile zaoszczędzisz po migracji
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold mb-4">
                      Obecne koszty (miesięcznie):
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-background/50 rounded-lg p-3">
                        <label className="text-sm text-muted-foreground">
                          Hosting/Plan
                        </label>
                        <div className="text-2xl font-bold">500 zł</div>
                      </div>
                      <div className="bg-background/50 rounded-lg p-3">
                        <label className="text-sm text-muted-foreground">
                          Wtyczki/Aplikacje
                        </label>
                        <div className="text-2xl font-bold">300 zł</div>
                      </div>
                      <div className="bg-background/50 rounded-lg p-3">
                        <label className="text-sm text-muted-foreground">
                          Obsługa techniczna
                        </label>
                        <div className="text-2xl font-bold">200 zł</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Po migracji:</h3>
                    <div className="space-y-3">
                      <div className="bg-background/50 rounded-lg p-3">
                        <label className="text-sm text-muted-foreground">
                          Hosting AWS/Vercel
                        </label>
                        <div className="text-2xl font-bold text-green-500">
                          150 zł
                        </div>
                      </div>
                      <div className="bg-background/50 rounded-lg p-3">
                        <label className="text-sm text-muted-foreground">
                          Funkcje wbudowane
                        </label>
                        <div className="text-2xl font-bold text-green-500">
                          0 zł
                        </div>
                      </div>
                      <div className="bg-background/50 rounded-lg p-3">
                        <label className="text-sm text-muted-foreground">
                          Wsparcie (opcjonalne)
                        </label>
                        <div className="text-2xl font-bold text-green-500">
                          100 zł
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 p-6 bg-green-500/10 rounded-xl">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">
                      Oszczędność miesięczna
                    </p>
                    <p className="text-3xl font-bold text-green-500">750 zł</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">
                      Oszczędność roczna
                    </p>
                    <p className="text-3xl font-bold text-green-500">
                      9 000 zł
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">
                      ROI migracji
                    </p>
                    <p className="text-3xl font-bold text-green-500">
                      4 miesiące
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    * Kalkulacja dla średniego sklepu. Dodatkowo zyskujesz na
                    wzroście konwersji (+30% średnio)
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

        {/* Co otrzymujesz */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Co otrzymujesz{' '}
                <span className="text-gradient">po migracji</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nowoczesny sklep z pełną kontrolą
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Zap />,
                  title: 'Błyskawiczna szybkość',
                  desc: 'PageSpeed 90+, ładowanie < 2s, CDN globalny',
                },
                {
                  icon: <Code2 />,
                  title: 'Kod na własność',
                  desc: '100% własności kodu, możliwość modyfikacji, brak vendor lock-in',
                },
                {
                  icon: <Shield />,
                  title: 'Bezpieczeństwo',
                  desc: 'Szyfrowanie, backupy, ochrona przed atakami, GDPR ready',
                },
                {
                  icon: <Target />,
                  title: 'SEO na sterydach',
                  desc: 'Zachowanie pozycji, redirecty 301, sitemapy, schema.org',
                },
                {
                  icon: <RefreshCw />,
                  title: 'Automatyzacje',
                  desc: 'Integracje z Allegro, InPost, fakturowanie, maile',
                },
                {
                  icon: <BarChart3 />,
                  title: 'Analityka',
                  desc: 'Google Analytics 4, Facebook Pixel, heatmapy, A/B testy',
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
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
                Pakiety <span className="text-gradient">migracyjne</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Od prostego sklepu po zaawansowane marketplace
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Essential',
                  price: '7 990',
                  time: '2 tygodnie',
                  desc: 'Dla małych sklepów do 500 produktów',
                  features: [
                    'Migracja produktów i klientów',
                    'Podstawowy design responsywny',
                    'Płatności i dostawa',
                    'SEO - zachowanie pozycji',
                    'Panel administracyjny',
                    'Szkolenie z obsługi',
                    '1 miesiąc wsparcia',
                  ],
                  best: false,
                },
                {
                  name: 'Professional',
                  price: '14 990',
                  time: '3-4 tygodnie',
                  desc: 'Dla średnich sklepów z integracjami',
                  features: [
                    'Do 5000 produktów',
                    'Custom design UX/UI',
                    'Integracje (Allegro, InPost)',
                    'Automatyzacje procesów',
                    'Migracja historii zamówień',
                    'Optymalizacja wydajności',
                    'Multi-język / Multi-waluta',
                    '3 miesiące wsparcia',
                  ],
                  best: true,
                },
                {
                  name: 'Enterprise',
                  price: 'od 24 990',
                  time: '4-8 tygodni',
                  desc: 'Dla dużych sklepów i marketplace',
                  features: [
                    'Nieograniczona ilość produktów',
                    'Architektura mikroserwisowa',
                    'Zaawansowane integracje B2B',
                    'System multi-vendor',
                    'Dedykowane API',
                    'Load balancing',
                    'DevOps i CI/CD',
                    'SLA 99.9%',
                    '6 miesięcy wsparcia',
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
                    plan.best ? 'border-primary shadow-xl' : 'border-primary/10'
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
                      Czas: {plan.time}
                    </div>
                    <div className="mb-3">
                      {plan.price.includes('od') ? (
                        <span className="text-3xl font-bold">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-3xl font-bold">
                            {plan.price}
                          </span>
                          <span className="text-muted-foreground">
                            {' '}
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
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-primary text-primary hover:bg-primary/10'
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
                Pytania o <span className="text-gradient">migrację</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: 'Czy stracę pozycje w Google po migracji?',
                  a: 'Nie! Zachowuję wszystkie URL lub ustawiam redirecty 301. Dbam o meta tagi, sitemapy, schema.org. W 95% przypadków pozycje się poprawiają dzięki lepszej wydajności.',
                },
                {
                  q: 'Co z moimi klientami i ich kontami?',
                  a: 'Migruję wszystkich klientów z historią zamówień. Muszą tylko zresetować hasło przy pierwszym logowaniu. Informuję ich mailem o zmianach.',
                },
                {
                  q: 'Ile czasu sklep będzie niedostępny?',
                  a: 'Maksymalnie 15-30 minut podczas przełączania DNS. Całą migrację robię na środowisku testowym, więc Twój sklep działa normalnie przez 99% czasu migracji.',
                },
                {
                  q: 'Co jeśli coś pójdzie nie tak?',
                  a: 'Mam pełny backup starego sklepu. W razie problemów mogę cofnąć zmiany w 15 minut. Ale w 11 latach nie miałem ani jednej nieudanej migracji.',
                },
                {
                  q: 'Czy będę mógł sam zarządzać nowym sklepem?',
                  a: 'Oczywiście! Tworzę intuicyjny panel admina, przeprowadzam szkolenie, dostarczam dokumentację. Jest prostszy niż WooCommerce czy PrestaShop.',
                },
                {
                  q: 'Jakie technologie wykorzystujesz?',
                  a: 'Next.js 14 (frontend), Node.js (backend), PostgreSQL (baza), AWS/Vercel (hosting). To stack używany przez największe sklepy na świecie.',
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-6">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span className="text-sm font-semibold text-red-500">
                  Każdy dzień na wolnym sklepie = straceni klienci
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Przestań płacić{' '}
                <span className="text-gradient">
                  500 zł miesięcznie za wtyczki
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Twoja konkurencja już migruje na szybsze rozwiązania. 53%
                klientów opuszcza sklep który ładuje się dłużej niż 3 sekundy.
                <strong> Darmowy audyt pokaże Ci dokładnie co tracisz.</strong>
              </p>

              <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 mb-8 max-w-md mx-auto">
                <h3 className="font-semibold mb-4">Darmowy audyt zawiera:</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">Test wydajności PageSpeed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Analiza kosztów vs oszczędności
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">Plan migracji z timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-sm">
                      Wycena i gwarancja zachowania SEO
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
                Zamów darmowy audyt sklepu
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="mt-8 text-sm text-muted-foreground">
                🚀 Audyt w 24h • 📊 Raport PDF • 💰 Wycena migracji • ✅ Bez
                zobowiązań
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
