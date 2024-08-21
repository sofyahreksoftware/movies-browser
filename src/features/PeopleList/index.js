import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetch,
  fetchSearch,
  selectStatus,
  selectPeopleList,
  selectResult,
  clearOnLeave,
} from "./peopleListSlice";

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

  const status = useSelector(selectStatus);
  const peopleList = useSelector(selectPeopleList);

  const page = useQueryParam(paginationParamName) || 1;
  const query = useQueryParam(searchQueryName) || "";
  const totalResult = useSelector(selectResult);
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
      {status === "loading" && <LoadingPage title={query} />}
      {totalResult === 0 && query !== "" && <NoResultsPage title={query} />}
      {status === "error" && <ErrorPage />}
      {status === "success" && totalResult !== 0 && (
        <Page>
          <Article title={title} people={peopleList} />
          <Pagination />
        </Page>
      )}
    </main>
  );
};
