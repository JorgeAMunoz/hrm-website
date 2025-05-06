import type { MetadataRoute } from 'next';
import { SiteConfig } from '@/config/site';

// Function to generate sitemap entries
export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = SiteConfig.mainNav.map((item) => ({
    url: `${SiteConfig.url}${item.href}`,
    lastModified: new Date().toISOString(), // Use current date or fetch last modified date if possible
    changeFrequency: item.href === '/' ? 'weekly' : ('monthly' as 'monthly' | 'yearly' | 'daily' | 'weekly' | 'always' | 'never'), // Adjust frequency based on page importance
    priority: item.href === '/' ? 1.0 : (item.href === '/emergency-services' || item.href === '/services' ? 0.9 : (item.href === '/contact' ? 0.8 : 0.7)), // Adjust priority
  }));

  // Add other important pages not in mainNav if needed
  // For example, policy pages:
  // const policyPages = [
  //   { url: `${SiteConfig.url}/privacy-policy`, lastModified: new Date().toISOString(), changeFrequency: 'yearly', priority: 0.5 },
  //   { url: `${SiteConfig.url}/terms-of-service`, lastModified: new Date().toISOString(), changeFrequency: 'yearly', priority: 0.5 },
  // ];

  // If you have dynamic routes (e.g., individual service pages), generate them here
  // const servicePages = [
  //    { url: `${SiteConfig.url}/services/boiler-repair`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
  //    // ... other service URLs
  // ];

  return [
    ...mainPages,
    // ...policyPages,
    // ...servicePages,
  ];
}
