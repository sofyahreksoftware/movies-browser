import { fetchFromApi } from "../../common/fetchFromApi";

export const getCredits = (movieId) => {
  return fetchFromApi({ path: `/movie/${movieId}/credits`});
};
