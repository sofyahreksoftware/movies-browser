import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetch,
  fetchSearch,
  selectStatus,
  selectMovieList,
  selectResult,
  clearOnLeave,
} from "./movieListSlice";

import { Page } from "../../common/bothPageTypes/Page";
import { Article } from "../../common/bothPageTypes/Article";

import { Pagination } from "../../Pagination";
import { useQueryParameter } from "../../common/queries/useQueryParameter";
import paginationParamName from "../../common/queries/paginationParamName";
import searchQueryName from "../../common/queries/searchQueryName";

export const MovieList = ({ genres }) => {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const movieList = useSelector(selectMovieList);
  const totalResults = useSelector(selectResult);

  const page = useQueryParameter(paginationParamName) || 1;
  const query = useQueryParameter(searchQueryName) || "";

  const title =
    query !== ""
      ? `Search results for "${query}" ${
          totalResults !== undefined ? `(${totalResults})` : ""
        } `
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
        <Article movies={movieList.results} genreList={genres} />
        <Pagination />
      </Page>
    </main>
  );
};
