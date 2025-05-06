import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// Corrected icons: Replaced Water with Droplet, added Bath, Snowflake, imported Heater
import { Phone, AlertTriangle, ShieldAlert, Flame, Info, Droplet, Bath, Snowflake, Heater } from 'lucide-react';
import { SiteConfig } from '@/config/site';


export const metadata: Metadata = {
  title: `24/7 Emergency Plumbing & Heating | NYC | ${SiteConfig.name}`,
  description: `Immediate 24/7 emergency plumbing and heating response in NYC (Bronx, Manhattan, Brooklyn, Queens, Staten Island). Call ${SiteConfig.phoneNumber} for burst pipes, gas leaks, no heat/hot water, sewer backups & more.`,
  keywords: [
    ...SiteConfig.keywords,
    "24/7 plumber NYC",
    "emergency plumber Bronx",
    "emergency heating repair Manhattan",
    "burst pipe repair Brooklyn",
    "no hot water Queens",
    "sewer backup Staten Island",
    "gas leak repair NYC",
    "urgent plumber NYC",
    "emergency boiler repair NYC",
  ],
   alternates: {
    canonical: '/emergency-services',
  },
};

// Updated scenarios to match instructions and use correct icons
const emergencyScenarios = [
  { name: 'Burst Pipes & Major Leaks', icon: Droplet, description: 'Sudden pipe bursts or significant water leaks requiring immediate attention to prevent damage.' },
  { name: 'Gas Leaks', icon: Flame, description: 'Suspected gas leaks are critical emergencies. Evacuate immediately and call us or 911 from a safe location.' },
  { name: 'No Heat in Cold Weather', icon: Snowflake, description: 'Loss of heating during winter can be dangerous. We provide rapid boiler and furnace repairs.' }, // Used Snowflake for No Heat
  { name: 'No Hot Water', icon: Bath, description: 'Sudden lack of hot water affecting daily needs. We diagnose and fix water heater issues quickly.' },
  { name: 'Sewer Line Backups', icon: AlertTriangle, description: 'Blocked or backed-up sewer lines causing unsanitary conditions and property damage.' },
  { name: 'Frozen Pipes', icon: Snowflake, description: 'Pipes freezing and potentially bursting during extreme cold. Act fast to prevent major issues.' }, // Added from services list
  { name: 'Broken Boilers', icon: Heater, description: 'Complete boiler failure needing urgent repair to restore heat and hot water.', id: 'broken-boilers' }, // Added based on instructions
];

// Updated safety tips
const safetyTips = [
  { title: 'Shut Off Main Water Valve', description: 'For major leaks, locate your main water shut-off valve (usually where the pipe enters your property) and turn it off clockwise.' },
  { title: 'Gas Leak Safety: Evacuate First!', description: 'If you smell gas, DO NOT use phones, light switches, or create sparks. Leave immediately, then call 911 and us from outside or a neighbor\'s home.' },
  { title: 'Contain Minor Leaks', description: 'Use buckets or towels to catch drips and minimize water damage while waiting for our arrival.' },
  { title: 'Note the Problem Area', description: 'Try to identify the location of the leak, noise, or smell to help us diagnose the issue faster upon arrival.' },
  { title: 'Electrical Safety Near Water', description: 'Avoid contact with water near electrical outlets or appliances. If safe, turn off power to the affected area at the breaker box.' },
];

export default function EmergencyServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
       {/* Header Section */}
       <section className="text-center mb-16">
         <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-destructive" />
         <h1 className="text-4xl md:text-5xl font-bold text-destructive mb-4">24/7 Emergency Plumbing & Heating</h1>
         <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
           Facing an urgent issue like a burst pipe, gas leak, or no heat? High Rise Mechanical provides immediate, reliable emergency service across all five boroughs of NYC, day or night.
         </p>
         {/* Main CTA - Use accent color for high visibility */}
         <Button asChild size="lg" className="cta-button-accent text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
           <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
             <Phone className="mr-2 h-6 w-6 animate-pulse" /> Call Now for Emergency Help: {SiteConfig.phoneNumber}
           </a>
         </Button>
         <p className="mt-2 text-sm text-muted-foreground">We respond rapidly to minimize damage and restore safety.</p>
       </section>

       {/* Common Emergencies Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Common Emergencies We Handle Immediately</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {emergencyScenarios.map((scenario) => (
            <Card key={scenario.name} className="text-center border-destructive/50 shadow-md hover:shadow-lg transition-shadow bg-card">
              <CardHeader>
                <scenario.icon className="w-10 h-10 mx-auto mb-3 text-destructive" />
                <CardTitle className="text-xl font-semibold text-secondary">{scenario.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{scenario.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

       {/* What to Do Before Calling Section */}
      <section className="mb-16 bg-muted p-8 rounded-lg border border-border">
        <h2 className="text-3xl font-semibold text-center mb-8 text-secondary">
          <ShieldAlert className="inline-block w-8 h-8 mr-2 text-primary" /> Safety Steps Before We Arrive
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyTips.map((tip) => (
            <div key={tip.title} className="flex items-start space-x-3">
              <Info className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-medium text-secondary">{tip.title}</h3>
                <p className="text-sm text-foreground/70">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-sm font-medium text-destructive">
           Your safety is the top priority. Follow these steps only if it is safe to do so.
        </p>
      </section>

       {/* Final Call to Action */}
      <section className="text-center border-t pt-12 mt-12 border-border">
         <h2 className="text-2xl font-semibold mb-4 text-secondary">Don't Delay - Get Professional Help Now!</h2>
         <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">Our expert technicians are on standby 24/7, ready to resolve your plumbing or heating emergency quickly and effectively.</p>
         <Button asChild size="lg" className="cta-button-accent text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
           <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
             <Phone className="mr-2 h-6 w-6 animate-pulse" /> Call {SiteConfig.phoneNumber} Now
           </a>
         </Button>
         <p className="mt-4 text-sm text-muted-foreground">Proudly serving The Bronx, Manhattan, Brooklyn, Queens, & Staten Island.</p>
       </section>

       {/* Optional: Brief case studies or testimonials specific to emergencies */}
       {/*
       <section className="mt-16">
         <h2 className="text-3xl font-semibold text-center mb-12">Emergency Success Stories</h2>
         {/* Add testimonials here *}
       </section>
       */}
    </div>
  );
}
