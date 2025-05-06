import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Wrench, Heater, Droplet, Zap, ShieldCheck, Star, MapPin, CircleCheckBig as CheckCircle } from 'lucide-react'; // Use CircleCheckBig alias
import { SiteConfig } from '@/config/site';
// Removed ContactForm import as contact page is gone

export const metadata: Metadata = {
  title: `NYC Plumbing & Heating Experts | 24/7 Emergency Service | ${SiteConfig.name}`,
  description: `High Rise Mechanical: Your trusted NYC plumbing & heating experts serving all 5 boroughs (${SiteConfig.boroughs.join(', ')}). We offer 24/7 emergency repairs, boiler service, leak detection, fire sprinklers & more. Call now for a free estimate!`,
  keywords: SiteConfig.keywords, // Use keywords from SiteConfig
  alternates: {
    canonical: '/',
  },
};


// Mock data for featured services and testimonials
const featuredServices = [
  { name: 'Boiler Repair & Installation', icon: Heater, description: 'Keeping NYC warm with reliable boiler services.', link: '/services/boiler-repair-installation' },
  { name: 'Fire Sprinkler Systems', icon: Droplet, description: 'Code-compliant fire sprinkler installation and maintenance.', link: '/services/fire-sprinkler-systems' },
  { name: 'Drain Clearing', icon: Wrench, description: 'Fast and effective solutions for clogged drains.', link: '/services/drain-clearing' },
  { name: 'Emergency Plumbing', icon: Zap, description: 'Available 24/7 for urgent plumbing needs across all boroughs.', link: '/emergency-services' },
];

const testimonials = [
  { name: 'John D.', location: 'Manhattan', quote: 'High Rise Mechanical saved us during a major leak. Fast, professional, and reasonably priced!' },
  { name: 'Maria G.', location: 'Bronx', quote: 'Our new boiler works perfectly. The installation team was courteous and efficient.' },
  { name: 'Sam P.', location: 'Brooklyn', quote: 'Fixed our radiant heating issue when others couldn\'t. Highly recommend!' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
       {/* Added curved bottom separator */}
      <section className="relative bg-gradient-to-r from-secondary to-primary text-primary-foreground py-20 px-4 md:px-8 lg:px-16 text-center section-separator-curved-bottom">
        <div className="container mx-auto relative z-10"> {/* Ensure content is above pseudo-element */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-outline">NYC Plumbing and Heating Experts</h1>
          <p className="text-xl md:text-2xl mb-8 text-white">Available 24/7 for Emergencies - Call {SiteConfig.phoneNumber}</p>
          <Button asChild size="lg" className="cta-button-accent hover:text-primary-foreground">
            <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
               <Phone className="mr-2 h-5 w-5" /> Request Emergency Service
            </a>
          </Button>
           <p className="mt-4 text-sm">
             <Link href="/emergency-services" className="underline text-white hover:text-white/80">
               Learn more about emergency services
             </Link>
           </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-secondary">Your Trusted Partner in Plumbing & Heating in NYC</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
            High Rise Mechanical is a plumbing and heating company proudly serving all five boroughs of New York City: The Bronx, Manhattan, Brooklyn, Queens, and Staten Island. We deliver high-quality residential and commercial solutions with a commitment to reliability and code compliance. Call us today for a free estimate.
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card border border-border/50">
              <MapPin className="w-10 h-10 mb-2 text-primary" />
              <p className="font-medium text-secondary text-sm text-center">Serving All 5 NYC Boroughs</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card border border-border/50">
              <Zap className="w-10 h-10 mb-2 text-primary" />
              <p className="font-medium text-secondary text-sm text-center">24/7 Emergency Availability</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card border border-border/50">
              <CheckCircle className="w-10 h-10 mb-2 text-primary" />
              <p className="font-medium text-secondary text-sm text-center">Free Estimates Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
       {/* Added curved top separator */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-muted/50 section-separator-curved-top">
        <div className="container mx-auto relative z-10"> {/* Ensure content is above pseudo-element */}
          <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Our Top Plumbing & Heating Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.name} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col bg-card border border-border/50">
                 <CardHeader className="pb-4">
                   <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-3">
                     <service.icon className="w-8 h-8 text-primary" />
                   </div>
                   <CardTitle className="text-xl font-semibold text-secondary">{service.name}</CardTitle>
                 </CardHeader>
                 <CardContent className="flex-grow flex flex-col justify-between pt-0">
                   <p className="text-foreground/70 mb-4 flex-grow">{service.description}</p>
                   <Link href={service.link} passHref legacyBehavior>
                      <Button variant="outline" size="sm" className="mt-auto border-primary text-primary hover:bg-primary/10 hover:text-primary">
                        Learn More
                      </Button>
                   </Link>
                 </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
             <Link href="/services" passHref legacyBehavior>
               <Button size="lg" className="cta-button hover:text-primary-foreground">
                 View All Services
               </Button>
             </Link>
           </div>
        </div>
      </section>

      {/* Emergency Service Callout */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-outline-destructive">Need Urgent Plumbing or Heating Help in NYC?</h2>
          <p className="text-xl mb-8">We offer 24/7 Emergency Services across all five boroughs. Call {SiteConfig.phoneNumber} Now!</p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-destructive hover:bg-gray-100 font-semibold">
             <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
              <Phone className="mr-2 h-5 w-5" /> Call for Emergency Service
             </a>
          </Button>
           <p className="mt-4 text-sm">
             <Link href="/emergency-services" className="underline text-white hover:text-white/80">
                More Emergency Info
             </Link>
           </p>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">What Our NYC Clients Say</h2>
          {/* Basic Testimonial Layout - A slider/carousel component would enhance this */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-card shadow-sm border border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Prompt Section */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-muted/50 section-separator-curved-top">
        <div className="container mx-auto max-w-2xl text-center relative z-10">
           <h2 className="text-3xl font-semibold mb-6 text-secondary">Get a Free Estimate or Schedule Plumbing Service in NYC</h2>
           <p className="text-lg text-foreground/80 mb-8">
             Contact High Rise Mechanical today for a free, no-obligation quote or schedule non-emergency service online. We proudly serve all 5 boroughs: {SiteConfig.boroughs.join(', ')}.
           </p>
            {/* Updated CTAs as contact page is removed */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button asChild size="lg" className="cta-button hover:text-primary-foreground">
                  <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
                    <Phone className="mr-2 h-5 w-5" />Call for an Estimate: {SiteConfig.phoneNumber}
                  </a>
               </Button>
               <Link href="/schedule" passHref legacyBehavior>
                 <Button size="lg" className="cta-button-secondary">
                   Schedule Service Online
                 </Button>
               </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
