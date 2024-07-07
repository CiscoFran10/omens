'use-client';

import { getMovies } from '@/api/get-movies';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ClockIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

async function getMoviesList() {
  try {
    const movies = await getMovies();

    return movies;
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}

export default async function Home() {
  const movies = await getMoviesList();
  const featuredMovie = movies[0];

  return (
    <main className="flex-1">
      <section
        style={{
          background: `url(https://i.redd.it/hhx0lmpcvbwy.jpg)  no-repeat center center / cover`,
        }}
        className="bg-cover bg-center sm:h-[500px] relative pt-36"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background from-5% to-transparent to-40%" />
        <div className="container flex items-end h-full px-4 pb-20 md:px-6">
          <div className="max-w-xl space-y-4">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              {featuredMovie.Title}
            </h1>
            <p className="text-lg text-white md:text-xl">
              {featuredMovie.Plot}
            </p>
            <div className="flex items-center gap-4">
              {featuredMovie.Genre.split(',').map((genre) => (
                <Badge key={genre} variant="outline" className="text-white">
                  {genre}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-white">
                <StarIcon className="w-5 h-5" />
                <span>{featuredMovie.imdbRating}</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <CalendarIcon className="w-5 h-5" />
                <span>{featuredMovie.Year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-x-6 md:gap-y-8">
          {movies.map((movie) => (
            <Link
              key={movie.imdbID}
              href={`/${movie.imdbID}`}
              className="group"
            >
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
                        className="text-white"
                      >
                        {genre}
                      </Badge>
                    ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
