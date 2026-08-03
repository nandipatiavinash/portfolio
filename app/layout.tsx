import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";
import { JsonLd } from "@/components/seo/JsonLd";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Software Developer | Custom Software & Landing Pages`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Avinash Nandipati",
    "Software Developer",
    "Landing Page Provider",
    "High Converting Landing Pages",
    "UI UX Building Design",
    "Custom Software Developer",
    "Custom ERP Development",
    "Landing Page Developer Hyderabad",
    "Software Developer Hyderabad",
    "Custom Web Applications",
    "GEO Engine Optimization",
    "SEO Optimized Web Design",
    // Local GEO Targets
    "Landing Page Provider Guntur",
    "Software Developer Vizag",
    "Custom Software Developer India",
    "ERP Software Developer Guntur",
    "Bespoke Software Vizag",
    "Freelance Software Developer India",
    // Global GEO Targets
    "Custom Software Developer US",
    "Landing Page Designer UK",
    "Software Developer Germany",
    "Custom Systems Developer USA",
    "Bespoke Business Software Germany",
    "Global Customized Software Solutions"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} — Software Developer`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.studioName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Software Developer`,
    description: siteConfig.description,
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
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.3850;78.4867",
    "ICBM": "17.3850, 78.4867",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-body antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
