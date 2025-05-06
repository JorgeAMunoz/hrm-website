import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, AlertTriangle } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import { SiteConfig } from '@/config/site';
import GoogleMapEmbed from '@/components/google-map-embed';

export const metadata: Metadata = {
  title: `Contact Us | ${SiteConfig.name}`,
  description: `Get in touch with High Rise Mechanical for plumbing and heating services in NYC. Contact us for quotes, service requests, or emergency support via phone (${SiteConfig.phoneNumber}) or our online form. Located at ${SiteConfig.address}.`,
  keywords: [...SiteConfig.keywords, "contact High Rise Mechanical", "plumbing quote NYC", "heating estimate NYC", "Bronx plumber contact", "NYC plumber phone number"],
};

export default function ContactPage() {
  // Note: Google Maps Embed API requires an API key.
  // Use the search URL as a fallback or implement the embed component properly.
  const mapLocation = { lat: 40.866657, lng: -73.897000 }; // Approximate coordinates for Grand Concourse

  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Send Us a Message</h2>
          <p className="text-foreground/80 mb-8">
            Have a question or need a quote for a non-emergency service? Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>

        {/* Contact Info & Map Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Contact Information</h2>

          <div className="space-y-6 mb-8">
             <div className="flex items-start space-x-3">
               <Phone className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
               <div>
                 <h3 className="font-medium">Phone</h3>
                 <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`} className="text-foreground/80 hover:text-primary">{SiteConfig.phoneNumber}</a>
                 <p className="text-sm text-muted-foreground">Available 24/7 for Emergencies</p>
               </div>
             </div>

             {/* Add Email if available */}
             {/*
             <div className="flex items-start space-x-3">
               <Mail className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
               <div>
                 <h3 className="font-medium">Email</h3>
                 <a href={`mailto:${SiteConfig.email}`} className="text-foreground/80 hover:text-primary">{SiteConfig.email}</a>
               </div>
             </div>
             */}

             <div className="flex items-start space-x-3">
               <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
               <div>
                 <h3 className="font-medium">Office Address</h3>
                 <p className="text-foreground/80">{SiteConfig.address}</p>
                 {/* Optional: Link to Google Maps directions */}
                 <a
                   href={SiteConfig.googleMapsUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm text-primary hover:underline mt-1 inline-block"
                 >
                   Get Directions
                 </a>
               </div>
             </div>
          </div>

           {/* Emergency Contact Prompt */}
           <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-md mb-8">
             <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-destructive">Emergency? Call Immediately!</h3>
                  <p className="text-sm text-foreground/80">For urgent issues like burst pipes or gas leaks, please call us directly at <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`} className="font-bold underline">{SiteConfig.phoneNumber}</a>.</p>
                   <Button variant="link" size="sm" asChild className="p-0 h-auto mt-1 text-destructive">
                     <Link href="/emergency-services">Learn More About Emergency Services</Link>
                   </Button>
                </div>
             </div>
           </div>

          {/* Map Embed */}
          <h3 className="text-xl font-semibold mb-4 text-secondary">Our Location</h3>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md border">
              {/* Use the GoogleMapEmbed component */}
              <GoogleMapEmbed address={SiteConfig.address} />
              {/* Fallback or simple image if API key is not available */}
              {/* <Image src="https://picsum.photos/600/337" data-ai-hint="map location" alt="Map showing High Rise Mechanical location" width={600} height={337} className="w-full h-full object-cover" /> */}
          </div>

           {/* Service Area Reminder */}
           <div className="mt-8">
             <h3 className="text-xl font-semibold mb-2 text-secondary">We Serve All NYC Boroughs:</h3>
             <p className="text-foreground/80">{SiteConfig.boroughs.join(', ')}</p>
           </div>
        </div>
      </div>
    </div>
  );
}
