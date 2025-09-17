// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { GTMProvider } from "@/components/providers/GTMProvider";
import { CookieConsent } from "@/components/cookie-consent/CookieConsent";
import { GTM_ID } from "@/lib/gtm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.karol-leszczynski.pl"),
  title: {
    default: "Karol Leszczyński | Full-Stack Developer & Digital Creator",
    template: "%s | Karol Leszczyński",
  },
  description:
    "Full-Stack Developer z 15-letnim doświadczeniem. Tworzę aplikacje webowe, sklepy internetowe, platformy SaaS. Toruń, Bydgoszcz.",
  keywords: [
    "Full-Stack Developer",
    "programista Toruń",
    "tworzenie stron Toruń",
    "Next.js",
    "React",
    "Node.js",
    "AWS",
  ],
  authors: [{ name: "Karol Leszczyński" }],
  creator: "Karol Leszczyński",
  publisher: "Karol Leszczyński",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://www.karol-leszczynski.pl",
    siteName: "Karol Leszczyński - Full-Stack Developer",
    images: [
      {
        url: "https://www.karol-leszczynski.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karol Leszczyński - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karol Leszczyński | Full-Stack Developer",
    description: "Full-Stack Developer z 15-letnim doświadczeniem",
    images: ["https://www.karol-leszczynski.pl/og-image.jpg"],
  },
  verification: {
    google: "twój-kod-weryfikacji-google",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GTMProvider />
          {children}
          <Footer />
          <CookieConsent />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
