import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
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
  metadataBase: new URL(SiteConfig.url),
   openGraph: {
    type: "website",
    locale: "en_US",
    url: SiteConfig.url,
    title: SiteConfig.name,
    description: SiteConfig.description,
    siteName: SiteConfig.name,
    images: [
      {
        url: `${SiteConfig.url}/og-image.png`, // Assume an OG image exists at this path
        width: 1200,
        height: 630,
        alt: SiteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SiteConfig.name,
    description: SiteConfig.description,
    // images: [`${SiteConfig.url}/og-image.png`], // Use the same OG image
    // creator: "@yourtwitterhandle", // Add Twitter handle if available
  },
  icons: {
    icon: "/favicon.ico", // Assume favicon exists
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
   // Add LocalBusiness Schema.org markup
  applicationName: SiteConfig.name,
  // It's better to include JSON-LD schema directly in the specific relevant pages (like Contact or Home)
  // But for a general approach, you can add it here if applicable globally.
  // However, structured data is best placed on the page where the information is most relevant.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Consider adding preconnect hints for fonts or external resources if needed */}
      </head>
      <body className={`antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
