// src/components/sections/projects.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, X, ChevronRight, Calendar } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart-Copy.AI",
    category: "SaaS / AI Content",
    description:
      "Zaawansowana platforma AI do generowania treści marketingowych z multi-agent architecture",
    fullDescription:
      "Profesjonalna platforma full-stack do generowania treści marketingowych za pomocą sztucznej inteligencji Claude. System wykorzystuje zaawansowaną architekturę multi-agent - Kierownik dzieli strukturę tekstu na części, a zespół Pisarzy generuje treść równolegle. Platforma potrafi wygenerować teksty do 150 stron, automatycznie wyszukuje źródła przez Google Custom Search API, scrapuje i analizuje treści, a następnie tworzy unikalne, SEO-friendly artykuły. System obsługuje 8 języków, oferuje integrację własnych źródeł użytkownika (URL-e i pliki), oraz zaawansowane opcje SEO (frazy kluczowe, linkowanie wewnętrzne). Płatności przez Stripe z systemem prepaid balance.",
    image: "/projects/smart-copy.jpg",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Fastify",
      "Prisma ORM",
      "PostgreSQL",
      "Anthropic Claude AI",
      "Google Custom Search API",
      "Stripe",
      "AWS S3",
      "AWS SES",
      "AWS EC2",
      "Zustand",
      "TanStack Query",
      "Zod",
      "Framer Motion",
      "TailwindCSS",
    ],
    features: [
      "Multi-agent AI architecture (Kierownik + Pisarze)",
      "Generowanie tekstów do 150 stron",
      "Automatyczne wyszukiwanie źródeł (Google API)",
      "Scrapowanie i analiza treści z internetu",
      "Wsparcie dla 8 języków",
      "Upload własnych źródeł (URL-e + pliki PDF/DOCX)",
      "Zaawansowane opcje SEO (keywords, linki)",
      "System prepaid balance z Stripe",
      "Real-time progress tracking",
      "Eksport do HTML z formatowaniem",
      "Panel administracyjny z monitoringiem",
      "JWT authentication + Google OAuth",
      "Rate limiting i reCAPTCHA protection",
      "Email notifications przez AWS SES",
      "Blog z CMS dla content marketingu",
      "Responsywny design z dark mode",
    ],
    link: "https://smart-copy.ai",
    year: "2024-2025",
    stats: {
      agents: "Multi-agent",
      languages: "8 języków",
      maxPages: "150 stron",
    },
  },
  {
    id: 2,
    title: "MaturaPolski.pl",
    category: "SaaS / EdTech",
    description:
      "Innowacyjna platforma AI do przygotowania do matury z języka polskiego",
    fullDescription:
      "Zaawansowana platforma edukacyjna wykorzystująca Anthropic AI (Claude) do oceny wypracowań i notatek syntetycznych. System oferuje zarówno pytania zamknięte (jednokrotny i wielokrotny wybór, uzupełnianie luk, łączenie elementów itp.), jak i otwarte (krótkie odpowiedzi, notatki syntetyczne, wypracowania) oceniane przez sztuczną inteligencję. Platforma zawiera system sesji nauki z adaptywnym doborem zadań, real-time feedback, dashboard analityki postępów, oraz plany subskrypcyjne przez Stripe. Background jobs obsługiwane przez BullMQ + Redis. WebSockets dla live updates podczas sesji.",
    image: "/projects/maturapolski.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Fastify",
      "Prisma ORM",
      "PostgreSQL",
      "Anthropic AI",
      "Stripe",
      "AWS S3",
      "AWS SES",
      "WebSockets",
      "BullMQ",
      "Redis",
      "TanStack Query",
      "Zustand",
      "Framer Motion",
    ],
    features: [
      "Ocena wypracowań przez AI (Claude)",
      "System sesji nauki z adaptywnym doborem zadań",
      "Real-time feedback dla uczniów",
      "Dashboard analityki postępów",
      "Plany subskrypcyjne (FREE, BASIC, PREMIUM)",
      "System punktów AI z rolling limits",
      "WebSockets dla live updates",
      "Background jobs (BullMQ + Redis)",
      "Eksport wyników do PDF",
      "Panel administracyjny",
      "Autentykacja JWT + Google OAuth",
      "Upload plików do AWS S3",
      "Email notifications przez AWS SES",
      "Responsywny design z dark mode",
      "Tracking postępów ucznia",
      "Billing portal self-service",
    ],
    link: "https://maturapolski.pl",
    year: "2024-2025",
  },
  {
    id: 3,
    title: "Smart-Edu.AI",
    category: "SaaS / EdTech",
    description: "Platforma AI do generowania prac pisemnych i naukowych",
    fullDescription:
      "Zaawansowana platforma wykorzystująca sztuczną inteligencję (Claude AI) do generowania wysokiej jakości prac pisemnych, naukowych i zaliczeniowych. System potrafi wygenerować nawet 120-stronicową pracę dyplomową w 20 minut - w pełni kompletną z bibliografią, cytowaniami i formatowaniem akademickim. Platforma obsługuje 8 języków i różne typy prac.",
    image: "/projects/smartedu.jpg",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "AWS ES2",
      "Anthropic AI",
      "Stripe",
      "Make.com",
      "Airtable",
      "TinyMCE",
    ],
    features: [
      "Generowanie prac licencjackich i magisterskich",
      "Wsparcie dla 8+ języków",
      "Automatyczne wyszukiwanie i cytowanie źródeł",
      "Bibliografia w formacie akademickim",
      "Integracja z Make.com dla automatyzacji procesów",
      "Baza danych klientów w Airtable",
      "System płatności Stripe",
      "Eksport do PDF, DOCX, HTML",
    ],
    link: "https://smart-edu.ai",
    year: "2024",
  },
  {
    id: 4,
    title: "Nadamel.pl",
    category: "Strona firmowa",
    description:
      "Nowoczesna strona dla firmy stolarskiej z pełną optymalizacją SEO i wydajności",
    fullDescription:
      "Profesjonalna strona internetowa dla firmy stolarskiej Nadamel zbudowana w Astro z naciskiem na maksymalną wydajność i SEO. Strona wykorzystuje statyczną generację (SSG) dla błyskawicznego ładowania. Rozbudowana struktura 8 podstron usługowych z bogatą treścią SEO, mega menu dropdown w nawigacji, oraz zaawansowane structured data (JSON-LD z OfferCatalog). Hosting na AWS S3 + CloudFront CDN zapewnia globalną dostępność. Perfect Lighthouse score dzięki optymalizacji Core Web Vitals.",
    image: "/projects/nadamel.jpg",
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "AWS S3",
      "AWS CloudFront",
    ],
    features: [
      "Statyczna generacja stron (SSG)",
      "8 kompletnych podstron usługowych",
      "Mega menu dropdown w nawigacji",
      "Rozbudowane JSON-LD structured data",
      "Automatyczny sitemap i robots.txt",
      "Hosting na AWS S3 + CloudFront CDN",
      "Perfect Lighthouse score (98-100)",
      "Pełna responsywność mobile-first",
      "FAQ z interaktywnymi akordeonami",
      "Formularz kontaktowy",
      "Core Web Vitals optimization",
      "SEO-friendly routing i metadata",
      "Open Graph i Twitter Cards",
      "Nowoczesny design z animacjami",
    ],
    link: "https://nadamel.pl",
    year: "2025",
    stats: {
      lighthouse: "98/100",
      pages: "8 podstron",
      hosting: "AWS CDN",
    },
  },
  {
    id: 5,
    title: "GrandKuchnie.pl",
    category: "Strona firmowa",
    description:
      "Profesjonalna strona dla producenta mebli kuchennych z portfolio realizacji",
    fullDescription:
      "Kompleksowa strona internetowa dla firmy GrandKuchnie prezentująca portfolio realizacji kuchennych. System zawiera rozbudowany CMS umożliwiający zarządzanie treścią, galerię realizacji z kategoryzacją według stylu i materiałów, formularz kontaktowy z powiadomieniami email. Strona działa błyskawiczna i jest zoptymalizowane pod kątem SEO.",
    image: "/projects/grandkuchnie.jpg",
    technologies: [
      "Next.js",
      "Prisma",
      "Node.js",
      "React",
      "AWS S3",
      "Express",
      "Multer",
      "Tailwind CSS",
    ],
    features: [
      "Portfolio realizacji z filtrowaniem po kategoriach",
      "System CMS do zarządzania treścią",
      "Galeria projektów z lightbox",
      "Formularz kontaktowy z walidacją",
      "Optymalizacja SEO",
      "Responsywny design",
      "Integracja z Google Analytics",
      "Integracja z Google Ads",
      "Upload zdjęć na AWS S3",
      "Panel administracyjny",
    ],
    link: "https://grandkuchnie.pl",
    year: "2025",
  },
  {
    id: 6,
    title: "Stojan Shop",
    category: "E-commerce",
    description: "Własny sklep e-commerce z pełną migracją z WooCommerce",
    fullDescription:
      "Profesjonalny sklep e-commerce stworzony od podstaw w 2024 roku jako następca wersji WooCommerce z 2021. Przeprowadziłem pełną migrację, zachowując strukturę URL i moc SEO. Nowy sklep nie tylko utrzymał pozycje, ale zwiększył sprzedaż o 40% dzięki szybszemu działaniu, lepszemu UX/UI i optymalizacji. System automatycznie generuje opisy produktów przez AI i synchronizuje stany magazynowe z Allegro.",
    image: "/projects/stojan.jpg",
    technologies: [
      "TypeScript",
      "Node.js",
      "TypeORM",
      "PostgreSQL",
      "AWS S3",
      "AWS SES",
      "Anthropic AI",
      "Allegro API",
      "Stripe",
      "Google Analytics",
      "Nginx",
      "PM2",
    ],
    features: [
      "Migracja z WordPress/WooCommerce z zachowaniem SEO",
      "Wzrost sprzedaży o 40% po migracji",
      "Automatyczne opisy produktów generowane przez Anthropic AI",
      "Dwukierunkowa synchronizacja z Allegro",
      "Zarządzanie stanami magazynowymi w czasie rzeczywistym",
      "Płatności Stripe (w tym Przelewy24)",
      "Automatyczne mailingi przez AWS SES",
      "Integracja z Google Analytics, Ads i Merchant Center",
      "Optymalizowany UX/UI dla konwersji",
      "Hosting na AWS EC2 z Nginx",
      "Backup i synchronizacja baz danych",
    ],
    link: "https://www.silniki-elektryczne.com.pl",
    year: "2021-2024",
  },
  {
    id: 7,
    title: "Zeszyty ćwiczeń dla szkół policealnych",
    category: "Publishing / EdTech",
    description:
      "11 profesjonalnych zeszytów ćwiczeń w LaTeX/Quarto dla wydawnictwa edukacyjnego",
    fullDescription:
      "Kompleksowe zlecenie dla zewnętrznego wydawnictwa obejmujące stworzenie 11 zeszytów ćwiczeń dla uczniów szkół policealnych. Projekt obejmował zarówno tworzenie merytorycznej treści edukacyjnej, jak i profesjonalny skład w systemie Quarto/LaTeX. Każdy zeszyt został przygotowany do druku profesjonalnego z zachowaniem standardów wydawniczych.",
    image: "/projects/zeszyty.jpg",
    technologies: ["Quarto", "LaTeX", "Python", "Pandoc", "TikZ", "BibTeX"],
    features: [
      "11 kompletnych zeszytów ćwiczeń",
      "Treści merytoryczne dla szkół policealnych",
      "Profesjonalny skład w LaTeX",
      "Formatowanie zgodne ze standardami wydawniczymi",
      "Generowanie PDF print-ready",
      "Automatyczne spisy treści i indeksy",
      "Wykresy i diagramy w TikZ",
      "Bibliografia w formacie akademickim",
      "Gotowe do druku profesjonalnego",
      "Renderowanie przez Quarto do PDF",
    ],
    link: "#",
    year: "2025",
    stats: {
      publications: "11 zeszytów",
      pages: "1500+",
      client: "Wydawnictwo zewnętrzne",
    },
  },
  {
    id: 8,
    title: "Meble-Bydgoszcz.pl",
    category: "Strona firmowa",
    description:
      "Kompleksowa strona dla firmy meblowej z dynamiczną integracją Google Places API",
    fullDescription:
      "Profesjonalna strona internetowa dla firmy meblowej Meble-Bydgoszcz zbudowana w Astro z pełną optymalizacją wydajności. Strona wykorzystuje statyczną architekturę dla maksymalnej szybkości i SEO, jednocześnie integrując dynamiczne opinie z Google Places API przez serverless Lambda. Hosting na AWS S3 + CloudFront zapewnia globalną dostępność i błyskawiczne ładowanie. System automatycznego generowania struktury danych Schema.org poprawia widoczność w wyszukiwarkach.",
    image: "/projects/meble-bydgoszcz.jpg",
    technologies: [
      "Astro",
      "AWS S3",
      "AWS CloudFront",
      "AWS API Gateway",
      "AWS Lambda",
      "Tailwind CSS",
      "Google Places API",
      "TypeScript",
      "EmailJS",
    ],
    features: [
      "Statyczna generacja stron dla maksymalnej wydajności",
      "Hosting na AWS S3 z CloudFront CDN",
      "Dynamiczne pobieranie opinii z Google Places API",
      "Serverless API przez AWS Lambda",
      "Automatyczne generowanie Schema.org",
      "Pełna responsywność i optymalizacja mobile",
      "Galeria realizacji z filtrowaniem",
      "Formularz kontaktowy z EmailJS",
      "Core Web Vitals optimization",
      "SEO-friendly routing i metadata",
    ],
    link: "https://meble-bydgoszcz.pl",
    year: "2024-2025",
  },
  {
    id: 9,
    title: "Project-Design.pl",
    category: "Portfolio / Strona firmowa",
    description:
      "Elegancka strona portfolio dla studia projektowania wnętrz w Toruniu",
    fullDescription:
      "Minimalistyczna strona portfolio dla studia projektowania wnętrz Project Design. Projekt skupia się na prezentacji realizacji z naciskiem na estetykę premium i user experience. Wykorzystuje Astro dla statycznej generacji, co zapewnia błyskawiczne ładowanie. Integracja z Cloudinary umożliwia optymalizację i transformację obrazów on-the-fly. System filtrowania projektów według kategorii i stylu. Formularz kontaktowy z możliwością załączania plików. Pełna optymalizacja SEO z automatycznym sitemap i strukturą danych.",
    image: "/projects/project-design.jpg",
    technologies: [
      "Astro",
      "AWS S3",
      "AWS CloudFront",
      "Tailwind CSS",
      "EmailJS",
      "Cloudinary",
      "TypeScript",
      "Intersection Observer API",
    ],
    features: [
      "Minimalistyczny design premium",
      "Zaawansowana galeria z modalami",
      "System filtrowania realizacji",
      "Scroll reveal animations",
      "Upload obrazów do Cloudinary",
      "Formularz z załącznikami",
      "Global CDN przez CloudFront",
      "Pełna optymalizacja SEO",
      "Strukturyzowane dane JSON-LD",
      "Automatyczne generowanie sitemap",
      "Lazy loading obrazów",
      "Perfect Lighthouse score",
    ],
    link: "https://project-design.pl",
    year: "2024",
    stats: {
      lighthouse: "98/100",
      accessibility: "100/100",
      security: "A+",
    },
  },
  {
    id: 10,
    title: "eCopywriting.pl",
    category: "SaaS / Content",
    description:
      "Platforma do bezkontakowego zamawiania tekstów copywriterskich",
    fullDescription:
      "Zaawansowana platforma umożliwiająca bezkontakowe zamawianie profesjonalnych tekstów copywriterskich. System łączy klientów z copywriterami poprzez intuicyjny panel, gdzie obie strony mogą komunikować się i realizować zamówienia. Wcześniej firma działała jako tradycyjna agencja wymagająca bezpośredniego kontaktu. Teraz cały proces jest zautomatyzowany - od wyceny po dostarczenie tekstów.",
    image: "/projects/ecopywriting.jpg",
    technologies: [
      "Next.js",
      "MongoDB",
      "AWS S3",
      "AWS EC2",
      "Stripe",
      "Node.js",
      "Nginx",
      "PM2",
      "TinyMCE",
      "Socket.io",
    ],
    features: [
      "Panel klienta z historią zamówień",
      "Panel administracyjny do zarządzania zleceniami",
      "System komunikacji między klientem a copywriterem",
      "Automatyczna wycena na podstawie typu i długości tekstu",
      "Płatności online przez Stripe",
      "Edytor tekstów TinyMCE",
      "System powiadomień email",
      "Hosting na AWS EC2 z Nginx i PM2",
      "Przechowywanie plików na AWS S3",
      "Real-time komunikacja przez Socket.io",
      "System statusów zamówień",
      "Generowanie faktur",
    ],
    link: "https://ecopywriting.pl",
    year: "2024",
  },
  {
    id: 11,
    title: "MagisterkaOnline.com.pl",
    category: "Content / EdTech",
    description:
      "Kompleksowy portal edukacyjny z poradnikami o pisaniu pracy magisterskiej",
    fullDescription:
      "Rozbudowany portal edukacyjny zawierający kompleksowe poradniki dla studentów piszących prace magisterskie. Strona oferuje szczegółowe artykuły na temat każdego etapu pisania pracy - od wyboru tematu, przez metodologię badań, po obronę. Szczególnie rozbudowana sekcja metodologii zawiera 16 podstron omawiających badania ilościowe i jakościowe, konstrukcję ankiet, hipotezy badawcze, dobór próby i analizę danych. Zbudowana w Astro 5 ze statyczną generacją dla maksymalnej wydajności SEO. Hosting na AWS S3 + CloudFront CDN.",
    image: "/projects/magisterkaonline.jpg",
    technologies: [
      "Astro 5",
      "TypeScript",
      "Tailwind CSS",
      "AWS S3",
      "AWS CloudFront",
    ],
    features: [
      "Statyczna generacja stron (SSG)",
      "30+ podstron z poradnikami",
      "Rozbudowana sekcja metodologii (16 artykułów)",
      "Poradniki: bibliografia, cytowanie, formatowanie",
      "Sekcje: wstęp, zakończenie, streszczenie, obrona",
      "Optymalizacja SEO z meta tagami",
      "Tailwind Typography dla czytelności",
      "Hosting na AWS S3 + CloudFront CDN",
      "Responsywny design mobile-first",
      "Szybkie ładowanie dzięki SSG",
      "Automatyczny sitemap",
      "Przyjazna struktura URL",
    ],
    link: "https://magisterkaonline.com.pl",
    year: "2025",
    stats: {
      articles: "30+ artykułów",
      methodology: "16 poradników",
      hosting: "AWS CDN",
    },
  },
  {
    id: 12,
    title: "By-Interior.pl",
    category: "Portfolio / Strona firmowa",
    description:
      "Elegancka strona dla studia projektowania wnętrz w Bydgoszczy",
    fullDescription:
      "Profesjonalna strona internetowa dla studia projektowania wnętrz ByInterior z Bydgoszczy. Strona prezentuje portfolio realizacji, zespół projektantów, proces współpracy oraz ofertę usług. Zbudowana w Astro ze statyczną generacją dla maksymalnej wydajności. Zawiera sekcje: hero, o nas, usługi, proces, portfolio, zespół, opinie klientów, CTA i kontakt. Serverless Lambda obsługuje backend (formularz/opinie). Hosting na AWS S3 + CloudFront CDN zapewnia błyskawiczne ładowanie.",
    image: "/projects/by-interior.jpg",
    technologies: [
      "Astro 4",
      "TypeScript",
      "Tailwind CSS",
      "AWS S3",
      "AWS CloudFront",
      "AWS Lambda",
    ],
    features: [
      "Statyczna generacja stron (SSG)",
      "Portfolio realizacji z galerią",
      "Prezentacja zespołu projektantów",
      "Sekcja procesu współpracy",
      "Opinie klientów (testimonials)",
      "Serverless backend (AWS Lambda)",
      "Formularz kontaktowy",
      "Animacje scroll reveal",
      "Hosting na AWS S3 + CloudFront CDN",
      "Responsywny design mobile-first",
      "Optymalizacja SEO z meta tagami",
      "Nowoczesny design z Tailwind",
    ],
    link: "https://by-interior.pl",
    year: "2025",
    stats: {
      sections: "9 sekcji",
      hosting: "AWS CDN",
      backend: "Serverless",
    },
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  type Project = (typeof projects)[0];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      window.history.pushState({ modal: true }, "");

      const handlePopState = () => {
        setSelectedProject(null);
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [selectedProject]);

  const closeModal = () => {
    setSelectedProject(null);
    if (window.history.state?.modal) {
      window.history.back();
    }
  };

  const filteredProjects = projects;

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projekty</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Od koncepcji do deploymentu - kompleksowe rozwiązania webowe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="bg-muted/30 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary/10">
                        {project.title.substring(0, 2)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-gray-400">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-blue-400 mb-3">
                    {project.category}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button className="text-primary hover:text-primary/80 flex items-center gap-2 text-sm font-medium">
                    Zobacz więcej <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background border border-primary/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-background/95 backdrop-blur p-6 border-b border-primary/10 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="h-64 relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                  {selectedProject.image ? (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-8xl font-bold text-primary/20">
                        {selectedProject.title.substring(0, 2)}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {selectedProject.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.year}
                    </span>
                    {selectedProject.link !== "#" && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto flex items-center gap-2 text-primary hover:text-primary/80"
                      >
                        Odwiedź stronę <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-lg text-muted-foreground mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  {selectedProject.stats && (
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(selectedProject.stats).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="bg-muted/50 p-4 rounded-lg text-center"
                          >
                            <div className="text-2xl font-bold text-primary">
                              {String(value)}
                            </div>
                            <div className="text-sm text-muted-foreground capitalize">
                              {key.replace("_", " ")}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">
                      Funkcjonalności
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map(
                        (feature: string, index: number) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologie</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-muted rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
