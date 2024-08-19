import { fetchFromApi } from "../../common/api/fetchFromApi";

export const getCredits = (movieId) => {
  return fetchFromApi({ path: `/movie/${movieId}/credits`});
};
