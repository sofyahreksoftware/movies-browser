import { fetchFromApi } from "../../common/fetchFromApi";

export const getPersonMovieCredits = (personId) => {
  return fetchFromApi({
    path: `/person/${personId}/movie_credits`,
  });
};
