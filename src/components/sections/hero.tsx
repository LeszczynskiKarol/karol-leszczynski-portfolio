// src/components/sections/hero.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  "Full-Stack Developer",
  "AWS Cloud Architect",
  "E-commerce Specialist",
  "Author & Publisher",
  "SEO Expert",
  "Copywriter & Content Writer",
];

export function HeroSection() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const skill = skills[currentSkill];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(skill.substring(0, displayText.length + 1));
          if (displayText === skill) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(skill.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setCurrentSkill((prev) => (prev + 1) % skills.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentSkill]);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        {mounted && (
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
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 lg:space-y-12"
        >
          {/* Terminal Header - Wider on large screens */}
          <div className="code-block p-6 sm:p-8 lg:p-12 max-w-full lg:max-w-6xl xl:max-w-7xl mx-auto mt-16 lg:mt-0">
            <div className="flex items-center gap-2 mb-6 lg:mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="font-mono space-y-4 lg:space-y-6">
              <div className="text-accent text-sm sm:text-base lg:text-lg">
                <span className="text-muted-foreground">$</span> whoami
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Karol Leszczyński
              </div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary h-8 lg:h-12">
                <span className="text-muted-foreground">{">"}</span>
                {displayText}
                <span className="animate-pulse">|</span>
              </div>

              {/* Poprawka dla mobile - dodaj overflow-x-auto */}
              <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-muted-foreground overflow-x-auto">
                <span className="text-accent">const</span> stack = [
                <span className="text-primary">&quot;Next.js&quot;</span>,
                <span className="text-primary">&quot;React&quot;</span>,
                <span className="text-primary">&quot;Node.js&quot;</span>,
                <span className="text-primary">&quot;AWS&quot;</span>,
                <span className="text-primary">&quot;TypeScript&quot;</span>];
              </div>

              {/* Additional info for larger screens */}
              <div className="hidden lg:block mt-6 space-y-2 text-sm xl:text-base text-muted-foreground">
                <div>
                  <span className="text-accent">const</span> experience =
                  <span className="text-primary"> &quot;15+ years&quot;</span>;
                </div>
                <div>
                  <span className="text-accent">const</span> available =
                  <span className="text-green-500"> true</span>;
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Larger on desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-6 sm:px-8 lg:px-10 py-3 lg:py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Zobacz projekty
            </a>
            <a
              href="/kontakt"
              className="px-6 sm:px-8 lg:px-10 py-3 lg:py-4 border border-primary text-primary rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-primary/10 transition-all hover:scale-105"
            >
              Kontakt
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
