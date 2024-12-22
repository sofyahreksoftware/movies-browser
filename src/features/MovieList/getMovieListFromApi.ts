import { fetchFromApi } from "../../common/api/fetchFromApi";
import { Movies } from "../../common/bothPageTypes/moviePersonTypes";

export const getMovieList = (page: number): Promise<Movies> => {
  return fetchFromApi({
    path: "/movie/popular",
    parameters: { page: `${page}` },
  });
};
