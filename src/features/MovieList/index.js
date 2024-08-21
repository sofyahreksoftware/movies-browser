import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetch,
  fetchSearch,
  selectStatus,
  selectMovieList,
  selectGenreList,
  selectResult,
} from "./movieListSlice";

import { LoadingPage } from "../../common/statusPages/LoadingPage";
import { NoResultsPage } from "../../common/statusPages/NoResultsPage";
import { ErrorPage } from "../../common/statusPages/ErrorPage";
import { Page } from "../../common/Page";
import { Article } from "../../common/Article";

import { Pagination } from "../../Pagination";
import { useQueryParam } from "../../Navigation/queryParam";
import paginationParamName from "../../Pagination/paginationParamName";
import searchQueryName from "../../Navigation/searchQueryName";

export const MovieList = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const movieList = useSelector(selectMovieList);
  const genreList = useSelector(selectGenreList);

  const page = useQueryParam(paginationParamName) || 1;
  const query = useQueryParam(searchQueryName) || "";
  const totalResult = useSelector(selectResult);
  const title =
    query !== ""
      ? `Search results for "${query}" (${totalResult})`
      : "Popular movies";

  useEffect(() => {
    const options = {
      query: query,
      page: page,
      type: "movie",
    };

    if (query) {
      dispatch(fetchSearch(options));
    } else {
      dispatch(fetch(page));
    }
  }, [page, dispatch, query]);

  return (
    <main>
      {status === "loading" && <LoadingPage title={query} />}
      {totalResult === 0 && query !== "" && <NoResultsPage title={query} />}
      {status === "error" && <ErrorPage />}
      {status === "success" && totalResult !== 0 && (
        <Page>
          <Article title={title} movies={movieList} genreList={genreList} />
          <Pagination />
        </Page>
      )}
    </main>
  );
};
