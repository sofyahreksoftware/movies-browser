import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPeopleList,
  fetchPeopleSearch,
  selectFetchDataStatus,
  selectPeopleList,
  selectPeopleResult,
} from "./peopleSlice";

import { LoadingPage } from "../../common/statusPages/LoadingPage";
import { ErrorPage } from "../../common/statusPages/ErrorPage";
import { NoResultsPage } from "../../common/statusPages/NoResultsPage";
import { Page } from "../../common/Page";
import { Article } from "../../common/Article";
import { Pagination } from "../../Pagination";

import { useQueryParam } from "../../Navigation/queryParam";
import paginationParamName from "../../Pagination/paginationParamName";
import searchQueryName from "../../Navigation/searchQueryName";

export const PeopleList = () => {
  const dispatch = useDispatch();

  const fetchDataStatus = useSelector(selectFetchDataStatus);
  const peopleList = useSelector(selectPeopleList);

  const page = useQueryParam(paginationParamName) || 1;
  const query = useQueryParam(searchQueryName) || "";
  const totalResult = useSelector(selectPeopleResult);
  const title =
    query !== ""
      ? `Search results for "${query}" (${totalResult})`
      : "Popular people";

  useEffect(() => {
    const options = {
      query: query,
      page: page,
      type: "person",
    };
    if (query) {
      dispatch(fetchPeopleSearch(options));
    } else {
      dispatch(fetchPeopleList(page));
    }
  }, [page, dispatch, query]);

  return (
    <main>
      {fetchDataStatus === "loading" && <LoadingPage title={query} />}
      {totalResult === 0 && query !== "" && <NoResultsPage title={query} />}
      {fetchDataStatus === "error" && <ErrorPage />}
      {fetchDataStatus === "success" && totalResult !== 0 && (
        <Page>
          <Article title={title} people={peopleList} />
          <Pagination />
        </Page>
      )}
    </main>
  );
};
