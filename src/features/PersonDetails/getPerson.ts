import { fetchFromApi } from "../../common/api/fetchFromApi";
import { Person } from "../../common/bothPageTypes/moviePersonTypes";

export const getPerson = (personId: number): Promise<Person> => {
  return fetchFromApi({
    path: `/person/${personId}`,
  });
};
