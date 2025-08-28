"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Award,
  Briefcase,
  GraduationCap,
  Code,
  FileText,
  TrendingUp,
  BookOpen,
} from "lucide-react";

const timeline = [
  {
    year: "2009",
    title: "Copywriter",
    description:
      "Rozpocząłem pracę jako copywriter, tworząc treści marketingowe dla firm z różnych branż.",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    year: "2012",
    title: "Specjalizacja SEO",
    description:
      "Rozszerzenie kompetencji o SEO i content marketing. Pierwsze sukcesy w pozycjonowaniu.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    year: "2015",
    title: "WordPress Expert",
    description:
      "Specjalizacja w tworzeniu stron na WordPress. Pierwsze projekty e-commerce na WooCommerce.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: "2018",
    title: "Własna agencja",
    description:
      "Założenie agencji copywriterskiej. Obsługa ponad 50 klientów rocznie.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    year: "2021",
    title: "Nauka programowania",
    description:
      "Intensywny nauka w zakresie Full-Stack Development. JavaScript, React, Node.js, bazy danych, cloud computing.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    description:
      "Rozpoczęcie pracy jako Full-Stack Developer. Pierwsze projekty SaaS.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    year: "2024",
    title: "AI & Automatyzacja",
    description:
      "Specjalizacja w integracjach AI (Anthropic, OpenAI) i automatyzacji procesów (Make.com, Airtable).",
    icon: <Award className="w-5 h-5" />,
  },
  {
    year: "2025",
    title: "Autor i wydawca",
    description:
      "Praca nad publikacjami. 11 gotowych do druku książek/zeszytów ćwiczeń w LaTeX/Quarto, własny e-book o copywritingu.",
    icon: <BookOpen className="w-5 h-5" />,
  },
];

export function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">O mnie</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Od copywritera do Full-Stack Developera - 15 lat w digital
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Photo and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Photo Placeholder */}
            <div className="relative mx-auto lg:mx-0 w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl" />
              <div className="relative w-full h-full rounded-full bg-muted border-2 border-primary/20 overflow-hidden">
                <Image
                  src="https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/karol_leszczynski_copywriter.jpeg"
                  alt="Karol Leszczyński"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 256px"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Karol Leszczyński</h3>

              <p className="text-muted-foreground">
                Od 2009 roku pracuję w branży digital - początkowo jako
                copywriter. Przez lata rozwijałem umiejętności w tworzeniu
                tekstów, SEO i e-marketingu, stając się ekspertem w obszarze
                content marketingu i optymalizacji dla wyszukiwarek.
              </p>

              <p className="text-muted-foreground">
                Jestem autorem 11 publikacji edukacyjnych przeznaczonych dla
                słuchaczy szkół policealnych przygotowujących się do egzaminów
                zawodowych na takich kierunkach jak m.in. technik masażysta,
                opiekun medyczny, terapeuta zajęciowy. Zeszyty ćwiczeń zostały
                stworzone w LaTeX/Quarto - wszystkie gotowe do profesjonalnego
                druku. Napisałem także autorski e-book &quot;Jak zostać
                copywriterem&quot;, w którym dzielę się swoją wiedzą i
                doświadczeniem.
              </p>

              <p className="text-muted-foreground">
                W latach 2021-2023 poszerzyłem swoje kompetencje o programowanie
                i zaczęłem się edukować jako Full-Stack Development. Dziś łączę
                doświadczenie marketingowe z umiejętnościami technicznymi,
                dzięki czemu mogę tworzyć kompleksowe rozwiązania digital.
              </p>

              <p className="text-muted-foreground">
                Specjalizuję się m.in. w tworzeniu platform SaaS
                wykorzystujących AI, integracjach z zewnętrznymi API oraz
                automatyzacji procesów biznesowych. Doskonale znam WordPress i
                WooCommerce, a także narzędzia low-code, jak Make.com i
                Airtable.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Full-Stack Developer
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  AI Integration
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  WordPress Expert
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  SEO Specialist
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  LaTeX/Quarto
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Autor publikacji
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex gap-4"
                  >
                    {/* Icon */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-2 border-primary/20 rounded-full">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <span className="text-sm text-primary font-semibold">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold mt-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
