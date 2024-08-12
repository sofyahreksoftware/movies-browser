import { fetchFromApi } from "../../common/api/fetchFromApi";

export const getMovieList = (page) => {
  return fetchFromApi({
    path: "/movie/popular",
    parameters: { page: `${page}` },
  });
};
