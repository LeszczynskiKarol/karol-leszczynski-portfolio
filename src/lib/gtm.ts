// src/lib/gtm.ts
declare global {
  interface Window {
    dataLayer: unknown[]; // <-- ZMIEŃ TYP TUTAJ
    gtag: (...args: unknown[]) => void;
  }
}

export const GTM_ID = "GTM-57RCL6WC";

export const initializeDefaultConsent = () => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];

    window.gtag = function (...args) {
      window.dataLayer.push(args); // Teraz to zadziała
    };

    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted",
      wait_for_update: 2000,
    });

    window.gtag("set", {
      ads_data_redaction: true,
      url_passthrough: true,
      region: ["PL", "EU"],
    });
  }
};
