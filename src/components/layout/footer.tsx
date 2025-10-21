// src/components/layout/footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Code2,
  Heart,
  Clock,
  CheckCircle,
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  disabled?: boolean;
}

interface FooterLinks {
  [key: string]: FooterLink[];
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks: FooterLinks = {
    Główne: [
      { label: "Start", href: "/" },
      { label: "O mnie", href: "/#about" },
      { label: "Projekty", href: "/#projects" },
      { label: "Umiejętności", href: "/#skills" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    "Usługi lokalne": [
      {
        label: "Sklepy internetowe Toruń",
        href: "/uslugi/sklepy-internetowe-torun",
      },
      { label: "Strony WWW Toruń", href: "/uslugi/strony-www-torun" },
      { label: "Programista Toruń", href: "/uslugi/programista-torun" },
    ],
    "Usługi ogólnopolskie": [
      { label: "Platformy SaaS z AI", href: "/uslugi/platformy-saas-ai" },
      { label: "Integracje AI dla firm", href: "/uslugi/integracje-ai" },
      { label: "Migracje sklepów", href: "/uslugi/migracje-sklepow" },
      {
        label: "Automatyzacja procesów",
        href: "/uslugi/automatyzacja-procesow",
      },
      { label: "Publikacje LaTeX/Quarto", href: "/uslugi/publikacje-latex" },
    ],
    Informacje: [
      { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
      { label: "Wszystkie usługi", href: "/uslugi" },
      //{ label: "Blog", href: "/blog", disabled: true },
      //{ label: "Case studies", href: "/case-studies", disabled: true },
    ],
  };

  //const stats = [
  //{ value: "15+", label: "lat doświadczenia" },
  //{ value: "50+", label: "projektów" },
  //{ value: "11", label: "publikacji" },
  //{ value: "24/7", label: "wsparcie AI" },
  //];

  return (
    <footer className="relative bg-background border-t border-primary/10 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-16">
        {/* Top Section - Brand & Contact */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="font-mono text-2xl font-bold">
                <span className="text-primary">{"<"}</span>
                KL
                <span className="text-primary">{"/>"}</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Full-Stack Developer z 15-letnim doświadczeniem w digital.
              Specjalizuję się w tworzeniu nowoczesnych aplikacji webowych,
              integracji AI i automatyzacji procesów biznesowych.
            </p>

            {/* Quick Stats 
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-muted/50 rounded-lg p-3"
                >
                  <div className="text-xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>*/}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-4">
              <a
                href="tel:+48509370772"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm">Telefon</div>
                  <div className="font-medium">+48 509 370 772</div>
                </div>
              </a>
              <a
                href="mailto:kontakt@karol-leszczynski.pl"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm">Email</div>
                  <div className="font-medium">
                    kontakt@karol-leszczynski.pl
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm">Lokalizacja</div>
                  <div className="font-medium">Toruń, Bydgoszcz</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <p className="text-muted-foreground mb-6">
              Zacznijmy od bezpłatnej konsultacji. Omówimy Twoje potrzeby i
              zaproponuję najlepsze rozwiązanie.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Darmowa konsultacja</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Odpowiedź w 24h</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-primary/10"
        >
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <div key={category}>
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + linkIndex * 0.05,
                      }}
                    >
                      {link.disabled ? (
                        <span className="text-muted-foreground/50 text-sm cursor-not-allowed">
                          {link.label}
                          <span className="text-xs ml-1">(wkrótce)</span>
                        </span>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-muted-foreground hover:text-primary text-sm transition-colors inline-flex items-center gap-1 group"
                        >
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )
          )}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-muted-foreground"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-0">
            <span>© {currentYear} Karol Leszczyński.</span>
            <span className="hidden md:inline">•</span>
            <span>Wszystkie prawa zastrzeżone.</span>
            <span className="hidden md:inline">•</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>using</span>
            <Code2 className="w-4 h-4 text-primary" />
            <span>Next.js & TypeScript</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
