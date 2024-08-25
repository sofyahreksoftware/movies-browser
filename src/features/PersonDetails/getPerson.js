import { fetchFromApi } from "../../common/api/fetchFromApi";

export const getPerson = (personId) => {
  return fetchFromApi({
    path: `/person/${personId}`,
  });
};
