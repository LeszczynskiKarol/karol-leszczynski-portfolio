// src/hooks/useCookieConsent.ts

import { useState, useEffect, useCallback } from "react";

export interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export interface ConsentConfig {
  necessary: {
    title: string;
    description: string;
    required: boolean;
  };
  analytics: {
    title: string;
    description: string;
    required: boolean;
  };
  marketing: {
    title: string;
    description: string;
    required: boolean;
  };
  preferences: {
    title: string;
    description: string;
    required: boolean;
  };
}

const CONSENT_STORAGE_KEY = "kl-cookie-consent";
const CONSENT_VERSION = "1.0";

export const consentConfig: ConsentConfig = {
  necessary: {
    title: "Niezbędne",
    description:
      "Pliki cookie niezbędne do prawidłowego funkcjonowania strony. Nie można ich wyłączyć.",
    required: true,
  },
  analytics: {
    title: "Analityczne",
    description:
      "Pomagają nam zrozumieć, jak użytkownicy korzystają ze strony, zbierając anonimowe dane.",
    required: false,
  },
  marketing: {
    title: "Marketingowe",
    description:
      "Używane do personalizacji reklam i śledzenia skuteczności kampanii marketingowych.",
    required: false,
  },
  preferences: {
    title: "Preferencje",
    description:
      "Zapamiętują Twoje ustawienia i preferencje dla lepszego doświadczenia użytkownika.",
    required: false,
  },
};

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Inicjalizacja Google Consent Mode
  const initializeGoogleConsent = useCallback((consentState: ConsentState) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: consentState.marketing ? "granted" : "denied",
        ad_user_data: consentState.marketing ? "granted" : "denied",
        ad_personalization: consentState.marketing ? "granted" : "denied",
        analytics_storage: consentState.analytics ? "granted" : "denied",
        functionality_storage: consentState.preferences ? "granted" : "denied",
        personalization_storage: consentState.preferences
          ? "granted"
          : "denied",
        security_storage: "granted",
      });
    }
  }, []);

  // Wczytanie zgód z localStorage
  useEffect(() => {
    const loadConsent = () => {
      try {
        const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);

        if (storedConsent) {
          const parsed = JSON.parse(storedConsent);

          // Sprawdź wersję zgód
          if (parsed.version === CONSENT_VERSION) {
            setConsent(parsed.consent);
            initializeGoogleConsent(parsed.consent);
            setShowBanner(false);

            // DODAJ TO - wysłanie eventu do GTM przy załadowaniu zapisanych zgód
            if (typeof window !== "undefined" && window.dataLayer) {
              window.dataLayer.push({
                event: "cookie_consent_update",
                consent_analytics: parsed.consent.analytics,
                consent_marketing: parsed.consent.marketing,
                consent_preferences: parsed.consent.preferences,
              });
            }
          } else {
            // Jeśli wersja się zmieniła, pokaż banner ponownie
            setShowBanner(true);
          }
        } else {
          // Brak zgód - pokaż banner
          setShowBanner(true);
        }
      } catch (error) {
        console.error("Error loading consent:", error);
        setShowBanner(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadConsent();
  }, [initializeGoogleConsent]);

  // Zapisanie zgód
  const saveConsent = useCallback(
    (newConsent: ConsentState) => {
      try {
        const consentData = {
          version: CONSENT_VERSION,
          consent: newConsent,
          timestamp: new Date().toISOString(),
        };

        localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
        setConsent(newConsent);
        initializeGoogleConsent(newConsent);
        setShowBanner(false);
        setShowSettings(false);

        // Wywołaj event dla GTM
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "cookie_consent_update",
            consent_analytics: newConsent.analytics,
            consent_marketing: newConsent.marketing,
            consent_preferences: newConsent.preferences,
          });
        }
      } catch (error) {
        console.error("Error saving consent:", error);
      }
    },
    [initializeGoogleConsent]
  );

  // Akceptuj wszystkie
  const acceptAll = useCallback(() => {
    const allConsent: ConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveConsent(allConsent);
  }, [saveConsent]);

  // Akceptuj tylko niezbędne
  const acceptNecessary = useCallback(() => {
    const necessaryConsent: ConsentState = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveConsent(necessaryConsent);
  }, [saveConsent]);

  // Zapisz wybrane
  const saveSelected = useCallback(
    (selectedConsent: ConsentState) => {
      saveConsent({
        ...selectedConsent,
        necessary: true, // Zawsze wymagane
      });
    },
    [saveConsent]
  );

  // Otwórz ustawienia
  const openSettings = useCallback(() => {
    setShowSettings(true);
    setIsMinimized(false);
  }, []);

  // Minimalizuj/Maksymalizuj
  const toggleMinimize = useCallback(() => {
    setIsMinimized((prev) => !prev);
  }, []);

  // Ponownie otwórz banner
  const reopenBanner = useCallback(() => {
    setShowBanner(true);
    setIsMinimized(false);
  }, []);

  return {
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
  };
}
