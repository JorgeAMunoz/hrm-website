import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { SiteConfig } from '@/config/site';
import Image from 'next/image'; // Import Image

// Function to generate JSON-LD Schema for LocalBusiness (Plumber)
const generateSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber", // Specific type for plumbing business
    "name": SiteConfig.name,
    "description": SiteConfig.description,
    "url": SiteConfig.url,
    "telephone": SiteConfig.phoneNumber,
    // Ensure logo.png exists in /public or update path/alt text
    "image": `${SiteConfig.url}/logo.png`,
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
       // Basic example using Wikipedia:
       "sameAs": `https://en.wikipedia.org/wiki/${borough.replace(" ", "_").replace("The_","")}`
     })),
    // Use openingHoursSpecification directly for 24/7
    "openingHoursSpecification": SiteConfig.openingHoursSpecification,
    "priceRange": "$$", // Optional: Indicate general price range (e.g., $, $$, $$$)
    "hasOfferCatalog": { // Define services offered for SEO
       "@type": "OfferCatalog",
       "name": "Plumbing and Heating Services NYC",
       "itemListElement": [
         // Add key services mentioned in keywords/site
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Plumbing NYC" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boiler Repair & Installation NYC" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heating System Repair NYC" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire Sprinkler Systems NYC" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drain Cleaning NYC" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Leak Detection NYC" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Services NYC" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Plumbing NYC" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Plumbing NYC" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Radiant Heating NYC" } },
       ]
     }
  };

  return JSON.stringify(schema);
};


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
        alt: `${SiteConfig.name} - NYC Plumbing and Heating Services`, // More descriptive alt text
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
