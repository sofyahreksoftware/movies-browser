import { fetchFromApi } from "../../common/api/fetchFromApi";

export const getMovie = (movieId) => {
  return fetchFromApi({
    path: `/movie/${movieId}`,
  });
};
