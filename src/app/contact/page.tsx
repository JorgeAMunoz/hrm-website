import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, AlertTriangle, CalendarClock } from 'lucide-react'; // Removed Clock
import { SiteConfig } from '@/config/site';
// Removed GoogleMapEmbed import

export const metadata: Metadata = {
  title: `Contact High Rise Mechanical | NYC Plumber & Heating | ${SiteConfig.name}`,
  description: `Contact ${SiteConfig.name} for expert plumbing & heating services in NYC (Bronx, Manhattan, Brooklyn, Queens, Staten Island). Call ${SiteConfig.phoneNumber} for quotes, schedule service online, or get 24/7 emergency support. Office: ${SiteConfig.address}.`,
  keywords: [...SiteConfig.keywords, "contact High Rise Mechanical", "plumbing quote NYC", "heating estimate NYC", "Bronx plumber contact", "NYC plumber phone number", "Manhattan plumber contact", "Brooklyn heating contact", "schedule plumbing NYC", "NYC plumbing contact form"],
   alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  // Removed Google Form URL

  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary text-outline">Contact High Rise Mechanical</h1>

      {/* Removed the grid layout, contact info section now takes full width */}
      <div className="max-w-2xl mx-auto"> {/* Center the content */}
          <h2 className="text-2xl font-semibold mb-6 text-secondary text-center">Contact Information</h2>
          <p className="text-center text-foreground/80 mb-8">
             For estimates, scheduling non-emergency services, general inquiries, or emergency support, please use the contact details below.
          </p>

           {/* Emergency Contact Box - Placed prominently */}
           <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-md mb-8 shadow-md">
             <div className="flex items-start space-x-3">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1 animate-pulse" />
                <div>
                  <h3 className="font-semibold text-destructive text-lg">Emergency? Call Immediately!</h3>
                  <p className="text-sm text-foreground/80 mb-1">For urgent issues like burst pipes, gas leaks, or no heat/hot water, call us 24/7:</p>
                   <Button asChild variant="link" size="lg" className="p-0 h-auto mt-1 text-destructive font-bold text-xl hover:underline">
                      <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
                         <Phone className="mr-2 h-5 w-5 inline" /> {SiteConfig.phoneNumber}
                      </a>
                   </Button>
                   <p className="text-xs mt-2">
                     <Link href="/emergency-services" className="text-destructive hover:underline">Learn More About Emergency Services</Link>
                   </p>
                </div>
             </div>
           </div>

          <div className="space-y-6 mb-8">
             {/* Scheduling Link */}
             <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-md border border-border/50">
                <CalendarClock className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                 <div>
                   <h3 className="font-medium text-secondary">Schedule Service Online</h3>
                   <p className="text-foreground/80 text-sm mb-1">For non-emergency appointments, you can book online:</p>
                   <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                      <Link href="/schedule">Book Your Appointment</Link>
                   </Button>
                 </div>
             </div>

             <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-md border border-border/50">
               <Phone className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
               <div>
                 <h3 className="font-medium text-secondary">Main Phone</h3>
                 <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`} className="text-foreground/80 hover:text-primary">{SiteConfig.phoneNumber}</a>
                 <p className="text-sm text-muted-foreground">Call for estimates, scheduling, and general inquiries.</p>
               </div>
             </div>

             {SiteConfig.email && (
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-md border border-border/50">
                  <Mail className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary">Email</h3>
                    <a href={`mailto:${SiteConfig.email}`} className="text-foreground/80 hover:text-primary break-all">{SiteConfig.email}</a>
                     <p className="text-sm text-muted-foreground">For non-urgent inquiries.</p>
                  </div>
                </div>
             )}

             <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-md border border-border/50">
               <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
               <div>
                 <h3 className="font-medium text-secondary">Office Address</h3>
                 <p className="text-foreground/80">{SiteConfig.address}</p>
                 <a
                   href={SiteConfig.googleMapsUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm text-primary hover:underline mt-1 inline-block"
                 >
                   Get Directions via Google Maps
                 </a>
               </div>
             </div>

              {/* Removed Business Hours Section */}

          </div>

          {/* Removed Map Section */}

           <div className="mt-8 bg-muted/50 p-4 rounded-md border border-border/50">
             <h3 className="text-lg font-semibold mb-2 text-secondary">We Serve All NYC Boroughs:</h3>
             <p className="text-foreground/80 text-sm">{SiteConfig.boroughs.join(', ')}</p>
              <p className="text-xs mt-2 text-muted-foreground">Providing expert plumbing and heating solutions across the city.</p>
           </div>
      </div>
    </div>
  );
}
