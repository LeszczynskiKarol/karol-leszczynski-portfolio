// src/components/sections/contact.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Kontakt</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Masz projekt? Chętnie porozmawiam o współpracy
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-muted/30 rounded-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.a
                href="mailto:kontakt@karol-leszczynski.pl"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">
                  kontakt@karol-leszczynski.pl
                </p>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Telefon</h3>
                <p className="text-muted-foreground text-sm">+48 509 370 772</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Lokalizacja</h3>
                <p className="text-muted-foreground text-sm">
                  Toruń, Bydgoszcz
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <p className="text-muted-foreground mb-6">
                Jestem dostępny do współpracy przy projektach webowych,
                integracji AI oraz automatyzacji procesów biznesowych.
              </p>

              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Napisz do mnie
                <Send className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
