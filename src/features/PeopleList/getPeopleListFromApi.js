import { fetchFromApi } from "../../common/fetchFromApi";

export const getPeopleList = (page) => {
  return fetchFromApi({
    path: "/person/popular",
    parameters: { page: `${page}` },
  });
};
