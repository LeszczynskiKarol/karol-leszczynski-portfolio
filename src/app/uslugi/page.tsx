// src/app/uslugi/page.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import {
  Code2,
  Rocket,
  Brain,
  ShoppingCart,
  Globe,
  RefreshCw,
  Database,
  FileText,
  ArrowRight,
  Check,
  MapPin,
  Sparkles,
  Target,
  Zap,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function UslugiPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("wszystkie");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const uslugi = [
    {
      id: 1,
      title: "Programista Toruń",
      category: "lokalne",
      icon: <Code2 />,
      description:
        "Doświadczony programista z 15-letnim doświadczeniem. Spotkania osobiste, polska faktura.",
      features: [
        "Aplikacje webowe",
        "Systemy na zamówienie",
        "Wsparcie techniczne",
        "Code review",
      ],
      price: "od 150 zł/h",
      href: "/uslugi/programista-torun",
      accent: "bg-gradient-to-br from-blue-500 to-cyan-500",
      popular: true,
    },
    {
      id: 2,
      title: "Programista Bydgoszcz",
      category: "lokalne",
      icon: <Code2 />,
      description:
        "Full-Stack Developer z Bydgoszczy. Systemy dla firm, aplikacje webowe, integracje.",
      features: [
        "Systemy enterprise",
        "Aplikacje SPA/PWA",
        "DevOps & Cloud",
        "Migracje legacy",
      ],
      price: "od 200 zł/h",
      href: "/uslugi/programista-bydgoszcz",
      accent: "bg-gradient-to-br from-blue-600 to-indigo-600",
    },
    {
      id: 3,
      title: "Strony internetowe Toruń",
      category: "lokalne",
      icon: <Globe />,
      description:
        "Nowoczesne strony internetowe dla firm z Torunia i okolic. Next.js, WordPress.",
      features: ["Strony firmowe", "Landing pages", "Portfolio", "Blogi"],
      price: "od 1990 zł",
      href: "/uslugi/strony-www-torun",
      accent: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Strony internetowe Bydgoszcz",
      category: "lokalne",
      icon: <Globe />,
      description:
        "Profesjonalne strony WWW dla firm z Bydgoszczy. Szybkie, responsywne, z SEO.",
      features: [
        "Strony korporacyjne",
        "Systemy CMS",
        "Wielojęzyczność",
        "A/B testing",
      ],
      price: "od 2490 zł",
      href: "/uslugi/strony-internetowe-bydgoszcz",
      accent: "bg-gradient-to-br from-purple-600 to-violet-600",
      popular: true,
    },
    {
      id: 5,
      title: "Sklepy internetowe Toruń",
      category: "lokalne",
      icon: <ShoppingCart />,
      description:
        "Profesjonalne sklepy e-commerce. WooCommerce lub własne rozwiązania.",
      features: [
        "WooCommerce",
        "Integracje płatności",
        "Synchronizacja Allegro",
        "Panel admina",
      ],
      price: "od 4990 zł",
      href: "/uslugi/sklepy-internetowe-torun",
      accent: "bg-gradient-to-br from-green-500 to-emerald-500",
      popular: true,
    },
    {
      id: 6,
      title: "Sklepy internetowe Bydgoszcz",
      category: "lokalne",
      icon: <ShoppingCart />,
      description:
        "E-commerce który sprzedaje. Integracje z Allegro, automatyzacja, AI do opisów.",
      features: [
        "Headless commerce",
        "Multi-channel",
        "B2B/B2C",
        "Marketplace",
      ],
      price: "od 5990 zł",
      href: "/uslugi/sklepy-internetowe-bydgoszcz",
      accent: "bg-gradient-to-br from-green-600 to-teal-600",
    },
    {
      id: 7,
      title: "Platformy SaaS z AI",
      category: "ogolnopolskie",
      icon: <Rocket />,
      description:
        "Kompletne platformy SaaS wykorzystujące sztuczną inteligencję.",
      features: [
        "MVP w 4-8 tygodni",
        "System płatności",
        "Integracje AI",
        "Skalowalna architektura",
      ],
      price: "od 19 990 zł",
      href: "/uslugi/platformy-saas-ai",
      accent: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      id: 8,
      title: "Integracje AI dla firm",
      category: "ogolnopolskie",
      icon: <Brain />,
      description:
        "Wdrażam AI w Twojej firmie. Chatboty, automatyzacja, personalizacja.",
      features: [
        "Chatboty AI",
        "Analiza danych",
        "Automatyzacja treści",
        "ROI 250% w 6 mies.",
      ],
      price: "od 2990 zł",
      href: "/uslugi/integracje-ai",
      accent: "bg-gradient-to-br from-violet-500 to-purple-500",
      popular: true,
    },
    {
      id: 9,
      title: "Automatyzacja procesów",
      category: "ogolnopolskie",
      icon: <RefreshCw />,
      description:
        "Łączę aplikacje bez kodowania. Make.com, Zapier, workflow automation.",
      features: [
        "Make.com / Zapier",
        "Integracje API",
        "10h/tydzień oszczędności",
        "Wdrożenie w 3-7 dni",
      ],
      price: "od 990 zł",
      href: "/uslugi/automatyzacja-procesow",
      accent: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
    {
      id: 10,
      title: "Migracje sklepów",
      category: "ogolnopolskie",
      icon: <Database />,
      description: "Przeniosę sklep na szybszą platformę z zachowaniem SEO.",
      features: [
        "0% utraty danych",
        "Zachowanie SEO",
        "+40% wzrost sprzedaży",
        "Szybsza strona",
      ],
      price: "od 4990 zł",
      href: "/uslugi/migracje-sklepow",
      accent: "bg-gradient-to-br from-teal-500 to-cyan-500",
    },
    {
      id: 11,
      title: "Publikacje LaTeX/Quarto",
      category: "ogolnopolskie",
      icon: <FileText />,
      description: "Profesjonalny skład publikacji naukowych i edukacyjnych.",
      features: [
        "Książki i prace naukowe",
        "Zeszyty ćwiczeń",
        "Gotowe do druku PDF",
        "Bibliografia i indeksy",
      ],
      price: "od 50 zł/strona",
      href: "/uslugi/publikacje-latex",
      accent: "bg-gradient-to-br from-amber-500 to-yellow-500",
    },
  ];

  const categories = [
    { id: "wszystkie", label: "Wszystkie usługi", count: uslugi.length },
    {
      id: "lokalne",
      label: "Toruń i Bydgoszcz",
      count: uslugi.filter((u) => u.category === "lokalne").length,
    },
    {
      id: "ogolnopolskie",
      label: "Cała Polska",
      count: uslugi.filter((u) => u.category === "ogolnopolskie").length,
    },
  ];

  const filteredUslugi =
    selectedCategory === "wszystkie"
      ? uslugi
      : uslugi.filter((u) => u.category === selectedCategory);

  const stats = [
    { value: "50+", label: "Zrealizowanych projektów", icon: <Target /> },
    { value: "15", label: "Lat doświadczenia", icon: <Award /> },
    { value: "100%", label: "Zadowolonych klientów", icon: <Users /> },
    { value: "24h", label: "Czas odpowiedzi", icon: <Clock /> },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Usługi programistyczne",
    provider: {
      "@type": "Person",
      name: "Karol Leszczyński",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toruń",
        addressRegion: "Kujawsko-Pomorskie",
        addressCountry: "PL",
      },
    },
    areaServed: [
      {
        "@type": "City",
        name: "Toruń",
      },
      {
        "@type": "City",
        name: "Bydgoszcz",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi programistyczne",
      itemListElement: uslugi.map((u) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: u.title,
          description: u.description,
        },
      })),
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
        <section className="min-h-[60vh] flex items-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {[...Array(50)].map((_, i) => (
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
            <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Toruń • Bydgoszcz • Cała Polska
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Usługi <span className="text-gradient">programistyczne</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong>Kompleksowe rozwiązania IT dla Twojej firmy.</strong> Od
                prostych stron WWW po zaawansowane platformy SaaS z AI. Lokalne
                wsparcie w Toruniu i Bydgoszczy, obsługa firm z całej Polski.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Darmowa konsultacja
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+48509370772"
                  className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  ☎ 509 370 772
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-3">
                    {stat.icon}
                  </div>
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

        {/* Category Filter */}
        <section className="py-8 border-b border-primary/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground scale-105"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                  <span className="px-2 py-0.5 bg-background/20 rounded-full text-sm">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
            >
              {filteredUslugi.map((usluga, i) => (
                <motion.div
                  key={usluga.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(usluga.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {usluga.popular && (
                    <div className="absolute -top-3 -right-2 z-10">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Popularne
                      </div>
                    </div>
                  )}

                  <Link
                    href={usluga.href}
                    className="block h-full bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all hover:scale-105 hover:shadow-xl"
                  >
                    {/* Icon with gradient background */}
                    <div className="mb-4">
                      <div
                        className={`w-14 h-14 ${usluga.accent} rounded-lg flex items-center justify-center text-white transform group-hover:scale-110 transition-transform`}
                      >
                        {usluga.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {usluga.title}
                    </h3>

                    {/* Category badge */}
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 rounded text-xs text-primary mb-3">
                      <MapPin className="w-3 h-3" />
                      {usluga.category === "lokalne"
                        ? "Toruń / Bydgoszcz"
                        : "Cała Polska"}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {usluga.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {usluga.features
                        .slice(0, hoveredCard === usluga.id ? 4 : 3)
                        .map((feature, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.05 }}
                            className="flex items-start gap-2 text-sm"
                          >
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                    </ul>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                      <div>
                        <p className="text-xs text-muted-foreground">Cena</p>
                        <p className="text-lg font-bold text-primary">
                          {usluga.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                        <span className="text-sm font-medium">Więcej</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dlaczego <span className="text-gradient">ja</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Łączę doświadczenie biznesowe z najnowszymi technologiami
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <Shield />,
                  title: "Gwarancja jakości",
                  desc: "Czysty kod, dokumentacja, testy. Wsparcie po wdrożeniu.",
                },
                {
                  icon: <Zap />,
                  title: "Nowoczesne technologie",
                  desc: "Next.js, React, Node.js, AI. Zawsze najlepsze rozwiązania.",
                },
                {
                  icon: <TrendingUp />,
                  title: "Biznesowe podejście",
                  desc: "Rozumiem cele biznesowe. Technologia ma służyć rozwojowi.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Potrzebujesz{" "}
                <span className="text-gradient">profesjonalnej pomocy</span>?
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Niezależnie czy jesteś z Torunia, Bydgoszczy czy z drugiego
                końca Polski -
                <strong> znajdę najlepsze rozwiązanie dla Twojej firmy.</strong>
              </p>

              <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 mb-8">
                <h3 className="font-semibold mb-4">
                  Jak zaczynamy współpracę?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium mb-1">Darmowa konsultacja</p>
                      <p className="text-sm text-muted-foreground">
                        30 min rozmowy o Twoich potrzebach
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium mb-1">Wycena i plan</p>
                      <p className="text-sm text-muted-foreground">
                        Dokładny koszt i harmonogram
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium mb-1">Realizacja</p>
                      <p className="text-sm text-muted-foreground">
                        Start prac i regularne raporty
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
              >
                Umów darmową konsultację
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="mt-6 text-sm text-muted-foreground">
                ☎ 509 370 772 • ✉ kontakt@karol-leszczynski.pl
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
