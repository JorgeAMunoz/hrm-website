'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'; // Import useState and useEffect
import { cn } from '@/lib/utils';
import { SiteConfig } from '@/config/site';

export function NavigationMenu() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false); // Add state to track client-side mount

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts on the client
  }, []);

  return (
    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
      {SiteConfig.mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            // Apply active class only on the client and when pathname matches
            isClient && pathname === item.href ? 'text-primary' : 'text-foreground/70'
          )}
          aria-current={isClient && pathname === item.href ? 'page' : undefined} // Add aria-current for accessibility
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
