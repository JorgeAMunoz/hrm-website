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
  description: `Comprehensive plumbing & heating solutions in NYC by High Rise Mechanical. We specialize in boiler repair/install, radiant heat, leak detection, fire sprinklers, drain cleaning, water heaters, 24/7 emergency service, and more for residential & commercial clients across all 5 boroughs.`, // Refined description
  keywords: [
    ...SiteConfig.keywords,
    "boiler services NYC",
    "radiant heating NYC",
    "plumbing fixture installation",
    "leak detection NYC",
    "drain cleaning NYC",
    "water heater repair NYC",
    "fire sprinkler services NYC",
    "commercial plumbing NYC",
    "residential plumbing NYC",
    "heating system repair NYC",
    "plumbing maintenance NYC",
    "NYC plumber services", // Added broader service keyword
    "heating contractor NYC", // Added related keyword
  ],
  alternates: {
    canonical: '/services',
  },
};

// Updated service list to better match instructions, using appropriate icons
const services = [
  { name: 'Boiler Installation, Repair & Maintenance', icon: Heater, description: 'Expert installation, repair, and routine maintenance for all types of boiler systems to ensure efficiency and reliability.', id: 'boilers', url: '/services/boiler-repair' },
  { name: 'Radiant Floor Heating Systems', icon: Thermometer, description: 'Design, installation, and repair of comfortable and energy-efficient radiant floor heating systems for homes and businesses.', id: 'radiant-heating', url: '/services/radiant-heating' },
  { name: 'Domestic Hot Water Systems', icon: Bath, description: 'Installation and service for domestic hot water systems, ensuring consistent hot water supply when you need it.', id: 'hot-water', url: '/services/hot-water-systems' },
  { name: 'Plumbing Fixture Installation', icon: CheckSquare, description: 'Professional installation of sinks, toilets, tubs, showers, and other plumbing fixtures with precision and care.', id: 'fixtures', url: '/services/fixture-installation' },
  { name: 'Pipe Repairs & Leak Detection', icon: Search, description: 'Advanced leak detection techniques and durable pipe repairs to prevent water damage and conserve water.', id: 'pipe-repair', url: '/services/leak-detection' },
  { name: 'Drain Clogs & Sewer Line Clearing', icon: Wrench, description: 'Fast and effective clearing of clogged drains and sewer lines using modern equipment to restore proper flow.', id: 'drain-clearing', url: '/services/drain-cleaning' },
  { name: 'Water Heater Installation & Repair', icon: Droplets, description: 'Installation, repair, and maintenance services for tankless and traditional water heaters of all major brands.', id: 'water-heater', url: '/services/water-heater-repair' },
  { name: 'Expansion Tank Installation & Maintenance', icon: Heater, description: 'Proper installation and maintenance of expansion tanks to protect your heating and hot water systems.', id: 'expansion-tank', url: '/services/expansion-tank' }, // Reused Heater icon
  { name: 'Heat Exchangers', icon: Thermometer, description: 'Service and installation of heat exchangers for efficient heat transfer in various HVAC and plumbing systems.', id: 'heat-exchanger', url: '/services/heat-exchanger' }, // Reused Thermometer icon
  { name: 'Fire Sprinkler Systems', icon: Droplet, description: 'Design, installation, testing, and maintenance of code-compliant fire sprinkler systems for safety and protection.', id: 'fire-sprinklers', url: '/services/fire-sprinklers' },
  { name: 'High-Rise Building Plumbing Systems', icon: Building, description: 'Specialized expertise in managing the complex plumbing systems found in high-rise residential and commercial buildings.', id: 'high-rise', url: '/services/high-rise-plumbing' },
  { name: 'Commercial Plumbing Systems', icon: Users, description: 'Comprehensive plumbing services tailored to the unique needs of commercial properties, including offices, retail, and industrial facilities.', id: 'commercial', url: '/services/commercial-plumbing' },
  { name: 'Residential Plumbing Systems', icon: Home, description: 'Reliable plumbing solutions for homeowners, covering everything from minor repairs to full system installations.', id: 'residential', url: '/services/residential-plumbing' },
  { name: 'Frozen Pipe Thawing & Repair', icon: Snowflake, description: 'Safe and effective thawing of frozen pipes and repair of any resulting damage during cold snaps.', id: 'frozen-pipes', url: '/services/frozen-pipes' },
  { name: 'Emergency Plumbing Services', icon: AlertTriangle, description: 'Available 24/7 for urgent plumbing issues like burst pipes, major leaks, and sewer backups across NYC.', id: 'emergency', link: '/emergency-services' }, // Keep link to emergency page
];


export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-4 text-secondary text-outline">Our Plumbing & Heating Services</h1>
      <p className="text-lg text-center text-foreground/80 max-w-3xl mx-auto mb-12">
        High Rise Mechanical offers a full range of plumbing and heating services for residential and commercial clients throughout New York City. We are committed to quality workmanship, code compliance, and customer satisfaction across all five boroughs.
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
               {/* Conditional CTA: Link to emergency page or specific service page or contact page */}
               <Button
                 asChild
                 variant="outline"
                 size="sm"
                 className="mt-auto border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
               >
                 {service.link ? (
                   <Link href={service.link}>Emergency Info</Link> // Specific text for emergency
                 ) : service.url ? (
                    // Placeholder for dynamic service pages - link to contact for now
                    // <Link href={service.url}>Learn More</Link>
                    <Link href={`/contact?service=${encodeURIComponent(service.name)}`}>Get a Quote</Link>
                 ) : (
                   <Link href={`/contact?service=${encodeURIComponent(service.name)}`}>Get a Quote</Link>
                 )}
               </Button>
             </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center bg-muted p-8 rounded-lg border border-border/50">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Experiencing an Emergency?</h2>
        <p className="text-foreground/80 mb-6">Don't wait! We offer 24/7 emergency plumbing and heating services.</p>
        <Button asChild size="lg" className="cta-button-accent">
          <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
             <Phone className="mr-2 h-5 w-5" /> Call Emergency Service Now
          </a>
        </Button>
         <p className="mt-4 text-sm"><Link href="/emergency-services" className="text-primary hover:underline">More Emergency Info</Link></p>
      </div>
    </div>
  );
}
