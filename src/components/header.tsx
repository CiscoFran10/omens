'use client';

import { Link } from 'next-view-transitions';
import React from 'react';
import { Film as FilmIcon, Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shouldShowBackground = scrollPosition > 20;

  return (
    <header
      className={cn(
        'backdrop-blur-sm fixed top-0 left-0  z-20 w-full transition-colors duration-300',
        shouldShowBackground ? 'bg-background/50 backdrop-blur-sm' : ''
      )}
    >
      <div className="container flex flex-col justify-between gap-4 px-4 py-4 mx-auto md:px-6 sm:items-center sm:flex-row">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <FilmIcon className="w-6 h-6" />
          <span>Movies</span>
        </Link>
        <div className="relative flex-1 max-w-md">
          <SearchIcon className="absolute w-5 h-5 -translate-y-1/2 left-3 top-1/2" />
          <Input
            type="search"
            placeholder="Procurar filmes..."
            className="w-full py-2 pl-10 pr-4 text-sm placeholder-red-600 rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
    </header>
  );
};
