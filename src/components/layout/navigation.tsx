// src/components/layout/navigation.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = {
    "Strony internetowe": [
      { label: "Toruń", href: "/uslugi/strony-www-torun" },
      { label: "Bydgoszcz", href: "/uslugi/strony-internetowe-bydgoszcz" },
    ],
    "Sklepy internetowe": [
      { label: "Toruń", href: "/uslugi/sklepy-internetowe-torun" },
      { label: "Bydgoszcz", href: "/uslugi/sklepy-internetowe-bydgoszcz" },
    ],
    Programista: [
      { label: "Toruń", href: "/uslugi/programista-torun" },
      { label: "Bydgoszcz", href: "/uslugi/programista-bydgoszcz" },
    ],
    "Usługi specjalistyczne": [
      { label: "Platformy SaaS z AI", href: "/uslugi/platformy-saas-ai" },
      { label: "Integracje AI dla firm", href: "/uslugi/integracje-ai" },
      { label: "Migracje sklepów", href: "/uslugi/migracje-sklepow" },
      {
        label: "Automatyzacja procesów",
        href: "/uslugi/automatyzacja-procesow",
      },
      { label: "Publikacje LaTeX/Quarto", href: "/uslugi/publikacje-latex" },
    ],
  };

  const navItems = [
    { label: "Start", href: "/" },
    {
      label: "Usługi",
      href: "#",
      dropdown: true,
    },
    { label: "Projekty", href: pathname === "/" ? "#projects" : "/#projects" },
    { label: "O mnie", href: pathname === "/" ? "#about" : "/#about" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xl font-bold cursor-pointer"
            >
              <span className="text-primary">{"<"}</span>
              KL
              <span className="text-primary">{"/>"}</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href="/uslugi"
                      className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-background/95 backdrop-blur-lg border border-primary/10 rounded-lg shadow-xl overflow-hidden"
                        >
                          {Object.entries(services).map(([category, items]) => (
                            <div key={category}>
                              <div className="px-4 py-1.5 bg-primary/5 border-b border-primary/10">
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                  {category}
                                </span>
                              </div>
                              <div className="py-1">
                                {items.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    className="block px-4 py-1.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                                  >
                                    {service.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className={`text-muted-foreground hover:text-primary transition-colors font-medium ${
                      pathname === item.href ? "text-primary" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </motion.div>
            ))}

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-primary/10 max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <span className="block font-medium text-primary mb-2">
                    {item.label}
                  </span>
                  {Object.entries(services).map(([category, items]) => (
                    <div key={category} className="ml-4 mb-3">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {category}
                      </span>
                      <div className="mt-1 space-y-1">
                        {items.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors pl-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
