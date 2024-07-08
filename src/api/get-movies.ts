import { api } from '@/lib/axios';
import { Movie } from './get-movie';

export interface GetMoviesQuery {
  pageIndex?: number | null;
  title?: string | null;
  pageSize?: number;
}

type GetMoviesResponse = Movie[];

export async function getMovies({
  pageIndex = 0,
  title,
  pageSize = 10,
}: GetMoviesQuery) {
  const response = await api.get<GetMoviesResponse>('/movies');

  let filteredMovies = response.data;

  if (title) {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.Title.toLowerCase().includes(title.toLowerCase())
    );
  }

  const page = pageIndex || 0;
  const startIndex = page * pageSize;
  const endIndex = (startIndex + 1) * pageSize;

  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

  return {
    movies: paginatedMovies,
    totalCount: filteredMovies.length,
    perPage: pageSize,
  };
}
