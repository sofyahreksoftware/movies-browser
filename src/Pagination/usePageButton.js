import { useSelector } from "react-redux";
import { selectMoviesPage } from "../features/MovieList/movieListSlice";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import paginationParamName from "./paginationParamName";
import { useQueryParam, useReplaceQueryParam } from "../Navigation/queryParam";
import { selectPeoplePage } from "../features/PeopleList/peopleSlice";

export const usePageButton = () => {
  const location = useLocation();
  const replaceQueryParameter = useReplaceQueryParam();

  const moviePageFromStore = useSelector(selectMoviesPage);
  const peoplePageFormStore = useSelector(selectPeoplePage);

  const totalPagesFromStore = location.pathname.startsWith("/movies")
    ? moviePageFromStore
    : peoplePageFormStore;

  const totalPages = totalPagesFromStore > 500 ? 500 : totalPagesFromStore;

  const [page, setPage] = useState(
    parseInt(useQueryParam(paginationParamName)) || 1
  );

  useEffect(() => {
    replaceQueryParameter({ key: paginationParamName, value: page });
  }, [page]);

  const setFirstPage = () => {
    setPage(1);
  };

  const setLastPage = () => {
    setPage(totalPages);
  };

  const setNextPage = () => {
    setPage((page) => (page += 1));
  };

  const setPreviousPage = () => {
    setPage((page) => (page -= 1));
  };

  return {
    page,
    totalPages,
    setNextPage,
    setPreviousPage,
    setFirstPage,
    setLastPage,
  };
};
