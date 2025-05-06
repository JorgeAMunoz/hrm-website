
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Award, Users, Building, CheckSquare } from 'lucide-react';
import { SiteConfig } from '@/config/site';
import { ServiceAreaMap } from '@/components/service-area-map'; // Correct import path


export const metadata: Metadata = {
  title: `About Us | NYC Plumbers & Heating | ${SiteConfig.name}`,
  description: `Learn about ${SiteConfig.name}, your trusted NYC plumbing and heating company. We proudly serve all 5 boroughs (Bronx, Manhattan, Brooklyn, Queens, Staten Island) with experienced technicians committed to quality & code compliance.`, // Refined description, removed licensed/insured
  keywords: [...SiteConfig.keywords, "about High Rise Mechanical", "NYC plumbing company", "heating contractors NYC", "NYC building plumbing", "Bronx plumbing company"], // Removed location keyword
   alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {

  // Placeholder values - Removed licensing/certification details
  const teamMembers = [
    { name: 'Technician 1', role: 'Senior Plumber', specialty: 'Boiler Systems', imageId: 1 },
    { name: 'Technician 2', role: 'Heating Specialist', specialty: 'Radiant Heat', imageId: 2 },
    { name: 'Technician 3', role: 'Drain Expert', specialty: 'Sewer Lines', imageId: 3 },
    { name: 'Technician 4', role: 'Commercial Plumber', specialty: 'High-Rise Systems', imageId: 4 },
  ];


  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary text-outline">About High Rise Mechanical</h1>

      {/* Company Overview Section */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">Our Story & Commitment to NYC</h2>
          <p className="text-lg text-foreground/80 mb-4">
            Founded in the heart of the Bronx, High Rise Mechanical was built on a mission to provide reliable, high-quality plumbing and heating services tailored to the unique demands of New York City. With years of hands-on experience navigating complex building infrastructures across all five boroughs, we've established a reputation for excellence, integrity, and strict adherence to NYC building codes.
          </p>
          <p className="text-lg text-foreground/80 mb-4">
             We understand that dependable plumbing and heating systems are essential for the comfort and safety of NYC residents and businesses. Our dedicated team focuses on delivering efficient, long-lasting solutions, transparent communication, and unparalleled customer satisfaction on every project, whether it's a minor repair or a major installation.
          </p>
           <Button asChild className="cta-button">
              <Link href="/contact">Request a Free Estimate</Link>
           </Button>
        </div>
        <div>
          {/* Placeholder image - Replace with an actual team or job site photo */}
          <Image
            src="https://picsum.photos/600/400" // Use color images
            alt="High Rise Mechanical team working on a plumbing installation in NYC"
            data-ai-hint="plumbing team working" // Hint for AI image generation
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover aspect-[3/2] border border-border/50"
            priority // Load this image early if it's above the fold
          />
           <p className="text-sm text-center mt-2 text-muted-foreground">Our experienced technicians at work.</p>
        </div>
      </section>

      {/* Values & Expertise Section - Removed Licensing/Insurance/Certification */}
      <section className="mb-16 bg-muted p-8 rounded-lg border border-border/50">
        <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Why Choose High Rise Mechanical?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid */}
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
            <h3 className="text-xl font-semibold mb-2 text-secondary">Dedicated Team</h3>
            <p className="text-foreground/70 text-sm">Our professional technicians are committed to providing expert service and customer satisfaction.</p>
          </div>
        </div>
      </section>

       {/* Use the ServiceAreaMap component */}
       <ServiceAreaMap />

       {/* Optional: Team Photos Section */}
       <section className="mb-16">
         <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Meet Our Dedicated Team</h2>
         <p className="text-center text-foreground/80 mb-8 max-w-xl mx-auto">Our professional technicians are the backbone of High Rise Mechanical, committed to providing expert service across NYC.</p>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
           {/* Replace placeholders with actual team member cards */}
           {teamMembers.map((member) => (
              <div key={member.imageId} className="text-center bg-card p-4 rounded-lg shadow border border-border/50">
                 {/* Placeholder Image */}
                 <Image
                   src={`https://picsum.photos/200/200?random=${member.imageId}`} // Use color images
                   alt={`${member.name} - ${member.role}`}
                   data-ai-hint="professional portrait"
                   width={150}
                   height={150}
                   className="rounded-full mx-auto mb-4 shadow-md object-cover border-2 border-primary/20"
                 />
                 {/* Placeholder Text */}
                 <h4 className="font-semibold text-secondary">{member.name}</h4>
                 <p className="text-sm text-muted-foreground">{member.role}</p>
                 <p className="text-xs mt-1 text-primary">{member.specialty}</p>
              </div>
           ))}
         </div>
         <p className="text-center text-sm mt-8 text-muted-foreground">(Actual team photos coming soon!)</p>
       </section>

       {/* Optional: Clients/Partners Section (Placeholder) */}
       {/*
       <section>
          <h2 className="text-3xl font-semibold text-center mb-12">Trusted By NYC Buildings & Businesses</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-75">
             {/* Add logos or names of prominent commercial clients or building management companies *}
             <span>Client Logo 1</span>
             <span>Major Property Management Co.</span>
             <span>Well-Known NYC Building</span>
          </div>
       </section>
       */}

       {/* Final CTA */}
        <section className="text-center mt-16 pt-12 border-t border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Ready to Discuss Your Project?</h2>
            <p className="text-lg text-foreground/80 mb-6">Contact us for reliable, code-compliant plumbing and heating services in NYC.</p>
            <Button asChild size="lg" className="cta-button">
                <Link href="/contact">Get Your Free Estimate Today</Link>
            </Button>
        </section>

    </div>
  );
}
