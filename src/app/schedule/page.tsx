import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarCheck, Phone, AlertTriangle } from 'lucide-react';
import { SiteConfig } from '@/config/site';
import SchedulingWidget from '@/components/scheduling-widget'; // Assuming a widget component

export const metadata: Metadata = {
  title: `Schedule Plumbing & Heating Service | NYC | ${SiteConfig.name}`,
  description: `Book your non-emergency plumbing or heating appointment online with ${SiteConfig.name}. Select your preferred date and time. Serving Bronx, Manhattan, Brooklyn, Queens & Staten Island. For emergencies, call ${SiteConfig.phoneNumber} 24/7.`,
  keywords: [...SiteConfig.keywords, "schedule plumbing NYC", "book plumber online", "heating appointment NYC", "schedule boiler service", "online plumbing booking"],
   alternates: {
    canonical: '/schedule',
  },
};

export default function SchedulePage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-6 text-secondary text-outline">Schedule Your Service</h1>
      <p className="text-lg text-center text-foreground/80 max-w-2xl mx-auto mb-12">
        Use the tool below to request a non-emergency appointment for plumbing or heating services. Select your desired date and time, and we'll confirm your booking.
      </p>

      {/* Emergency Callout */}
      <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-md mb-8 shadow-md max-w-3xl mx-auto">
         <div className="flex items-start space-x-3">
            <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1 animate-pulse" />
            <div>
              <h3 className="font-semibold text-destructive text-lg">Is this an Emergency?</h3>
              <p className="text-sm text-foreground/80 mb-2">This form is for non-urgent requests only. If you have a burst pipe, gas leak, no heat, or other emergency, please call us immediately 24/7:</p>
               <Button asChild variant="link" size="lg" className="p-0 h-auto text-destructive font-bold text-xl hover:underline">
                  <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
                     <Phone className="mr-2 h-5 w-5 inline" /> {SiteConfig.phoneNumber}
                  </a>
               </Button>
               <p className="text-xs mt-2">
                 <Link href="/emergency-services" className="text-destructive hover:underline">More Emergency Info</Link>
               </p>
            </div>
         </div>
       </div>

      {/* Scheduling Widget Section */}
      <Card className="max-w-3xl mx-auto shadow-lg border border-border/50">
        <CardHeader>
           <CardTitle className="text-2xl font-semibold text-secondary flex items-center">
             <CalendarCheck className="w-6 h-6 mr-3 text-primary" />
             Book Your Appointment Online
           </CardTitle>
        </CardHeader>
        <CardContent>
           <p className="text-sm text-muted-foreground mb-6">
              Please provide your details and preferred time slot. We will contact you to confirm the appointment details and availability. Submission does not guarantee the requested time.
           </p>
          {/* Placeholder for the scheduling widget */}
          {/* Replace this with your actual scheduling widget implementation or embed code */}
          <SchedulingWidget />
        </CardContent>
      </Card>

      {/* Confirmation & Contact Info */}
      <div className="text-center mt-12 text-sm text-muted-foreground">
        <p>After submitting your request, our team will reach out to confirm your appointment details.</p>
        <p className="mt-2">If you have immediate questions, feel free to <Link href="/contact" className="text-primary hover:underline">contact us</Link> or call <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`} className="text-primary hover:underline">{SiteConfig.phoneNumber}</a>.</p>
      </div>
    </div>
  );
}
