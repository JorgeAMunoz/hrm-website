import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heater, Thermometer, Bath, Wrench, Search, Droplet, Users, Building, Home, Zap, CheckSquare, Droplets, AlertTriangle, Snowflake, Phone
} from 'lucide-react';
import { SiteConfig } from '@/config/site';


export const metadata: Metadata = {
  title: `NYC Plumbing & Heating Services | Boiler, Sprinklers, Drains | ${SiteConfig.name}`,
  description: `Comprehensive plumbing & heating solutions in NYC by ${SiteConfig.name}. We specialize in boiler repair/install, radiant heat, leak detection, fire sprinklers, drain cleaning, water heaters, 24/7 emergency service, and more for residential & commercial clients across all 5 boroughs. Call for a free quote!`,
  keywords: SiteConfig.keywords, // Use keywords from SiteConfig
  alternates: {
    canonical: '/services',
  },
};

// Updated service list with unique IDs for linking and better SEO focus
const services = [
  { name: 'Boiler Installation, Repair & Maintenance NYC', icon: Heater, description: 'Expert installation, repair, and routine maintenance for all types of boiler systems to ensure efficiency and reliability in NYC.', id: 'boilers' },
  { name: 'Radiant Floor Heating Systems NYC', icon: Thermometer, description: 'Design, installation, and repair of comfortable and energy-efficient radiant floor heating systems for homes and businesses in NYC.', id: 'radiant-heating' },
  { name: 'Domestic Hot Water Systems NYC', icon: Bath, description: 'Installation and service for domestic hot water systems in NYC, ensuring consistent hot water supply when you need it.', id: 'hot-water-systems' },
  { name: 'Plumbing Fixture Installation NYC', icon: CheckSquare, description: 'Professional installation of sinks, toilets, tubs, showers, and other plumbing fixtures with precision and care in NYC.', id: 'fixture-installation' },
  { name: 'Pipe Repairs & Leak Detection NYC', icon: Search, description: 'Advanced leak detection techniques and durable pipe repairs to prevent water damage and conserve water in NYC.', id: 'leak-detection' },
  { name: 'Drain Clogs & Sewer Line Clearing NYC', icon: Wrench, description: 'Fast and effective clearing of clogged drains and sewer lines using modern equipment to restore proper flow in NYC.', id: 'drain-cleaning' },
  { name: 'Water Heater Installation & Repair NYC', icon: Droplets, description: 'Installation, repair, and maintenance services for tankless and traditional water heaters of all major brands in NYC.', id: 'water-heater-repair' },
  { name: 'Expansion Tank Installation & Maintenance NYC', icon: Heater, description: 'Proper installation and maintenance of expansion tanks to protect your heating and hot water systems in NYC.', id: 'expansion-tank' },
  { name: 'Heat Exchanger Services NYC', icon: Thermometer, description: 'Service and installation of heat exchangers for efficient heat transfer in various HVAC and plumbing systems in NYC.', id: 'heat-exchanger' },
  { name: 'Fire Sprinkler Systems NYC', icon: Droplet, description: 'Design, installation, testing, and maintenance of code-compliant fire sprinkler systems for safety and protection in NYC.', id: 'fire-sprinklers' },
  { name: 'High-Rise Building Plumbing Systems NYC', icon: Building, description: 'Specialized expertise in managing the complex plumbing systems found in high-rise residential and commercial buildings in NYC.', id: 'high-rise-plumbing' },
  { name: 'Commercial Plumbing Systems NYC', icon: Users, description: 'Comprehensive plumbing services tailored to the unique needs of commercial properties in NYC, including offices, retail, and industrial facilities.', id: 'commercial-plumbing' },
  { name: 'Residential Plumbing Systems NYC', icon: Home, description: 'Reliable plumbing solutions for homeowners in NYC, covering everything from minor repairs to full system installations.', id: 'residential-plumbing' },
  { name: 'Frozen Pipe Thawing & Repair NYC', icon: Snowflake, description: 'Safe and effective thawing of frozen pipes and repair of any resulting damage during cold snaps in NYC.', id: 'frozen-pipes' },
  { name: '24/7 Emergency Plumbing NYC', icon: AlertTriangle, description: 'Available 24/7 for urgent plumbing issues like burst pipes, major leaks, and sewer backups across NYC.', id: 'emergency-plumbing', isEmergency: true },
];


export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-4 text-secondary text-outline">Our NYC Plumbing & Heating Services</h1>
      <p className="text-lg text-center text-foreground/80 max-w-3xl mx-auto mb-12">
        High Rise Mechanical offers a full range of plumbing and heating services for residential and commercial clients throughout New York City. We are committed to quality workmanship, code compliance, and customer satisfaction across all five boroughs. Call {SiteConfig.phoneNumber} for a free estimate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} id={service.id} className="flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 bg-card border border-border/50">
             <CardHeader className="pb-4">
               <div className="flex items-center mb-3">
                 <div className="p-3 rounded-full bg-primary/10 mr-3">
                   <service.icon className="w-6 h-6 text-primary" />
                 </div>
                 <CardTitle className="text-xl font-semibold text-secondary leading-tight">{service.name}</CardTitle>
               </div>
             </CardHeader>
             <CardContent className="flex-grow flex flex-col justify-between pt-0">
               <p className="text-foreground/70 mb-6 flex-grow">{service.description}</p>
               <Button
                 asChild
                 variant="outline"
                 size="sm"
                 className="mt-auto border-primary text-primary hover:bg-primary/10 w-full sm:w-auto hover:text-primary" // Adjusted hover text color
               >
                 {service.isEmergency ? (
                   <Link href="/emergency-services">Emergency Info</Link>
                 ) : (
                   // Since contact page is removed, link to schedule or provide call to action
                   // For non-emergency, primary CTA is to call or schedule.
                   // Example: Link to schedule page, or make it a call link
                   // <Link href={`/schedule?service=${encodeURIComponent(service.name)}`}>Schedule Service</Link>
                   <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>Call for a Quote</a>
                 )}
               </Button>
             </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center bg-muted p-8 rounded-lg border border-border/50">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Experiencing a Plumbing or Heating Emergency in NYC?</h2>
        <p className="text-foreground/80 mb-6">Don't wait! We offer 24/7 emergency plumbing and heating services across all NYC boroughs.</p>
        <Button asChild size="lg" className="cta-button-accent">
          <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
             <Phone className="mr-2 h-5 w-5" /> Call Emergency Service Now: {SiteConfig.phoneNumber}
          </a>
        </Button>
         <p className="mt-4 text-sm"><Link href="/emergency-services" className="text-primary hover:underline">More Emergency Info</Link></p>
      </div>
    </div>
  );
}
