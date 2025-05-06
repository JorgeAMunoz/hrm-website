import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Wrench, Heater, Droplet, Zap, ShieldCheck, Star, MapPin, CheckCircle } from 'lucide-react';
import { SiteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `NYC Plumbing & Heating Experts | 24/7 Emergency Service | ${SiteConfig.name}`,
  description: `High Rise Mechanical: Your trusted NYC plumbing & heating experts serving all 5 boroughs. We offer 24/7 emergency repairs, boiler service, leak detection, fire sprinklers & more. Get a free estimate today!`, // Refined description
  keywords: [...SiteConfig.keywords, "home plumbing NYC", "NYC heating company", "reliable plumber NYC", "free plumbing estimate", "emergency plumber NYC 24/7"], // Added more specific keyword
  alternates: {
    canonical: '/', // Explicitly set canonical for the homepage
  },
};


// Mock data for featured services and testimonials
const featuredServices = [
  { name: 'Boiler Repair & Installation', icon: Heater, description: 'Keeping NYC warm with reliable boiler services.', link: '/services#boilers' },
  { name: 'Fire Sprinkler Systems', icon: Droplet, description: 'Code-compliant fire sprinkler installation and maintenance.', link: '/services#fire-sprinklers' },
  { name: 'Drain Clearing', icon: Wrench, description: 'Fast and effective solutions for clogged drains.', link: '/services#drain-clearing' },
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
          <p className="text-xl md:text-2xl mb-8 text-white">Available 24/7 for Emergencies</p>
          <Button asChild size="lg" className="cta-button-accent">
            <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
               <Phone className="mr-2 h-5 w-5" /> Request Emergency Service
            </a>
          </Button>
           <p className="mt-4 text-sm"><Link href="/emergency-services" className="underline hover:text-white/80">Learn more about emergency services</Link></p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-secondary">Your Trusted Partner in Plumbing & Heating</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
            High Rise Mechanical is a plumbing and heating company proudly serving all five boroughs of New York City: The Bronx, Manhattan, Brooklyn, Queens, and Staten Island. We deliver high-quality residential and commercial solutions with a commitment to reliability and code compliance.
          </p>

          {/* Quick Info Grid - Removed Licensed & Insured, adjusted grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card border border-border/50">
              <MapPin className="w-10 h-10 mb-2 text-primary" />
              <p className="font-medium text-secondary text-sm text-center">All 5 Boroughs Served</p>
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
          <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Our Top Services</h2>
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
                   <Button asChild variant="outline" size="sm" className="mt-auto border-primary text-primary hover:bg-primary/10">
                     <Link href={service.link}>Learn More</Link>
                   </Button>
                 </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
             <Button asChild size="lg" className="cta-button">
               <Link href="/services">View All Services</Link>
             </Button>
           </div>
        </div>
      </section>

      {/* Emergency Service Callout */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-outline-destructive">Need Help Urgently?</h2>
          <p className="text-xl mb-8">We offer 24/7 Emergency Plumbing and Heating Services across NYC.</p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-destructive hover:bg-gray-100 font-semibold">
             <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
              <Phone className="mr-2 h-5 w-5" /> Call for Emergency Service
             </a>
          </Button>
           <p className="mt-4 text-sm"><Link href="/emergency-services" className="underline hover:text-white/80">More Emergency Info</Link></p>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">What Our Clients Say</h2>
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
           {/* Add link to Google Reviews if available */}
           {SiteConfig.googleReviewsUrl && (
             <div className="text-center mt-12">
               <Button variant="link" asChild>
                 <a href={SiteConfig.googleReviewsUrl} target="_blank" rel="noopener noreferrer">Read More Reviews on Google</a>
               </Button>
             </div>
            )}
        </div>
      </section>

      {/* Contact Prompt Section */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-muted/50 section-separator-curved-top">
        <div className="container mx-auto max-w-2xl text-center relative z-10">
           <h2 className="text-3xl font-semibold mb-6 text-secondary">Get a Free Estimate</h2>
           <p className="text-lg text-foreground/80 mb-8">
             Contact us today for a free, no-obligation quote on your plumbing or heating project.
           </p>
           {/* Link to the Contact Page */}
           <Button asChild size="lg" className="cta-button">
             <Link href="/contact">Request Your Quote</Link>
           </Button>
        </div>
      </section>
    </div>
  );
}
