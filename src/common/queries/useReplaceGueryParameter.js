import { useLocation, useNavigate } from "react-router";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return ({ key, value }) => {
    const searchParam = new URLSearchParams(location.search);
    if (value === undefined) {
      searchParam.delete(key);
    } else {
      searchParam.set(key, value);
    }
    navigate(`${location.pathname}?${searchParam.toString()}`);
  };
};
