import { getMovieDetails } from '@/api/get-movie';
import { Badge } from '@/components/ui/badge';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface MoviePageProps {
  params: { movieId: string };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const imdbID = params.movieId;
  const movie = await getMovieDetails({ imdbID });

  if (!movie) return null;

  return (
    <main className="container flex flex-col min-h-screen px-4 md:px-6 py-28 md:py-40">
      <div className="grid grid-cols-1 gap-8 md:gap-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.5fr_1fr] md:gap-12">
          <div className="overflow-hidden rounded-lg ">
            <Image
              src={movie.Poster}
              alt="Movie Poster"
              width={300}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              {movie.Title}
            </h1>

            <div className="flex items-center gap-4">
              {movie.Genre.split(',').map((genre) => (
                <Badge key={genre} variant="outline">
                  {genre}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-2 text-yellow-500">
              <StarIcon className="w-5 h-5" />
              <StarIcon className="w-5 h-5" />
              <StarIcon className="w-5 h-5" />
              <StarIcon className="w-5 h-5" />
              <StarIcon className="w-5 h-5" />
            </div>

            <p className="text-lg md:text-xl">{movie.Plot}</p>

            <div>
              <h2 className="text-2xl font-bold">Details</h2>
              <div className="grid gap-4 mt-4">
                <div className="grid grid-cols-[120px_1fr] gap-2">
                  <div className="text-muted-foreground">Director:</div>
                  <div>{movie.Director}</div>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-2">
                  <div className="text-muted-foreground">Cast:</div>
                  <div>{movie.Actors}</div>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-2">
                  <div className="text-muted-foreground">Release Date:</div>
                  <div>{movie.Released}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <h2 className="text-2xl font-bold">Ratings</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-muted">
              <div className="flex items-center gap-1 text-4xl font-bold">
                {movie.imdbRating} <StarIcon className="w-5 h-5" />
              </div>
              <div className="text-muted-foreground">IMDB Rating</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-muted">
              <div className="text-4xl font-bold">{movie.imdbVotes}</div>
              <div className="text-muted-foreground">IMDB Votes</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-muted">
              <div className="text-4xl font-bold">{movie.Metascore}</div>
              <div className="text-muted-foreground">Metacritic Score</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
