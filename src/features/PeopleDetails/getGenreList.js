import { fetchFromApi } from "../../common/fetchFromApi";

export const getGenreList = () => {
  return fetchFromApi({
    path: "/genre/movie/list",
  });
};