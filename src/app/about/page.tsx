import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Award, Users, ShieldCheck, Building, CheckSquare } from 'lucide-react';
import { SiteConfig } from '@/config/site';


export const metadata: Metadata = {
  title: `About Us | Licensed NYC Plumbers & Heating | ${SiteConfig.name}`,
  description: `Learn about High Rise Mechanical, a trusted, licensed, and insured NYC plumbing and heating company serving all 5 boroughs (Bronx, Manhattan, Brooklyn, Queens, Staten Island). Discover our experience, values, certifications, and commitment to quality service.`,
  keywords: [...SiteConfig.keywords, "about High Rise Mechanical", "NYC plumbing company", "licensed plumbers NYC", "heating contractors NYC", "NYC building plumbing", "certified plumbers NYC", "insured plumber Bronx"],
   alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary">About High Rise Mechanical</h1>

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
            src="https://picsum.photos/600/400?grayscale" // Placeholder image (consider grayscale for professionalism if no real image)
            alt="High Rise Mechanical team working on a plumbing installation in NYC"
            data-ai-hint="team construction" // Hint for AI image generation
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover aspect-[3/2]"
          />
           <p className="text-sm text-center mt-2 text-muted-foreground">Our licensed technicians at work.</p>
        </div>
      </section>

      {/* Values & Expertise Section */}
      <section className="mb-16 bg-muted p-8 rounded-lg border border-border">
        <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Why Choose High Rise Mechanical?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-4 bg-background rounded shadow">
            <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Experience & Expertise</h3>
            <p className="text-foreground/70 text-sm">Decades of combined experience solving complex plumbing and heating challenges specific to NYC buildings.</p>
          </div>
           <div className="text-center p-4 bg-background rounded shadow">
            <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Licensed & Insured</h3>
            <p className="text-foreground/70 text-sm">Fully licensed (NYC Master Plumber License #XXXX) and insured for your complete peace of mind and protection.</p> {/* TODO: Add actual license # */}
          </div>
           <div className="text-center p-4 bg-background rounded shadow">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Certified Technicians</h3>
            <p className="text-foreground/70 text-sm">Our team holds relevant industry certifications (e.g., OSHA, Backflow Prevention) and undergoes continuous training.</p> {/* TODO: List specific certs */}
          </div>
           <div className="text-center p-4 bg-background rounded shadow">
            <Building className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Code Compliance</h3>
            <p className="text-foreground/70 text-sm">We strictly adhere to all NYC Department of Buildings (DOB) codes and regulations, ensuring safe and legal installations.</p>
          </div>
        </div>
      </section>

        {/* Certifications/Licenses Section (Placeholder) */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-secondary">Our Credentials</h2>
         <div className="max-w-3xl mx-auto bg-background p-6 rounded-lg shadow border border-border">
           <ul className="list-disc list-inside space-y-2 text-foreground/80">
             <li><strong>NYC Master Plumber License:</strong> [Enter License Number Here]</li>
             <li><strong>Fully Insured:</strong> General Liability & Workers' Compensation</li>
             <li><strong>Certifications:</strong> [List key certifications like OSHA 30, Backflow Prevention Certification, etc.]</li>
             <li>Member of [Industry Association, if applicable]</li>
           </ul>
           <p className="text-sm mt-4 text-muted-foreground">We prioritize safety, compliance, and ongoing professional development.</p>
         </div>
      </section>


      {/* Service Area Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-secondary">
           <MapPin className="inline-block w-8 h-8 mr-2 text-primary" /> Proudly Serving All Five Boroughs
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
          Our service area covers the entirety of New York City, delivering prompt and reliable plumbing and heating solutions wherever you are located.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {SiteConfig.boroughs.map((borough) => (
             <span key={borough} className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm shadow-sm">
               {borough}
             </span>
          ))}
        </div>
      </section>

       {/* Optional: Team Photos Section (Placeholder Structure) */}

       <section className="mb-16">
         <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Meet Our Dedicated Team</h2>
         <p className="text-center text-foreground/80 mb-8 max-w-xl mx-auto">While we value our team's privacy, here's a glimpse of the professionals ready to serve you. (Photos coming soon!)</p>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {/* Add team member cards here - Placeholder example */}
           <div className="text-center">
              <div className="w-[150px] h-[150px] mx-auto mb-4 bg-muted rounded-full flex items-center justify-center shadow-md">
                 <Users className="w-12 h-12 text-muted-foreground" />
              </div>
              {/* <Image src="https://picsum.photos/200/200?random=1" alt="Team Member 1" width={150} height={150} className="rounded-full mx-auto mb-4 shadow-md object-cover"/> */}
              <h4 className="font-semibold text-secondary">Experienced Technician</h4>
              <p className="text-sm text-muted-foreground">Master Plumber</p>
           </div>
            <div className="text-center">
              <div className="w-[150px] h-[150px] mx-auto mb-4 bg-muted rounded-full flex items-center justify-center shadow-md">
                 <Users className="w-12 h-12 text-muted-foreground" />
              </div>
               {/* <Image src="https://picsum.photos/200/200?random=2" alt="Team Member 2" width={150} height={150} className="rounded-full mx-auto mb-4 shadow-md object-cover"/> */}
               <h4 className="font-semibold text-secondary">Heating Specialist</h4>
               <p className="text-sm text-muted-foreground">HVAC Certified</p>
           </div>
            <div className="text-center">
              <div className="w-[150px] h-[150px] mx-auto mb-4 bg-muted rounded-full flex items-center justify-center shadow-md">
                  <Users className="w-12 h-12 text-muted-foreground" />
              </div>
               {/* <Image src="https://picsum.photos/200/200?random=3" alt="Team Member 3" width={150} height={150} className="rounded-full mx-auto mb-4 shadow-md object-cover"/> */}
               <h4 className="font-semibold text-secondary">Commercial Project Lead</h4>
               <p className="text-sm text-muted-foreground">Sprinkler Systems Expert</p>
           </div>
            <div className="text-center">
              <div className="w-[150px] h-[150px] mx-auto mb-4 bg-muted rounded-full flex items-center justify-center shadow-md">
                  <Users className="w-12 h-12 text-muted-foreground" />
              </div>
               {/* <Image src="https://picsum.photos/200/200?random=4" alt="Team Member 4" width={150} height={150} className="rounded-full mx-auto mb-4 shadow-md object-cover"/> */}
               <h4 className="font-semibold text-secondary">Support Staff</h4>
               <p className="text-sm text-muted-foreground">Office Manager</p>
           </div>
           {/* Repeat for other team members or roles */}
         </div>
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
        <section className="text-center mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Ready to Discuss Your Project?</h2>
            <p className="text-lg text-foreground/80 mb-6">Contact us for reliable plumbing and heating services in NYC.</p>
            <Button asChild size="lg" className="cta-button">
                <Link href="/contact">Get Your Free Estimate Today</Link>
            </Button>
        </section>

    </div>
  );
}
