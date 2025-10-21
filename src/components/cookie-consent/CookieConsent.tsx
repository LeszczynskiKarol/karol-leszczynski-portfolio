// src/components/cookie-consent/CookieConsent.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cookie,
  X,
  ChevronDown,
  ChevronUp,
  Shield,
  BarChart3,
  Target,
  Settings2,
  Check,
} from "lucide-react";
import { useCookieConsent, ConsentState } from "@/hooks/useCookieConsent";

export function CookieConsent() {
  const {
    consent,
    isLoading,
    showBanner,
    showSettings,
    isMinimized,
    acceptAll,
    acceptNecessary,
    saveSelected,
    openSettings,
    setShowSettings,
    setShowBanner,
    toggleMinimize,
    reopenBanner,
    consentConfig,
  } = useCookieConsent();

  const [tempConsent, setTempConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Aktualizuj tymczasowe zgody gdy załadują się zapisane
  useEffect(() => {
    if (consent) {
      setTempConsent(consent);
    }
  }, [consent]);

  // Event listener dla otwierania banera z innych stron
  useEffect(() => {
    const handleReopenBanner = () => {
      reopenBanner();
    };

    window.addEventListener("reopenCookieBanner", handleReopenBanner);

    return () => {
      window.removeEventListener("reopenCookieBanner", handleReopenBanner);
    };
  }, [reopenBanner]);

  // WAŻNE: Wszystkie hooki muszą być przed tym returnem!
  if (isLoading) return null;

  const getIcon = (type: keyof ConsentState) => {
    switch (type) {
      case "necessary":
        return <Shield className="w-4 h-4" />;
      case "analytics":
        return <BarChart3 className="w-4 h-4" />;
      case "marketing":
        return <Target className="w-4 h-4" />;
      case "preferences":
        return <Settings2 className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Floating Cookie Button (gdy banner jest ukryty) */}
      <AnimatePresence>
        {!showBanner && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={reopenBanner}
            className="fixed bottom-6 right-6 z-40 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full p-3 hover:bg-primary/30 transition-all shadow-lg group"
            aria-label="Ustawienia cookies"
          >
            <Cookie className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className={`fixed bottom-6 right-6 z-50 ${
              isMinimized ? "w-auto" : "w-[90vw] max-w-md"
            }`}
          >
            <div className="bg-background/95 backdrop-blur-lg border border-primary/20 rounded-xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-primary/10">
                <div className="flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">
                    {isMinimized ? "Cookies" : "Ustawienia prywatności"}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMinimize}
                    className="p-1.5 hover:bg-muted rounded-lg transition-colors"
                    aria-label={isMinimized ? "Rozwiń" : "Zwiń"}
                  >
                    {isMinimized ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      if (consent) {
                        setShowSettings(false);
                        setShowBanner(false);
                      } else {
                        acceptNecessary();
                      }
                    }}
                    className="p-1.5 hover:bg-muted rounded-lg transition-colors"
                    aria-label="Zamknij"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              {!isMinimized && (
                <AnimatePresence mode="wait">
                  {!showSettings ? (
                    <motion.div
                      key="main"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-4 space-y-4"
                    >
                      <p className="text-sm text-muted-foreground">
                        Używamy plików cookie, aby poprawić Twoje doświadczenia,
                        analizować ruch na stronie i personalizować treści.
                        Możesz zarządzać swoimi preferencjami w każdej chwili.
                      </p>

                      <div className="flex flex-col gap-2">
                        <button
                          onClick={acceptAll}
                          className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                        >
                          Akceptuj wszystkie
                        </button>
                        <button
                          onClick={acceptNecessary}
                          className="w-full px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors font-medium"
                        >
                          Tylko niezbędne
                        </button>
                        <button
                          onClick={openSettings}
                          className="w-full px-4 py-2 border border-primary/20 hover:bg-primary/5 rounded-lg transition-colors font-medium"
                        >
                          Zarządzaj preferencjami
                        </button>
                      </div>

                      <div className="pt-2 border-t border-primary/10">
                        <a
                          href="/polityka-prywatnosci"
                          className="text-xs text-primary hover:text-primary/80 transition-colors"
                        >
                          Polityka prywatności
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="settings"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-4 space-y-4 max-h-[60vh] overflow-y-auto cookie-settings-scroll"
                    >
                      <p className="text-sm text-muted-foreground">
                        Dostosuj swoje preferencje dotyczące plików cookie
                        poniżej.
                      </p>

                      <div className="space-y-3">
                        {(
                          Object.keys(consentConfig) as Array<
                            keyof ConsentState
                          >
                        ).map((key) => (
                          <div
                            key={key}
                            className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg"
                          >
                            <div className="mt-0.5">{getIcon(key)}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-medium text-sm">
                                  {consentConfig[key].title}
                                </h4>
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={tempConsent[key]}
                                    onChange={(e) =>
                                      setTempConsent({
                                        ...tempConsent,
                                        [key]: e.target.checked,
                                      })
                                    }
                                    disabled={consentConfig[key].required}
                                    className="sr-only peer"
                                  />
                                  <div
                                    className={`
                                    w-11 h-6 rounded-full transition-colors
                                    ${
                                      consentConfig[key].required
                                        ? "bg-primary/50 cursor-not-allowed"
                                        : "bg-muted peer-checked:bg-primary cursor-pointer"
                                    }
                                  `}
                                  >
                                    <div
                                      className={`
                                      absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full 
                                      transition-transform shadow-sm
                                      ${
                                        tempConsent[key]
                                          ? "translate-x-5"
                                          : "translate-x-0"
                                      }
                                    `}
                                    />
                                  </div>
                                </label>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {consentConfig[key].description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => setShowSettings(false)}
                          className="flex-1 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors font-medium"
                        >
                          Anuluj
                        </button>
                        <button
                          onClick={() => saveSelected(tempConsent)}
                          className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          Zapisz wybrane
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
