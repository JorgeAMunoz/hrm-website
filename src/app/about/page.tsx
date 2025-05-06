
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Award, Building, Users, CheckSquare } from 'lucide-react'; // Removed MapPin as it's in ServiceAreaMap
import { SiteConfig } from '@/config/site';
import { ServiceAreaMap } from '@/components/service-area-map'; // Import ServiceAreaMap


export const metadata: Metadata = {
  title: `About Us | NYC Plumbers & Heating | ${SiteConfig.name}`,
  description: `Learn about ${SiteConfig.name}, your trusted NYC plumbing and heating company. We proudly serve all 5 boroughs (Bronx, Manhattan, Brooklyn, Queens, Staten Island) with experienced technicians committed to quality & code compliance.`,
  keywords: [...SiteConfig.keywords, "about High Rise Mechanical", "NYC plumbing company", "heating contractors NYC", "NYC building plumbing", "Bronx plumbing company"],
   alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {

  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary text-outline">About High Rise Mechanical</h1>

      {/* Company Overview Section - Changed to single column */}
      <section className="mb-16 max-w-3xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center md:text-left">Our Story & Commitment to NYC</h2>
          <p className="text-lg text-foreground/80 mb-4">
            Founded in the heart of the Bronx, High Rise Mechanical was built on a mission to provide reliable, high-quality plumbing and heating services tailored to the unique demands of New York City. With years of hands-on experience navigating complex building infrastructures across all five boroughs, we've established a reputation for excellence, integrity, and strict adherence to NYC building codes.
          </p>
          <p className="text-lg text-foreground/80 mb-6">
             We understand that dependable plumbing and heating systems are essential for the comfort and safety of NYC residents and businesses. Our dedicated team focuses on delivering efficient, long-lasting solutions, transparent communication, and unparalleled customer satisfaction on every project, whether it's a minor repair or a major installation.
          </p>
           <div className="text-center md:text-left">
             <Button asChild className="cta-button">
                <Link href="/schedule">Request a Free Estimate</Link>
             </Button>
           </div>
        </div>
        {/* Removed the Image component and its container */}
      </section>

      {/* Values & Expertise Section */}
      <section className="mb-16 bg-muted p-8 rounded-lg border border-border/50">
        <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Why Choose High Rise Mechanical?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="text-center p-4 bg-background rounded shadow border border-border/50">
            <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Experience & Expertise</h3>
            <p className="text-foreground/70 text-sm">Decades of combined experience solving complex plumbing and heating challenges specific to NYC buildings.</p>
          </div>
           <div className="text-center p-4 bg-background rounded shadow border border-border/50">
            <Building className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Code Compliance</h3>
            <p className="text-foreground/70 text-sm">We strictly adhere to all NYC Department of Buildings (DOB) codes, ensuring safe, legal installations.</p>
          </div>
          <div className="text-center p-4 bg-background rounded shadow border border-border/50">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Customer Satisfaction</h3>
            <p className="text-foreground/70 text-sm">Our professional technicians are committed to providing expert service and ensuring customer satisfaction.</p>
          </div>
        </div>
      </section>

       <ServiceAreaMap />

       {/* Final CTA */}
        <section className="text-center mt-16 pt-12 border-t border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Ready to Discuss Your Project?</h2>
            <p className="text-lg text-foreground/80 mb-6">Contact us for reliable, code-compliant plumbing and heating services in NYC.</p>
            <Button asChild size="lg" className="cta-button">
                <Link href="/schedule">Get Your Free Estimate Today</Link>
            </Button>
        </section>

    </div>
  );
}
