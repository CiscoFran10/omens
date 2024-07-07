import { api } from '@/lib/axios';
import { Movie } from './get-movie';

type GetMoviesResponse = Movie[];

export async function getMovies() {
  const response = await api.get<GetMoviesResponse>('/movies');

  return response.data;
}
