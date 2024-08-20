import { fetchFromApi } from "../../common/api/fetchFromApi";

export const getGenreList = () => {
  return fetchFromApi({
    path: "/genre/movie/list",
  });
};