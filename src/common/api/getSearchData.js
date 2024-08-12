import { fetchFromApi } from "../api/fetchFromApi";

export const getSearchData = (query, page, type) => {
  return fetchFromApi({
    path: `/search/${type}`,
    parameters: {
      query: `${query}`,
      include_adult: false,
      language: "en-US",
      page: `${page}`,
    },
  });
};
