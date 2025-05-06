import Link from 'next/link';
import { MapPin, Phone, Mail, CheckCircle, Instagram } from 'lucide-react'; // Added Instagram
import { SiteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const instagramUrl = "https://www.instagram.com/hrise777"; // Added Instagram URL

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 md:px-8 border-t border-border/20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Column 1: About & Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">{SiteConfig.name}</h3>
          <p className="text-sm text-secondary-foreground/80">
            Your trusted partner for plumbing and heating solutions across NYC. Available 24/7 for emergencies.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
               <Phone className="h-4 w-4 text-primary flex-shrink-0" />
               <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`} className="hover:text-primary">{SiteConfig.phoneNumber} (24/7 Emergency)</a>
            </div>
            {SiteConfig.email && (
               <div className="flex items-center space-x-2">
                 <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                 <a href={`mailto:${SiteConfig.email}`} className="hover:text-primary break-all">{SiteConfig.email}</a>
               </div>
             )}
            <div className="flex items-start space-x-2">
               <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
               <a
                  href={SiteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
               >
                 {SiteConfig.address}
               </a>
            </div>
          </div>
           {/* Instagram Link */}
           <div className="mt-4">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center">
                 Follow us on Instagram <Instagram className="h-4 w-4 ml-1" />
              </a>
           </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {SiteConfig.mainNav.map((item) => (
               <li key={item.href}>
                 <Link href={item.href} className="hover:text-primary text-secondary-foreground/80 transition-colors">
                   {item.title}
                 </Link>
               </li>
            ))}
            {/* Add links to policy pages if they exist */}
            {/*
             <li>
               <Link href="/privacy-policy" className="hover:text-primary text-secondary-foreground/80 transition-colors">Privacy Policy</Link>
             </li>
             <li>
               <Link href="/terms-of-service" className="hover:text-primary text-secondary-foreground/80 transition-colors">Terms of Service</Link>
             </li>
            */}
          </ul>
        </div>

        {/* Column 3: Service Area & Coverage */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Our Service Area</h3>
          <p className="text-sm text-secondary-foreground/80">
            We proudly serve residential and commercial clients throughout all five boroughs of New York City:
          </p>
          <div className="flex flex-wrap gap-2">
            {SiteConfig.boroughs.map((borough) => (
               <span key={borough} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                 {borough}
               </span>
            ))}
          </div>
           <p className="text-xs text-secondary-foreground/60 mt-2">Need reliable service in your area? Call us today!</p>
        </div>

      </div>

      <div className="container mx-auto mt-10 pt-8 border-t border-border/20 text-center text-xs text-secondary-foreground/60">
         &copy; {currentYear} {SiteConfig.name}. All Rights Reserved.
         {/* Optional: Link to website developer */}
         {/* <p className="mt-1">Website by Your Company</p> */}
      </div>
    </footer>
  );
}
