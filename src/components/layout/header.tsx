import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';
import { NavigationMenu } from '@/components/layout/navigation-menu';
import { SiteConfig } from '@/config/site';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // Import SheetClose
} from "@/components/ui/sheet"


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mr-4">
          {/* Placeholder Logo - Replace with actual Image component if logo file exists */}
          {/* Check if public/logo.png exists */}
           {/* <Image src="/logo.png" alt={`${SiteConfig.name} Logo`} width={150} height={40} className="h-8 w-auto" /> */}
           <span className="font-bold text-lg text-secondary hover:text-primary transition-colors">{SiteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center">
           <NavigationMenu />
        </div>

        {/* Contact Info & Mobile Menu Trigger */}
        <div className="flex items-center space-x-4">
           {/* Desktop Call Button */}
           <Button asChild size="sm" className="hidden sm:inline-flex cta-button">
               <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
                 <Phone className="mr-2 h-4 w-4" />
                 {SiteConfig.phoneNumber}
               </a>
           </Button>

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
                   <SheetHeader className="mb-6">
                     <SheetTitle className="text-left">{SiteConfig.name}</SheetTitle>
                      <SheetDescription className="text-left text-xs">
                         NYC Plumbing & Heating Experts
                      </SheetDescription>
                   </SheetHeader>
                   <nav className="flex flex-col space-y-3">
                     {SiteConfig.mainNav.map((item) => (
                         <SheetClose key={item.href} asChild> {/* Wrap Link with SheetClose */}
                           <Link
                             href={item.href}
                             className="text-lg font-medium text-secondary hover:text-primary transition-colors py-1"
                           >
                             {item.title}
                           </Link>
                        </SheetClose>
                     ))}
                      {/* Mobile Call Button */}
                      <SheetClose asChild>
                         <Button asChild className="w-full cta-button mt-4">
                            <a href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}>
                              <Phone className="mr-2 h-4 w-4" /> Call Now
                            </a>
                         </Button>
                      </SheetClose>
                   </nav>
                </SheetContent>
              </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
