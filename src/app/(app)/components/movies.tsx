'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { useQuery } from '@tanstack/react-query';
import { getMovies } from '@/api/get-movies';
import { useSearchParams } from 'next/navigation';
import { ClockIcon, StarIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { MoviesListSkeleton } from './movies-skeleton';

export const MoviesList = () => {
  const searchParams = useSearchParams();
  const movieTitle = searchParams.get('title');

  const { data: movies, isLoading: isLoadingMovies } = useQuery({
    queryKey: ['movies', movieTitle],
    queryFn: () => getMovies({ title: movieTitle }),
  });

  return (
    <section className="container px-4 py-8 md:px-6 md:py-12">
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-x-6 md:gap-y-8">
        {isLoadingMovies && !movies && <MoviesListSkeleton />}

        {movies &&
          movies.map((movie) => (
            <Link
              key={movie.imdbID}
              href={`/${movie.imdbID}`}
              className="group">
              <div className="aspect-[2/3] rounded-lg overflow-hidden">
                <Image
                  src={movie.Poster}
                  alt="Movie Poster"
                  width={300}
                  height={450}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-2 space-y-2">
                <h3 className="text-base font-medium leading-none transition-colors group-hover:text-primary line-clamp-1">
                  {movie.Title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <span className="hidden xs:inline">{movie.Year}</span>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4" />
                    <span>{movie.imdbRating}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{movie.Runtime}</span>
                  </div>
                </div>

                <div className="items-center hidden gap-2 xs:flex">
                  {movie.Genre.split(',')
                    .slice(0, 2)
                    .map((genre) => (
                      <Badge
                        key={genre}
                        variant="secondary"
                        className="text-white">
                        {genre}
                      </Badge>
                    ))}
                </div>
              </div>
            </Link>
          ))}
      </div>

      {movies && movies.length === 0 && (
        <p className="w-full text-lg text-center text-muted-foreground">
          Não encontramos nenhum resultado para &quot;{movieTitle}
          &quot;
        </p>
      )}
    </section>
  );
};