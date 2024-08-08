import { fetchFromApi } from "../../common/fetchFromApi";

export const getMovie = (movieId) => {
  return fetchFromApi({
    path: `/movie/${movieId}`,
  });
};
