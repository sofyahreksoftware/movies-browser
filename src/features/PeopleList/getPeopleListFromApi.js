import { fetchFromApi } from "../../common/api/fetchFromApi";

export const getPeopleList = (page) => {
  return fetchFromApi({
    path: "/person/popular",
    parameters: { page: `${page}` },
  });
};
