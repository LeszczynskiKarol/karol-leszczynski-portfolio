// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karol Leszczyński | Full-Stack Developer & Digital Creator",
  description:
    "Portfolio Full-Stack Developera specjalizującego się w Next.js, React, Node.js, AWS. Tworzę aplikacje webowe, e-commerce i rozwiązania SaaS.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "AWS",
    "E-commerce",
    "SaaS",
  ],
  authors: [{ name: "Karol Leszczyński" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://karol-leszczynski.pl",
    title: "Karol Leszczyński | Full-Stack Developer",
    description: "Portfolio Full-Stack Developera",
    siteName: "Karol Leszczyński Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
