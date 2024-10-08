import { useSelector } from "react-redux";
import { selectMoviesPage } from "../../features/MovieList/movieListSlice";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import paginationParamName from "./paginationParamName";
import { useQueryParameter } from "./useQueryParameter";
import { useReplaceQueryParameter } from "./useReplaceGueryParameter";
import { selectPeoplePage } from "../../features/PeopleList/peopleListSlice";

export const usePageButton = () => {
  const location = useLocation();
  const replaceQueryParameter = useReplaceQueryParameter();

  const moviePageFromStore = useSelector(selectMoviesPage);
  const peoplePageFormStore = useSelector(selectPeoplePage);

  const totalPagesFromStore = location.pathname.startsWith("/movies")
    ? moviePageFromStore
    : peoplePageFormStore;

  const totalPages = totalPagesFromStore > 500 ? 500 : totalPagesFromStore;

  const [page, setPage] = useState(
    parseInt(useQueryParameter(paginationParamName)) || 1
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
