import { fetchFromApi } from "../../common/api/fetchFromApi";

export const getGenres = () => {
  return fetchFromApi({ path: "/genre/movie/list" });
};
