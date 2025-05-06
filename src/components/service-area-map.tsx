
import { SiteConfig } from '@/config/site';
import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ServiceAreaMap() {
  return (
    <section className="mb-16">
      <Card className="border-border/50 shadow-md bg-muted/50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center text-secondary flex items-center justify-center">
             <MapPin className="w-6 h-6 mr-3 text-primary" /> We Serve All of New York City
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-foreground/80 mb-6">
            High Rise Mechanical proudly provides comprehensive plumbing and heating services across all five boroughs:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {SiteConfig.boroughs.map((borough) => (
              <span
                key={borough}
                className="bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full shadow-sm border border-primary/20 flex items-center gap-2"
              >
                 <MapPin className="w-4 h-4" />
                {borough}
              </span>
            ))}
          </div>
           <p className="text-center text-sm text-muted-foreground mt-6">
              Whether you're in The Bronx, Manhattan, Brooklyn, Queens, or Staten Island, our expert team is ready to assist you.
           </p>
        </CardContent>
      </Card>
    </section>
  );
}
