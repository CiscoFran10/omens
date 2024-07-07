import { api } from '@/lib/axios';

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface GetMovieDetailsParams {
  imdbID: string;
}

export async function getMovieDetails({ imdbID }: GetMovieDetailsParams) {
  const response = await api.get<Movie[]>('/movies');
  const movie = response.data.find((item) => item.imdbID === imdbID);

  return movie;
}
