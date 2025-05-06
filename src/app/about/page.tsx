import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Award, Building, Users, CheckSquare, Phone, MapPin } from 'lucide-react'; // Added Phone import
import { SiteConfig } from '@/config/site';
import { ServiceAreaMap } from '@/components/service-area-map';


export const metadata: Metadata = {
  title: `About Us | NYC Plumbers & Heating Company | ${SiteConfig.name}`,
  description: `Learn about ${SiteConfig.name}, your trusted NYC plumbing and heating company. We proudly serve all 5 boroughs (Bronx, Manhattan, Brooklyn, Queens, Staten Island) with experienced technicians committed to quality & code compliance. Contact us for reliable NYC plumbing services.`,
  keywords: SiteConfig.keywords.filter(kw => kw.toLowerCase().includes('about') || kw.toLowerCase().includes('nyc plum') || kw.toLowerCase().includes('company') || kw.toLowerCase().includes('heating contractor')), // Focused about/company keywords
   alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {

  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary text-outline">About High Rise Mechanical - Your NYC Plumbing & Heating Experts</h1>

      {/* Company Overview Section - Changed to single column */}
      <section className="mb-16 max-w-3xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center md:text-left">Our Story & Commitment to New York City</h2>
          <p className="text-lg text-foreground/80 mb-4">
            Founded in the heart of the Bronx, High Rise Mechanical was built on a mission to provide reliable, high-quality plumbing and heating services tailored to the unique demands of New York City. With years of hands-on experience navigating complex building infrastructures across all five boroughs, we've established a reputation for excellence, integrity, and strict adherence to NYC building codes.
          </p>
          <p className="text-lg text-foreground/80 mb-6">
             We understand that dependable plumbing and heating systems are essential for the comfort and safety of NYC residents and businesses. Our dedicated team focuses on delivering efficient, long-lasting solutions, transparent communication, and unparalleled customer satisfaction on every project, whether it's a minor repair or a major installation. For expert plumbing and heating in NYC, High Rise Mechanical is the name you can trust.
          </p>
           <div className="text-center md:text-left">
             <Button asChild className="cta-button hover:text-primary-foreground">
                <Link href="/schedule">Request a Free Estimate in NYC</Link>
             </Button>
           </div>
        </div>
      </section>

      {/* Values & Expertise Section */}
      <section className="mb-16 bg-muted p-8 rounded-lg border border-border/50">
        <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Why Choose High Rise Mechanical for Your NYC Needs?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="text-center p-4 bg-background rounded shadow border border-border/50">
            <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">NYC Experience & Expertise</h3>
            <p className="text-foreground/70 text-sm">Decades of combined experience solving complex plumbing and heating challenges specific to NYC buildings.</p>
          </div>
           <div className="text-center p-4 bg-background rounded shadow border border-border/50">
            <Building className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">NYC Code Compliance</h3>
            <p className="text-foreground/70 text-sm">We strictly adhere to all NYC Department of Buildings (DOB) codes, ensuring safe, legal installations for your peace of mind.</p>
          </div>
          <div className="text-center p-4 bg-background rounded shadow border border-border/50">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Customer Satisfaction Guaranteed</h3>
            <p className="text-foreground/70 text-sm">Our professional NYC technicians are committed to providing expert service and ensuring your complete satisfaction.</p>
          </div>
        </div>
      </section>

       <ServiceAreaMap />

       {/* Final CTA */}
        <section className="text-center mt-16 pt-12 border-t border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Ready to Discuss Your NYC Plumbing or Heating Project?</h2>
            <p className="text-lg text-foreground/80 mb-6">Contact us for reliable, code-compliant plumbing and heating services across all NYC boroughs.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button asChild size="lg" className="cta-button hover:text-primary-foreground">
                  <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
                    <Phone className="mr-2 h-5 w-5" />Call for Free NYC Estimate: {SiteConfig.phoneNumber}
                  </a>
               </Button>
               <Button asChild size="lg" className="cta-button-secondary">
                  <Link href="/schedule">Schedule NYC Service Online</Link>
               </Button>
            </div>
        </section>

    </div>
  );
}
