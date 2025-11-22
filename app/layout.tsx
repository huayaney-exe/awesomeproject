import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "BriefIA - Traduce tu negocio en diseño world-class",
  description: "Deja de adivinar qué pedirle al diseñador. BriefIA traduce lo que sabes (tu negocio) en lo que necesitas (lineamientos de diseño accionables). Para empresas B2B en Perú.",
  keywords: ["diseño", "brief", "B2B", "Perú", "inteligencia artificial", "lineamientos de diseño"],
  authors: [{ name: "BriefIA" }],
  creator: "BriefIA",
  publisher: "BriefIA",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://briefia.pe",
    title: "BriefIA - Traduce tu negocio en diseño world-class",
    description: "El intérprete AI entre tus objetivos de negocio y los lineamientos de diseño que necesitas.",
    siteName: "BriefIA",
  },
  twitter: {
    card: "summary_large_image",
    title: "BriefIA - Traduce tu negocio en diseño world-class",
    description: "El intérprete AI entre tus objetivos de negocio y los lineamientos de diseño que necesitas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
