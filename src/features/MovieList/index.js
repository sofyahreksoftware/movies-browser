import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getImageUrl } from "../../common/getImageUrl";
import {
  fetchMovieList,
  selectFetchDataStatus,
  selectMovieList,
  selectGenreList,
  fetchMovieSearch,
  selectMovieResult,
} from "./moviesSlice";
import { toMovieDetails } from "../../core/routes";

import { LoadingPage } from "../../common/LoadingPage";
import { NoResultsPage } from "../../common/NoResultsPage";
import { ErrorPage } from "../../common/ErrorPage";
import { Page } from "../../common/Page";
import { Article } from "../../common/Article";
import { Tile } from "../../common/Tile";

import { Pagination } from "../../Pagination";
import { useQueryParam } from "../../Navigation/queryParam";
import paginationParamName from "../../Pagination/paginationParamName";
import searchQueryName from "../../Navigation/searchQueryName";

import {
  StyledMain,
  StyledHeader,
  StyledList,
  StyledLink,
  Item,
} from "../styled";

export const MovieList = () => {
  const dispatch = useDispatch();

  const fetchDataStatus = useSelector(selectFetchDataStatus);
  const movieList = useSelector(selectMovieList);
  const genreList = useSelector(selectGenreList);

  const page = useQueryParam(paginationParamName) || 1;
  const query = useQueryParam(searchQueryName) || "";
  const totalResult = useSelector(selectMovieResult);
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
      dispatch(fetchMovieSearch(options));
    } else {
      dispatch(fetchMovieList(page));
    }
  }, [page, dispatch, query]);

  return (
    <main>
      {fetchDataStatus === "loading" && <LoadingPage title={query} />}
      {totalResult === 0 && query !== "" && <NoResultsPage title={query} />}
      {fetchDataStatus === "error" && <ErrorPage />}
      {fetchDataStatus === "success" && totalResult !== 0 && (
        <Page>
          <Article title={title} movies={movieList} genreList={genreList} />
          <Pagination />
        </Page>
      )}
    </main>
  );
};
