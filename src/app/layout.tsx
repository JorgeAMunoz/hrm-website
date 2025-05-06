import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { SiteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: SiteConfig.name,
    template: `%s | ${SiteConfig.name}`,
  },
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  authors: [{ name: SiteConfig.author, url: SiteConfig.url }],
  creator: SiteConfig.author,
  metadataBase: new URL(SiteConfig.url), // Important for resolving relative paths
   openGraph: {
    type: "website",
    locale: "en_US",
    url: SiteConfig.url,
    title: SiteConfig.name,
    description: SiteConfig.description,
    siteName: SiteConfig.name,
    images: [
      {
        url: `/og-image.png`, // Relative to metadataBase
        width: 1200,
        height: 630,
        alt: `${SiteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SiteConfig.name,
    description: SiteConfig.description,
    images: [`/og-image.png`], // Relative to metadataBase
    // creator: "@yourtwitterhandle", // Add Twitter handle if available
  },
  icons: {
    icon: "/favicon.ico", // Relative to metadataBase
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
  applicationName: SiteConfig.name,
  alternates: {
     canonical: '/', // Sets the canonical URL for the homepage
     // Add languages if applicable
  },
  // Viewport settings can also be defined here if needed
  // viewport: 'width=device-width, initial-scale=1',
};

// Function to generate JSON-LD Schema
const generateSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber", // More specific type than LocalBusiness if appropriate
    "name": SiteConfig.name,
    "description": SiteConfig.description,
    "url": SiteConfig.url,
    "telephone": SiteConfig.phoneNumber,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SiteConfig.addressParts.streetAddress,
      "addressLocality": SiteConfig.addressParts.addressLocality,
      "addressRegion": SiteConfig.addressParts.addressRegion,
      "postalCode": SiteConfig.addressParts.postalCode,
      "addressCountry": SiteConfig.addressParts.addressCountry
    },
    "geo": { // Approximate coordinates if known, helpful for local SEO
      "@type": "GeoCoordinates",
      // Replace with actual coordinates if available
      // "latitude": "40.866657",
      // "longitude": "-73.897000"
    },
    "areaServed": SiteConfig.boroughs.map(borough => ({
      "@type": "City",
      "name": borough,
      "sameAs": `https://en.wikipedia.org/wiki/${borough.replace(" ", "_")}` // Link to authoritative source if possible
    })),
    // Add image URL if a logo URL is defined
    // "image": `${SiteConfig.url}/logo.png`,
    // Define opening hours if available in SiteConfig
    // "openingHours": SiteConfig.openingHours, // Assumes ISO 8601 format e.g., "Mo-Fr 09:00-17:00" or multiple entries
    // Price range could be added if applicable, e.g., "$$"
  };
  // If 24/7, explicitly state it
  // schema.openingHours = "Mo-Su 00:00-23:59";

  return JSON.stringify(schema);
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inject JSON-LD Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchema() }}
        />
        {/* Consider adding preconnect hints for fonts or external resources if needed */}
        {/* e.g., <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
      </head>
      <body className={`antialiased min-h-screen flex flex-col bg-background`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
