import { fetchFromApi } from "../../common/fetchFromApi";

export const getPersonDetails = (personId) => {
  return fetchFromApi({
    path: `/person/${personId}`,
  });
};
