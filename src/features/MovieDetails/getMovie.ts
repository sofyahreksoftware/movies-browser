import { fetchFromApi } from "../../common/api/fetchFromApi";
import { Movie } from "../../common/bothPageTypes/moviePersonTypes";

export const getMovie = (movieId: number): Promise<Movie> => {
  return fetchFromApi({
    path: `/movie/${movieId}`,
  });
};
