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
        url: `/og-image.png`, // Relative to metadataBase - Ensure this image exists in /public
        width: 1200,
        height: 630,
        alt: `${SiteConfig.name} logo and NYC skyline`, // More descriptive alt text
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
    icon: "/favicon.ico", // Relative to metadataBase - Ensure this file exists in /public
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
    "@type": "Plumber", // Specific type for plumbing business
    "name": SiteConfig.name,
    "description": SiteConfig.description,
    "url": SiteConfig.url,
    "telephone": SiteConfig.phoneNumber,
    "image": `${SiteConfig.url}/logo.png`, // Placeholder: Add logo.png to /public folder
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SiteConfig.addressParts.streetAddress,
      "addressLocality": SiteConfig.addressParts.addressLocality,
      "addressRegion": SiteConfig.addressParts.addressRegion,
      "postalCode": SiteConfig.addressParts.postalCode,
      "addressCountry": SiteConfig.addressParts.addressCountry
    },
    "geo": { // Approximate coordinates for the Bronx address
      "@type": "GeoCoordinates",
      // Replace with actual coordinates if available and precise location is desired
       "latitude": "40.866657", // Approximate for Grand Concourse
       "longitude": "-73.897000" // Approximate for Grand Concourse
    },
     "areaServed": SiteConfig.boroughs.map(borough => ({
       "@type": "City",
       "name": borough,
       // Link to authoritative source (e.g., Wikipedia or NYC.gov page for the borough)
       // Example using Wikipedia:
       "sameAs": `https://en.wikipedia.org/wiki/${borough.replace(" ", "_").replace("The_","")}` // Basic example
     })),
    "openingHours": "Mo-Su 00:00-23:59", // Explicitly state 24/7 availability
    "priceRange": "$$", // Optional: Indicate general price range (e.g., $, $$, $$$)
    "hasOfferCatalog": { // Define services offered
       "@type": "OfferCatalog",
       "name": "Plumbing and Heating Services",
       "itemListElement": [
         // Add key services here
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boiler Repair & Installation" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Plumbing Services" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire Sprinkler Systems" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain Cleaning" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heating System Repair" } },
         // Add more services as needed
       ]
     }
  };

  return JSON.stringify(schema);
};

// Placeholder for your Google Analytics Tracking ID
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your actual GA4 Measurement ID

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
          strategy="afterInteractive" // Load schema after main content
        />
        {/* Google Analytics */}
        {process.env.NODE_ENV === 'production' && GA_TRACKING_ID !== 'G-XXXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive" // Load GA after main content interactive
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `}
            </Script>
          </>
        )}
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
