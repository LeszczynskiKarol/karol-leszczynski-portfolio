// src/app/polityka-prywatnosci/page.tsx
"use client";

import { Navigation } from "@/components/layout/navigation";
import { Cookie, Shield, Database, Globe } from "lucide-react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Polityka prywatności",
  description: "Polityka prywatności strony karol-leszczynski.pl",
  url: "https://www.karol-leszczynski.pl/polityka-prywatnosci",
  inLanguage: "pl-PL",
  isPartOf: {
    "@type": "WebSite",
    url: "https://www.karol-leszczynski.pl",
    name: "Karol Leszczyński - Full-Stack Developer",
  },
  about: {
    "@type": "Thing",
    name: "GDPR Compliance",
  },
};

export default function PolitykaPrywatnosci() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">
            Polityka Prywatności i Cookies
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="bg-muted/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold m-0">
                  Administrator danych
                </h2>
              </div>
              <p>
                Administratorem Twoich danych osobowych jest Karol Leszczyński,
                prowadzący działalność gospodarczą pod adresem [adres]. Możesz
                skontaktować się ze mną pod adresem email:
                kontakt@karol-leszczynski.pl
              </p>
            </section>

            <section className="bg-muted/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold m-0">Pliki Cookie</h2>
              </div>

              <h3 className="text-xl font-semibold mt-4">
                Czym są pliki cookie?
              </h3>
              <p>
                Pliki cookie to małe pliki tekstowe zapisywane na Twoim
                urządzeniu podczas przeglądania strony internetowej. Używamy ich
                do zapewnienia prawidłowego funkcjonowania strony oraz analizy
                ruchu.
              </p>

              <h3 className="text-xl font-semibold mt-4">
                Rodzaje używanych plików cookie:
              </h3>

              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Niezbędne</h4>
                  <p className="text-sm text-muted-foreground">
                    Wymagane do podstawowego funkcjonowania strony. Nie można
                    ich wyłączyć.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">
                    Analityczne (Google Analytics)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Pomagają zrozumieć, jak użytkownicy korzystają ze strony.
                    Zbieramy anonimowe dane o odwiedzinach.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Marketingowe (Google Ads)</h4>
                  <p className="text-sm text-muted-foreground">
                    Używane do personalizacji reklam i mierzenia skuteczności
                    kampanii.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Preferencje</h4>
                  <p className="text-sm text-muted-foreground">
                    Zapamiętują Twoje ustawienia, np. wybrany motyw strony.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-muted/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold m-0">Twoje prawa</h2>
              </div>
              <ul className="space-y-2">
                <li>Prawo dostępu do swoich danych</li>
                <li>Prawo do sprostowania danych</li>
                <li>
                  Prawo do usunięcia danych (&quot;prawo do bycia
                  zapomnianym&quot;)
                </li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo do sprzeciwu</li>
                <li>Prawo do cofnięcia zgody w dowolnym momencie</li>
              </ul>
            </section>

            <section className="bg-muted/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold m-0">
                  Zarządzanie zgodami
                </h2>
              </div>
              <p>
                Możesz w każdej chwili zmienić swoje preferencje dotyczące
                plików cookie klikając w ikonę ciasteczka w prawym dolnym rogu
                strony lub
                <button
                  onClick={() => {
                    // Trigger reopenBanner event
                    window.dispatchEvent(new CustomEvent("reopenCookieBanner"));
                  }}
                  className="text-primary hover:text-primary/80 ml-1 underline"
                >
                  klikając tutaj
                </button>
                .
              </p>
            </section>

            <section className="text-sm text-muted-foreground">
              <p>Ostatnia aktualizacja: Styczeń 2025</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
