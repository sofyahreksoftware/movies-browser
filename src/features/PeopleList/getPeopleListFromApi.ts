import { fetchFromApi } from "../../common/api/fetchFromApi";
import { People } from "../../common/bothPageTypes/moviePersonTypes";

export const getPeopleList = (page: number): Promise<People> => {
  return fetchFromApi({
    path: "/person/popular",
    parameters: { page: `${page}` },
  });
};
