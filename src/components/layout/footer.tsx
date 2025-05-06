import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { SiteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{SiteConfig.name}</h3>
          <p className="text-sm mb-4 text-secondary-foreground/80">
            Your trusted partner for plumbing and heating solutions across NYC. Licensed, insured, and available 24/7 for emergencies.
          </p>
          <div className="flex items-center space-x-2 mb-2">
             <Phone className="h-4 w-4" />
             <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`} className="hover:text-primary">{SiteConfig.phoneNumber}</a>
          </div>
          {/* Add Email if available
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${SiteConfig.email}`} className="hover:text-primary">{SiteConfig.email}</a>
          </div>
          */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {SiteConfig.mainNav.map((item) => (
               <li key={item.href}>
                 <Link href={item.href} className="hover:text-primary text-secondary-foreground/80">
                   {item.title}
                 </Link>
               </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="hover:text-primary text-secondary-foreground/80">Privacy Policy</Link> {/* Add if needed */}
            </li>
             <li>
              <Link href="/terms-of-service" className="hover:text-primary text-secondary-foreground/80">Terms of Service</Link> {/* Add if needed */}
             </li>
          </ul>
        </div>

        {/* Address & Coverage */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Location & Service Area</h3>
           <div className="flex items-start space-x-2 mb-4">
             <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
             <p className="text-sm text-secondary-foreground/80">{SiteConfig.address}</p>
           </div>
          <h4 className="text-md font-semibold mb-2">Boroughs Served:</h4>
          <p className="text-sm text-secondary-foreground/80">
            The Bronx, Manhattan, Brooklyn, Queens, Staten Island
          </p>
          {/* Optional: Link to Google Maps */}
          {/*
          <a
             href="YOUR_GOOGLE_MAPS_LINK"
             target="_blank"
             rel="noopener noreferrer"
             className="text-sm text-primary hover:underline mt-2 inline-block"
           >
             View on Google Maps
           </a>
           */}
        </div>
      </div>

      <div className="container mx-auto mt-8 pt-8 border-t border-border/20 text-center text-sm text-secondary-foreground/70">
         &copy; {currentYear} {SiteConfig.name}. All Rights Reserved.
         {/* Optional: Link to website developer */}
         {/* <p>Website by [Your Name/Company]</p> */}
      </div>
    </footer>
  );
}
