import { fetchFromApi } from "../../common/api/fetchFromApi";

export const getPersonDetails = (personId) => {
  return fetchFromApi({
    path: `/person/${personId}`,
  });
};
