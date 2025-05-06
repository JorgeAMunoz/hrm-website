import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, AlertTriangle, ShieldAlert, Flame, Info, Droplet, Bath, Snowflake, Heater } from 'lucide-react';
import { SiteConfig } from '@/config/site';


export const metadata: Metadata = {
  title: `24/7 Emergency Plumbing & Heating NYC | Call Now | ${SiteConfig.name}`,
  description: `Immediate 24/7 emergency plumbing & heating response across NYC (Bronx, Manhattan, Brooklyn, Queens, Staten Island) from ${SiteConfig.name}. Call ${SiteConfig.phoneNumber} now for burst pipes, gas leaks, no heat/hot water, sewer backups & more. Fast, reliable NYC emergency plumbers.`,
  keywords: SiteConfig.keywords.filter(kw => kw.toLowerCase().includes('emergency') || kw.toLowerCase().includes('24/7') || kw.toLowerCase().includes('nyc plumber') || kw.toLowerCase().includes('boiler repair') || kw.toLowerCase().includes('heating repair')), // Focused emergency keywords
   alternates: {
    canonical: '/emergency-services',
  },
};

const emergencyScenarios = [
  { name: 'Burst Pipes & Major Leaks NYC', icon: Droplet, description: 'Sudden pipe bursts or significant water leaks in NYC requiring immediate attention to prevent damage.' },
  { name: 'Gas Leaks NYC (Evacuate First!)', icon: Flame, description: 'Suspected gas leaks are critical emergencies. Evacuate immediately and call 911 or us from a safe location in NYC.' },
  { name: 'No Heat in Cold Weather NYC', icon: Snowflake, description: 'Loss of heating during winter in NYC can be dangerous. We provide rapid boiler and furnace repairs.' },
  { name: 'No Hot Water NYC', icon: Bath, description: 'Sudden lack of hot water in NYC affecting daily needs. We diagnose and fix water heater issues quickly.' },
  { name: 'Sewer Line Backups NYC', icon: AlertTriangle, description: 'Blocked or backed-up sewer lines in NYC causing unsanitary conditions and property damage.' },
  { name: 'Frozen Pipes NYC', icon: Snowflake, description: 'Pipes freezing and potentially bursting during extreme cold in NYC. Act fast to prevent major issues.' },
  { name: 'Broken Boilers NYC', icon: Heater, description: 'Complete boiler failure in NYC needing urgent repair to restore heat and hot water.', id: 'broken-boilers' },
];

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
         <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-destructive animate-pulse" />
         <h1 className="text-4xl md:text-5xl font-bold text-destructive mb-4 text-outline-destructive">24/7 Emergency Plumbing & Heating NYC</h1>
         <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
           Facing an urgent issue like a burst pipe, gas leak, or no heat in The Bronx, Manhattan, Brooklyn, Queens, or Staten Island? High Rise Mechanical provides immediate, reliable emergency service across NYC, day or night.
         </p>
         {/* Main CTA - Use accent color for high visibility */}
         <Button asChild size="lg" className="cta-button-accent text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
           <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
             <Phone className="mr-2 h-6 w-6 animate-pulse" /> Call Now for NYC Emergency Help: {SiteConfig.phoneNumber}
           </a>
         </Button>
         <p className="mt-2 text-sm text-muted-foreground">We respond rapidly to minimize damage and restore safety across all NYC boroughs.</p>
       </section>

       {/* Common Emergencies Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">Common NYC Emergencies We Handle Immediately</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {emergencyScenarios.map((scenario) => (
             <Card key={scenario.name} className="text-center border-destructive/50 shadow-md hover:shadow-lg transition-shadow bg-card flex flex-col">
               <CardHeader className="pb-4">
                 <div className="mx-auto bg-destructive/10 rounded-full p-3 w-fit mb-3">
                   <scenario.icon className="w-8 h-8 text-destructive" />
                 </div>
                 <CardTitle className="text-xl font-semibold text-secondary">{scenario.name}</CardTitle>
               </CardHeader>
               <CardContent className="pt-0 flex-grow">
                 <p className="text-foreground/70">{scenario.description}</p>
               </CardContent>
             </Card>
          ))}
        </div>
      </section>

       {/* What to Do Before Calling Section */}
      <section className="mb-16 bg-muted p-8 rounded-lg border border-border/50">
        <h2 className="text-3xl font-semibold text-center mb-8 text-secondary">
          <ShieldAlert className="inline-block w-8 h-8 mr-2 text-primary" /> Safety Steps Before We Arrive
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyTips.map((tip) => (
            <div key={tip.title} className="flex items-start space-x-3 p-4 bg-background rounded shadow-sm">
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
      <section className="text-center border-t pt-12 mt-12 border-border/50">
         <h2 className="text-2xl font-semibold mb-4 text-secondary">Don't Delay - Get Professional Plumbing & Heating Help in NYC Now!</h2>
         <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">Our expert NYC technicians are on standby 24/7, ready to resolve your plumbing or heating emergency quickly and effectively.</p>
         <Button asChild size="lg" className="cta-button-accent text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow">
           <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
             <Phone className="mr-2 h-6 w-6 animate-pulse" /> Call {SiteConfig.phoneNumber} Now
           </a>
         </Button>
         <p className="mt-4 text-sm text-muted-foreground">Proudly serving The Bronx, Manhattan, Brooklyn, Queens, & Staten Island.</p>
       </section>
    </div>
  );
}
