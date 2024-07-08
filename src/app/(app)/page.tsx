import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ClockIcon, StarIcon } from 'lucide-react';
import { MoviesList } from './components/movies';
import { Suspense } from 'react';
import { MoviesListSkeleton } from './components/movies-skeleton';

const featuredMovie = {
  Title: 'Blade Runner 2049',
  Year: '2017',
  Plot: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
  Runtime: '164 min',
  Genre: 'Action, Drama, Mystery',
  imdbRating: '8.0',
};

export default function Home() {
  return (
    <main className="flex-1">
      <section
        style={{
          background: `url(https://i.redd.it/hhx0lmpcvbwy.jpg)  no-repeat center center / cover`,
        }}
        className="bg-cover bg-center sm:h-[500px] relative pt-36">
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

              <div className="flex items-center gap-1 text-white">
                <ClockIcon className="w-5 h-5" />
                <span>{featuredMovie.Runtime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<MoviesListSkeleton />}>
        <MoviesList />
      </Suspense>
    </main>
  );
}
