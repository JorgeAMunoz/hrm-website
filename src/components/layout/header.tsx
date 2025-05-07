'use client'; // Add 'use client' because we're using hooks

import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
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
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation'; // Import usePathname
import { useState, useEffect } from 'react'; // Import useState and useEffect


export function Header() {
  const pathname = usePathname(); // Get current pathname
  const [isClient, setIsClient] = useState(false); // Track client-side mount

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts
  }, []);


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
                         <SheetClose key={item.href} asChild>
                           <Link
                             href={item.href}
                             className={cn(
                               'text-lg font-medium transition-colors hover:text-primary py-1',
                               // Apply active class only on the client and when pathname matches
                               isClient && pathname === item.href ? 'text-primary' : 'text-secondary'
                             )}
                             aria-current={isClient && pathname === item.href ? 'page' : undefined} // Add aria-current for accessibility
                           >
                             {item.title}
                           </Link>
                        </SheetClose>
                     ))}
                      {/* Mobile Call Button */}
                      <SheetClose asChild>
                         <a
                            href={`tel:${SiteConfig.phoneNumber.replace(/\D/g, '')}`}
                            className={cn(
                                buttonVariants({ variant: 'default', size: 'default' }), // Apply button styles directly
                                "w-full cta-button mt-4" // Add custom styles
                            )}
                         >
                            <Phone className="mr-2 h-4 w-4" /> Call Now
                         </a>
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
