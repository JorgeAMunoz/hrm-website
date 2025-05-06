'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SiteConfig } from '@/config/site';


export function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
      {SiteConfig.mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            pathname === item.href ? 'text-primary' : 'text-foreground/70'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
