import { useLocation } from "react-router";

export const useQueryParameter = (key) => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};
