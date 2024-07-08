import React, { Suspense } from 'react';
import { Link } from 'next-view-transitions';
import { Film as FilmIcon } from 'lucide-react';
import { MovieSearchInput } from './movie-search-input';

export const Header = () => {
  return (
    <header className="header backdrop-blur-lg fixed top-0 left-0 z-20 w-full transition-colors duration-300">
      <div className="container flex flex-col justify-between gap-4 px-4 py-4 mx-auto md:px-6 sm:items-center sm:flex-row">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}>
          <FilmIcon className="w-6 h-6" />
          <span>Movies</span>
        </Link>
        <div className="relative flex-1 max-w-md">
          <Suspense>
            <MovieSearchInput />
          </Suspense>
        </div>
      </div>
    </header>
  );
};
