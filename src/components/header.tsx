import Link from 'next/link';
import React from 'react';
import { Film as FilmIcon, Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const Header = () => {
  return (
    <header className="bg-background backdrop-blur-sm sticky top-0 z-20 border-b">
      <div className="container px-4 md:px-6 py-4 flex flex-col gap-4 sm:items-center justify-between sm:flex-row">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <FilmIcon className="w-6 h-6" />
          <span>Movies</span>
        </Link>
        <div className="relative flex-1 max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Procurar filmes..."
            className="w-full rounded-lg bg-muted pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
    </header>
  );
};
