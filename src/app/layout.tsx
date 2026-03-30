import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";

import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ClientMonitoring } from "@/components/monitoring/client-monitoring";
import { JsonLd } from "@/components/seo/json-ld";
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/lib/seo/json-ld";
import { createRootMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-brand-navy font-sans text-brand-ivory antialiased">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <JsonLd data={[buildOrganizationJsonLd(), buildWebsiteJsonLd()]} />
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <AnalyticsScripts />
        <ClientMonitoring />
      </body>
    </html>
  );
}
