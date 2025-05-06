import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';
import { NavigationMenu } from '@/components/layout/navigation-menu';
import { SiteConfig } from '@/config/site';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mr-4">
          {/* Replace with actual logo */}
           {/* <Image src="/logo.png" alt="High Rise Mechanical Logo" width={150} height={40} /> */}
           <span className="font-bold text-lg text-secondary">{SiteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center">
           <NavigationMenu />
        </div>

        {/* Contact Info & Mobile Menu Trigger */}
        <div className="flex items-center space-x-4">
           <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`} className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            <Phone className="mr-2 h-4 w-4" />
            {SiteConfig.phoneNumber}
           </a>

          {/* Mobile Navigation */}
          <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                   <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle Menu</span>
                   </Button>
                </SheetTrigger>
                <SheetContent side="right">
                   <nav className="flex flex-col space-y-4 mt-8">
                     {SiteConfig.mainNav.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-lg font-medium text-secondary hover:text-primary"
                        >
                          {item.title}
                        </Link>
                     ))}
                      <Button asChild className="w-full cta-button mt-4">
                         <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
                           <Phone className="mr-2 h-4 w-4" /> Call Now
                         </a>
                      </Button>
                   </nav>
                </SheetContent>
              </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
