import { api } from '@/lib/axios';
import { Movie } from './get-movie';

export interface GetMoviesQuery {
  pageIndex?: number | null;
  title?: string | null;
}
type GetMoviesResponse = Movie[];

export async function getMovies({ pageIndex, title }: GetMoviesQuery) {
  const response = await api.get<GetMoviesResponse>('/movies');

  if (title) {
    return response.data.filter((movie) => movie.Title.toLowerCase().includes(title));
  }

  return response.data;
}
