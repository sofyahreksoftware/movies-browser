import { fetchFromApi } from "../../common/fetchFromApi";

export const getGenres = () => {
  return fetchFromApi({ path: "/genre/movie/list" });
};
