import { fetchFromApi } from "../../common/api/fetchFromApi";

export const getPersonMovieCredits = (personId) => {
  return fetchFromApi({
    path: `/person/${personId}/movie_credits`,
  });
};
