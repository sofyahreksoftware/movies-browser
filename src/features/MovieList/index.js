import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetch,
  fetchSearch,
  selectStatus,
  selectMovieList,
  selectGenreList,
  selectResult,
  clearOnLeave,
  selectMoviesState,
} from "./movieListSlice";

import { Page } from "../../common/bothPageTypes/Page";
import { Article } from "../../common/bothPageTypes/Article";

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
  const totalResults = useSelector(selectResult);
  const title =
    query !== ""
      ? `Search results for "${query}" (${totalResults})`
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

    return () => {
      dispatch(clearOnLeave());
    };
  }, [page, dispatch, query]);

  return (
    <main>
      <Page
        status={status}
        totalResults={totalResults}
        header={title}
        query={query}
      >
        <Article movies={movieList} genreList={genreList} />
        <Pagination />
      </Page>
    </main>
  );
};
