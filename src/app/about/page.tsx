import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Award, Users, ShieldCheck, Building } from 'lucide-react';
import { SiteConfig } from '@/config/site';


export const metadata: Metadata = {
  title: `About Us | ${SiteConfig.name}`,
  description: `Learn about High Rise Mechanical, a trusted NYC plumbing and heating company serving all 5 boroughs. Discover our experience, values, and commitment to quality service.`,
  keywords: [...SiteConfig.keywords, "about High Rise Mechanical", "NYC plumbing company", "licensed plumbers NYC", "heating contractors NYC", "NYC building plumbing"],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-12">About High Rise Mechanical</h1>

      {/* Company Overview Section */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">Our Story & Commitment</h2>
          <p className="text-lg text-foreground/80 mb-4">
            High Rise Mechanical was founded with a mission to provide reliable, high-quality plumbing and heating services to the residents and businesses of New York City. With years of experience navigating the unique challenges of NYC's infrastructure, we've built a reputation for excellence, integrity, and unwavering commitment to code compliance and customer satisfaction.
          </p>
          <p className="text-lg text-foreground/80 mb-4">
             We understand the importance of dependable plumbing and heating systems, especially in a demanding environment like NYC. Our team is dedicated to delivering efficient solutions, transparent communication, and lasting results for every job, big or small.
          </p>
           <Button asChild className="cta-button">
              <Link href="/contact">Request a Free Estimate</Link>
           </Button>
        </div>
        <div>
          {/* Replace with an actual image of the team or a relevant job site */}
          <Image
            src="https://picsum.photos/600/400" // Placeholder image
            alt="High Rise Mechanical Team or Job Site"
            data-ai-hint="team building"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover aspect-[3/2]"
          />
        </div>
      </section>

      {/* Values & Expertise Section */}
      <section className="mb-16 bg-muted p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Experience & Expertise</h3>
            <p className="text-foreground/70">Years of hands-on experience solving complex plumbing and heating issues across NYC.</p>
          </div>
           <div className="text-center">
            <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Licensed & Insured</h3>
            <p className="text-foreground/70">Fully licensed and insured for your peace of mind and protection.</p>
          </div>
           <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Certified Technicians</h3>
            <p className="text-foreground/70">Our team undergoes rigorous training and holds relevant industry certifications.</p>
          </div>
           <div className="text-center">
            <Building className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2 text-secondary">Code Compliance</h3>
            <p className="text-foreground/70">We strictly adhere to all NYC building codes and regulations.</p>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-secondary">
           <MapPin className="inline-block w-8 h-8 mr-2" /> Proudly Serving All Five Boroughs
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
          Our service area covers the entirety of New York City, ensuring prompt and reliable service wherever you are.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {SiteConfig.boroughs.map((borough) => (
             <span key={borough} className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm">
               {borough}
             </span>
          ))}
        </div>
      </section>

       {/* Optional: Team Photos Section */}
       {/*
       <section className="mb-16">
         <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Team</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {/* Add team member cards here *}
           <div className="text-center">
              <Image src="https://picsum.photos/200/200" alt="Team Member" width={200} height={200} className="rounded-full mx-auto mb-4 shadow-md"/>
              <h4 className="font-semibold">Team Member Name</h4>
              <p className="text-sm text-muted-foreground">Job Title</p>
           </div>
           {/* Repeat for other team members *}
         </div>
       </section>
       */}

       {/* Optional: Clients/Partners Section */}
       {/*
       <section>
          <h2 className="text-3xl font-semibold text-center mb-12">Trusted By NYC Businesses</h2>
          {/* Add logos or names of commercial clients *}
       </section>
       */}

    </div>
  );
}
