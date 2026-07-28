import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Abogados de Sucesiones en La Plata y Provincia",
    template: "%s | Sucesiones La Plata",
  },
  description:
    "Asesoramiento jurídico en sucesiones, declaratoria de herederos, tracto abreviado e inscripción de bienes en La Plata y Provincia de Buenos Aires.",
  applicationName: SITE.name,
  category: "legal",
  keywords: [
    "abogados sucesiones La Plata",
    "abogado sucesión Provincia de Buenos Aires",
    "declaratoria de herederos La Plata",
    "tracto abreviado sucesión",
    "sucesión sin testamento",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: SITE.name,
    title: "Abogados de Sucesiones en La Plata y Provincia",
    description: "Asesoramiento jurídico claro y humano para ordenar y avanzar con una sucesión.",
    url: SITE.url,
    images: [{ url: "/og-sucesiones.webp", width: 1200, height: 630, alt: "Abogados de Sucesiones en La Plata" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogados de Sucesiones en La Plata y Provincia",
    description: "Asesoramiento jurídico claro y humano para ordenar y avanzar con una sucesión.",
    images: ["/og-sucesiones.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f0e7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
