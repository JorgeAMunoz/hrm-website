import type { MetadataRoute } from 'next';
import { SiteConfig } from '@/config/site';

// Define service details for sitemap generation (matches services page)
// This should be kept in sync with src/app/services/page.tsx
// For truly dynamic service pages, this would be fetched from a data source.
const serviceDetails = [
  { id: 'boilers', name: 'Boiler Installation, Repair & Maintenance NYC' },
  { id: 'radiant-heating', name: 'Radiant Floor Heating Systems NYC' },
  { id: 'hot-water-systems', name: 'Domestic Hot Water Systems NYC' },
  { id: 'fixture-installation', name: 'Plumbing Fixture Installation NYC' },
  { id: 'leak-detection', name: 'Pipe Repairs & Leak Detection NYC' },
  { id: 'drain-cleaning', name: 'Drain Clogs & Sewer Line Clearing NYC' },
  { id: 'water-heater-repair', name: 'Water Heater Installation & Repair NYC' },
  { id: 'expansion-tank', name: 'Expansion Tank Installation & Maintenance NYC' },
  { id: 'heat-exchanger', name: 'Heat Exchanger Services NYC' },
  { id: 'fire-sprinklers', name: 'Fire Sprinkler Systems NYC' },
  { id: 'high-rise-plumbing', name: 'High-Rise Building Plumbing Systems NYC' },
  { id: 'commercial-plumbing', name: 'Commercial Plumbing Systems NYC' },
  { id: 'residential-plumbing', name: 'Residential Plumbing Systems NYC' },
  { id: 'frozen-pipes', name: 'Frozen Pipe Thawing & Repair NYC' },
  // Note: Emergency plumbing links to a main page, not individual dynamic pages.
];


// Function to generate sitemap entries
export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = SiteConfig.mainNav
    .filter(item => item.href !== '/contact') // Exclude contact page
    .map((item) => ({
    url: `${SiteConfig.url}${item.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: item.href === '/' ? 'weekly' : (item.href === '/emergency-services' || item.href === '/services' ? 'monthly' : 'yearly') as 'monthly' | 'yearly' | 'daily' | 'weekly' | 'always' | 'never',
    priority: item.href === '/' ? 1.0 : (item.href === '/emergency-services' || item.href === '/services' ? 0.9 : (item.href === '/schedule' ? 0.8 : 0.7)),
  }));

  // Generate URLs for individual service sections on the services page (using hash links)
  // Or, if these were actual separate pages, their paths would be listed here.
  // For now, we link to the main services page as individual service pages are not implemented.
  // If actual service pages like /services/boiler-repair were created, they would be added like this:
  // const servicePages = serviceDetails.map(service => ({
  //   url: `${SiteConfig.url}/services/${service.id}`, // Example: /services/boilers
  //   lastModified: new Date().toISOString(),
  //   changeFrequency: 'monthly' as 'monthly',
  //   priority: 0.8,
  // }));
  // Since we don't have individual service pages, we'll just ensure the main /services page is well-prioritized.

  // For Local Business Schema, you need to ensure that the information on your pages (especially homepage, services, about)
  // aligns with what you declare in the schema.
  // Specifically for the schema, you need:
  // 1. @type: "Plumber" (or a more specific type if applicable)
  // 2. name: Your business name (SiteConfig.name)
  // 3. address: Your full business address (SiteConfig.addressParts)
  // 4. telephone: Your business phone number (SiteConfig.phoneNumber)
  // 5. url: Your website URL (SiteConfig.url)
  // 6. image: URL to your logo (e.g., `${SiteConfig.url}/logo.png`)
  // 7. geo: Latitude and longitude of your business.
  // 8. areaServed: List of cities/boroughs you serve (SiteConfig.boroughs).
  // 9. openingHoursSpecification: Your business hours, including 24/7 for emergency if applicable (SiteConfig.openingHoursSpecification).
  // 10. priceRange: Optional, like "$$"
  // 11. hasOfferCatalog: A list of your key services.
  // This information is already being generated in src/app/layout.tsx via generateSchema().
  // The sitemap itself focuses on discoverability of URLs.

  return [
    ...mainPages,
    // ...servicePages, // Uncomment and adapt if individual service pages are created
  ];
}
