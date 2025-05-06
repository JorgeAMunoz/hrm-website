import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarCheck, Phone, AlertTriangle } from 'lucide-react';
import { SiteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Schedule Plumbing & Heating Service | NYC | ${SiteConfig.name}`,
  description: `Book your non-emergency plumbing or heating appointment online with ${SiteConfig.name}. Select your preferred date and time. Serving Bronx, Manhattan, Brooklyn, Queens & Staten Island. For emergencies, call ${SiteConfig.phoneNumber} 24/7.`,
  keywords: [...SiteConfig.keywords, "schedule plumbing NYC", "book plumber online", "heating appointment NYC", "schedule boiler service", "online plumbing booking", "NYC plumbing appointment", "heating service booking"],
   alternates: {
    canonical: '/schedule',
  },
};

export default function SchedulePage() {
  // Updated Google Form URL
  const googleScheduleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd0CjCs4xPpOv1BSjT4JvPGW3BbLDPko2Cx6pq_VYEDHaGOmA/viewform?embedded=true";

  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-6 text-secondary text-outline">Schedule Your Service</h1>
      <p className="text-lg text-center text-foreground/80 max-w-2xl mx-auto mb-12">
        Use the form below to request a non-emergency appointment for plumbing or heating services. Please provide your details, and we'll contact you to confirm your booking based on availability.
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

      {/* Scheduling Widget Section (Google Form Embed) */}
      <Card className="max-w-3xl mx-auto shadow-lg border border-border/50">
        <CardHeader>
           <CardTitle className="text-2xl font-semibold text-secondary flex items-center">
             <CalendarCheck className="w-6 h-6 mr-3 text-primary" />
             Request Your Appointment Online
           </CardTitle>
        </CardHeader>
        <CardContent>
           <p className="text-sm text-muted-foreground mb-6">
              Please provide your details using the form below. We will contact you to confirm the appointment details and availability. Submission does not guarantee the requested time.
           </p>
          {/* Google Form Embed */}
          {googleScheduleFormUrl.startsWith("YOUR_") || !googleScheduleFormUrl.startsWith("https://docs.google.com/forms") ? (
              <div className="bg-muted p-6 rounded-lg border border-dashed border-border text-center">
                 <p className="text-muted-foreground">
                    To display the scheduling form, please ensure a valid Google Form embed URL is set in `src/app/schedule/page.tsx`.
                 </p>
              </div>
          ) : (
              <iframe
                src={googleScheduleFormUrl}
                width="100%" // Use 100% width for responsiveness
                height="1200" // Adjusted height based on typical Google Form length, can be fine-tuned
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="High Rise Mechanical Scheduling Request Form"
                className="rounded-lg border border-border shadow-sm min-h-[600px] md:min-h-[800px]" // Added min-height
              >
                Loading…
              </iframe>
          )}
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
