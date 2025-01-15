import { fetchFromApi } from "../api/fetchFromApi";

export const getGenres = () => {
  return fetchFromApi({ path: "/genre/movie/list" });
};
