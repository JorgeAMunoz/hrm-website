import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Award, Users, ShieldCheck, Building, CheckSquare, UserCheck } from 'lucide-react'; // Added UserCheck
import { SiteConfig } from '@/config/site';


export const metadata: Metadata = {
  title: `About Us | Licensed NYC Plumbers & Heating | ${SiteConfig.name}`,
  description: `Learn about ${SiteConfig.name}, your trusted, licensed, and insured NYC plumbing and heating company. We proudly serve all 5 boroughs (Bronx, Manhattan, Brooklyn, Queens, Staten Island) with experienced, certified technicians committed to quality & code compliance.`, // Refined description
  keywords: [...SiteConfig.keywords, "about High Rise Mechanical", "NYC plumbing company", "licensed plumbers NYC", "heating contractors NYC", "NYC building plumbing", "certified plumbers NYC", "insured plumber Bronx", "Bronx plumbing company"], // Added location keyword
   alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  // Placeholder values - Replace with actual data
  const licenseNumber = "[Enter NYC Master Plumber License # Here]";
  const certifications = [
    "OSHA 30 Certified",
    "Backflow Prevention Assembly Tester Certified",
    "Relevant FDNY Certificates of Fitness (e.g., S-12, S-13)",
    // Add more relevant certifications
  ];
  const industryAssociation = "[Industry Association Name, e.g., PHCC]"; // Optional

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
           <p className="text-sm text-center mt-2 text-muted-foreground">Our licensed technicians at work.</p>
        </div>
      </section>

      {/* Values & Expertise Section */}
      <section className="mb-16 bg-muted p-8 rounded-lg border border-border/50">
        <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Why Choose High Rise Mechanical?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="text-center p-4 bg-background rounded shadow border border-border/50">
            <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Experience & Expertise</h3>
            <p className="text-foreground/70 text-sm">Decades of combined experience solving complex plumbing and heating challenges specific to NYC buildings.</p>
          </div>
           <div className="text-center p-4 bg-background rounded shadow border border-border/50">
            <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Licensed & Insured</h3>
            <p className="text-foreground/70 text-sm">Fully licensed (NYC Master Plumber Lic # {licenseNumber}) and insured for your complete peace of mind.</p>
          </div>
           <div className="text-center p-4 bg-background rounded shadow border border-border/50">
            <UserCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Certified Technicians</h3>
            <p className="text-foreground/70 text-sm">Our team holds key industry certifications and undergoes continuous training for safety and skill.</p>
          </div>
           <div className="text-center p-4 bg-background rounded shadow border border-border/50">
            <Building className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Code Compliance</h3>
            <p className="text-foreground/70 text-sm">We strictly adhere to all NYC Department of Buildings (DOB) codes, ensuring safe, legal installations.</p>
          </div>
        </div>
      </section>

        {/* Certifications/Licenses Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-secondary">Our Credentials</h2>
         <div className="max-w-3xl mx-auto bg-card p-6 rounded-lg shadow border border-border/50">
           <ul className="list-none space-y-3 text-foreground/80">
             <li className="flex items-start">
                <ShieldCheck className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <div><strong>NYC Master Plumber License:</strong> {licenseNumber}</div>
             </li>
             <li className="flex items-start">
                <CheckSquare className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <div><strong>Fully Insured:</strong> Comprehensive General Liability & Workers' Compensation</div>
             </li>
             <li className="flex items-start">
                <Award className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <div>
                   <strong>Certifications:</strong>
                   <ul className="list-disc list-inside ml-4 mt-1 text-sm space-y-1">
                     {certifications.map((cert, index) => <li key={index}>{cert}</li>)}
                   </ul>
                </div>
             </li>
              {industryAssociation !== "[Industry Association Name, e.g., PHCC]" && ( // Only show if association is filled in
                <li className="flex items-start">
                  <Users className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                  <div><strong>Member of:</strong> {industryAssociation}</div>
                </li>
              )}
           </ul>
           <p className="text-sm mt-4 text-muted-foreground">We prioritize safety, compliance, and ongoing professional development.</p>
         </div>
      </section>


      {/* Service Area Section */}
       {/* Use the ServiceAreaMap component */}
       <ServiceAreaMap />

       {/* Optional: Team Photos Section */}
       <section className="mb-16">
         <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Meet Our Dedicated Team</h2>
         <p className="text-center text-foreground/80 mb-8 max-w-xl mx-auto">Our professional and certified technicians are the backbone of High Rise Mechanical, committed to providing expert service across NYC.</p>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
           {/* Replace placeholders with actual team member cards */}
           {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center bg-card p-4 rounded-lg shadow border border-border/50">
                 {/* Placeholder Image */}
                 <Image
                   src={`https://picsum.photos/200/200?random=${i}`} // Use color images
                   alt={`Team Member ${i}`}
                   data-ai-hint="professional portrait"
                   width={150}
                   height={150}
                   className="rounded-full mx-auto mb-4 shadow-md object-cover border-2 border-primary/20"
                 />
                 {/* Placeholder Text */}
                 <h4 className="font-semibold text-secondary">Technician Name</h4>
                 <p className="text-sm text-muted-foreground">Role/Specialty</p>
                 <p className="text-xs mt-1 text-primary">[Key Certification]</p>
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

// Define ServiceAreaMap Component within the same file or import if separate
function ServiceAreaMap() {
  return (
    <section className="mb-16 text-center bg-muted py-12 px-4 rounded-lg border border-border/50">
      <h2 className="text-3xl font-semibold mb-8 text-secondary">
         <MapPin className="inline-block w-8 h-8 mr-2 text-primary" /> Proudly Serving All Five Boroughs
      </h2>
       {/* Placeholder Image for Map - Replace with actual interactive map or static map image */}
       <div className="max-w-3xl mx-auto mb-8 bg-background p-2 rounded shadow-md border border-border/50">
         <Image
           src="https://picsum.photos/800/400/?blur=2" // Placeholder image of a map
           alt="Map of NYC showing service area for High Rise Mechanical"
           data-ai-hint="NYC map boroughs"
           width={800}
           height={400}
           className="rounded object-cover w-full"
         />
         {/* You can overlay text or icons on the map image if needed */}
       </div>
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
        Our licensed technicians provide prompt and reliable plumbing and heating solutions across the entirety of New York City.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {SiteConfig.boroughs.map((borough) => (
           <span key={borough} className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm shadow-sm border border-primary/20">
             {borough}
           </span>
        ))}
      </div>
    </section>
  );
}
