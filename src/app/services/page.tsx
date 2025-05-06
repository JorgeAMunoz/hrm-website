import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heater, Thermometer, Bath, Wrench, Search, Droplet, Users, Building, Home, Zap, CheckSquare, Droplets, AlertTriangle
} from 'lucide-react';
import { SiteConfig } from '@/config/site';


export const metadata: Metadata = {
  title: `Plumbing & Heating Services | ${SiteConfig.name}`,
  description: `Comprehensive plumbing and heating services in NYC, including boiler repair, radiant heat, leak detection, fire sprinklers, and 24/7 emergency service. Serving all 5 boroughs.`,
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
  ],
};

const services = [
  { name: 'Boiler Installation, Repair & Maintenance', icon: Heater, description: 'Expert installation, repair, and routine maintenance for all types of boiler systems to ensure efficiency and reliability.', id: 'boilers' },
  { name: 'Radiant Floor Heating Systems', icon: Thermometer, description: 'Design, installation, and repair of comfortable and energy-efficient radiant floor heating systems for homes and businesses.', id: 'radiant-heating' },
  { name: 'Domestic Hot Water Systems', icon: Bath, description: 'Installation and service for domestic hot water systems, ensuring consistent hot water supply when you need it.', id: 'hot-water' },
  { name: 'Plumbing Fixture Installation', icon: CheckSquare, description: 'Professional installation of sinks, toilets, tubs, showers, and other plumbing fixtures with precision and care.', id: 'fixtures' },
  { name: 'Pipe Repairs & Leak Detection', icon: Search, description: 'Advanced leak detection techniques and durable pipe repairs to prevent water damage and conserve water.', id: 'pipe-repair' },
  { name: 'Drain Clogs & Sewer Line Clearing', icon: Wrench, description: 'Fast and effective clearing of clogged drains and sewer lines using modern equipment to restore proper flow.', id: 'drain-clearing' },
  { name: 'Water Heater Installation & Repair', icon: Droplets, description: 'Installation, repair, and maintenance services for tankless and traditional water heaters of all major brands.', id: 'water-heater' },
  { name: 'Expansion Tank Installation & Maintenance', icon: Heater, description: 'Proper installation and maintenance of expansion tanks to protect your heating and hot water systems.', id: 'expansion-tank' },
  { name: 'Heat Exchangers', icon: Thermometer, description: 'Service and installation of heat exchangers for efficient heat transfer in various HVAC and plumbing systems.', id: 'heat-exchanger' },
  { name: 'Fire Sprinkler Systems', icon: Droplet, description: 'Design, installation, testing, and maintenance of code-compliant fire sprinkler systems for safety and protection.', id: 'fire-sprinklers' },
  { name: 'High-Rise Building Plumbing Systems', icon: Building, description: 'Specialized expertise in managing the complex plumbing systems found in high-rise residential and commercial buildings.', id: 'high-rise' },
  { name: 'Commercial Plumbing Systems', icon: Users, description: 'Comprehensive plumbing services tailored to the unique needs of commercial properties, including offices, retail, and industrial facilities.', id: 'commercial' },
  { name: 'Residential Plumbing Systems', icon: Home, description: 'Reliable plumbing solutions for homeowners, covering everything from minor repairs to full system installations.', id: 'residential' },
  { name: 'Emergency Plumbing Services', icon: AlertTriangle, description: 'Available 24/7 for urgent plumbing issues like burst pipes, major leaks, and sewer backups across NYC.', id: 'emergency' },
];


export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
      <p className="text-lg text-center text-foreground/80 max-w-3xl mx-auto mb-12">
        High Rise Mechanical offers a full range of plumbing and heating services for residential and commercial clients throughout New York City. We are committed to quality workmanship and customer satisfaction.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} id={service.id} className="flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center mb-3">
                <service.icon className="w-8 h-8 mr-3 text-secondary-accent" />
                <CardTitle className="text-xl font-semibold text-secondary">{service.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-foreground/70 mb-6">{service.description}</p>
              <Button asChild variant="outline" className="mt-auto border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Experiencing an Emergency?</h2>
        <p className="text-foreground/80 mb-6">Don't wait! We offer 24/7 emergency plumbing and heating services.</p>
        <Button asChild size="lg" className="cta-button-accent">
          <Link href="/emergency-services">Contact Emergency Services</Link>
        </Button>
      </div>
    </div>
  );
}
