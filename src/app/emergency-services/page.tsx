import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, AlertTriangle, ShieldAlert, Flame, Info, Droplet, Bath, Snowflake } from 'lucide-react';
import { SiteConfig } from '@/config/site';


export const metadata: Metadata = {
  title: `24/7 Emergency Plumbing & Heating Services | ${SiteConfig.name}`,
  description: `Immediate 24/7 emergency plumbing and heating response in NYC. Call ${SiteConfig.phoneNumber} for burst pipes, leaks, no heat, no hot water, gas leaks, and more. Serving all 5 boroughs.`,
  keywords: [
    ...SiteConfig.keywords,
    "24/7 plumber NYC",
    "emergency plumber Bronx",
    "emergency heating repair Manhattan",
    "burst pipe repair Brooklyn",
    "no hot water Queens",
    "sewer backup Staten Island",
    "gas leak repair NYC",
  ],
};

const emergencyScenarios = [
  { name: 'Burst Pipes & Major Leaks', icon: Droplet, description: 'Sudden pipe bursts or significant water leaks requiring immediate attention.' },
  { name: 'Gas Leaks', icon: Flame, description: 'Suspected gas leaks are critical emergencies. Evacuate and call us from a safe location.' },
  { name: 'No Heat in Cold Weather', icon: Flame, description: 'Loss of heating during winter can be dangerous. We provide rapid boiler and furnace repairs.' },
  { name: 'No Hot Water', icon: Bath, description: 'Sudden lack of hot water affecting daily needs. We diagnose and fix water heater issues quickly.' },
  { name: 'Sewer Line Backups', icon: AlertTriangle, description: 'Blocked or backed-up sewer lines causing unsanitary conditions and property damage.' },
  { name: 'Frozen Pipes', icon: Snowflake, description: 'Pipes freezing and potentially bursting during extreme cold.' },
];

const safetyTips = [
  { title: 'Shut Off Main Water Valve', description: 'Locate your main water shut-off valve (usually where the pipe enters your property) and turn it off clockwise to stop water flow during leaks.' },
  { title: 'Contain Water', description: 'Use buckets or towels to contain leaking water and minimize damage while waiting for help.' },
  { title: 'Gas Leak Safety', description: 'If you smell gas, DO NOT use phones, light switches, or create sparks. Evacuate immediately and call us or 911 from outside.' },
  { title: 'Electrical Safety', description: 'Avoid contact with water near electrical outlets or appliances. Shut off power at the breaker box if necessary and safe to do so.' },
];

export default function EmergencyServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
       {/* Header Section */}
       <section className="text-center mb-16">
         <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-destructive" />
         <h1 className="text-4xl md:text-5xl font-bold text-destructive mb-4">24/7 Emergency Plumbing & Heating Services</h1>
         <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
           Facing an urgent issue? High Rise Mechanical is ready to respond immediately, day or night, across all five boroughs of NYC.
         </p>
         <Button asChild size="lg" className="cta-button-accent text-lg px-8 py-4">
           <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
             <Phone className="mr-2 h-6 w-6" /> Call Now: {SiteConfig.phoneNumber}
           </a>
         </Button>
       </section>

       {/* Common Emergencies Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Common Emergency Scenarios We Handle</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {emergencyScenarios.map((scenario) => (
            <Card key={scenario.name} className="text-center border-destructive shadow-md">
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
      <section className="mb-16 bg-muted p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-8 text-secondary">
          <ShieldAlert className="inline-block w-8 h-8 mr-2" /> What To Do Before We Arrive
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
           Your safety is our priority. Follow these steps if applicable and safe.
        </p>
      </section>

       {/* Final Call to Action */}
      <section className="text-center">
         <h2 className="text-2xl font-semibold mb-4">Don't Delay - Get Professional Help Now!</h2>
         <p className="text-lg text-foreground/80 mb-6">Our expert technicians are on standby 24/7 to resolve your plumbing or heating emergency.</p>
         <Button asChild size="lg" className="cta-button-accent text-lg px-8 py-4">
           <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
             <Phone className="mr-2 h-6 w-6" /> Call {SiteConfig.phoneNumber}
           </a>
         </Button>
         <p className="mt-4 text-sm text-muted-foreground">Serving Bronx, Manhattan, Brooklyn, Queens, & Staten Island.</p>
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
