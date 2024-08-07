import { fetchFromApi } from "../../common/fetchFromApi";

export const getMovieList = (page) => {
  return fetchFromApi({
    path: "/movie/popular",
    parameters: { page: `${page}` },
  });
};
