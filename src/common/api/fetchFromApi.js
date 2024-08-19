import { buildQueryString } from "./buildQueryString";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "5808b0503fd4aaf8a5636df1649fe0dc";

export const fetchFromApi = async ({ path, parameters = {} }) => {
  const defaultParameters = { api_key: API_KEY };
  const allParameters = { ...defaultParameters, ...(parameters || "") };

  const url = `${BASE_URL}${path}?${buildQueryString(allParameters)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
