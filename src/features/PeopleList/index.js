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

import { Page } from "../../common/bothPageTypes/Page";
import { Article } from "../../common/bothPageTypes/Article";
import { Pagination } from "../../Pagination";

import { useQueryParameter } from "../../common/queries/useQueryParameter";
import paginationParamName from "../../common/queries/paginationParamName";
import searchQueryName from "../../common/queries/searchQueryName";

export const PeopleList = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const peopleList = useSelector(selectPeopleList);

  const page = useQueryParameter(paginationParamName) || 1;
  const query = useQueryParameter(searchQueryName) || "";
  const totalResults = useSelector(selectResult);
  const title =
    query !== ""
      ? `Search results for "${query}" ${
          totalResults !== undefined ? `(${totalResults})` : ""
        }
         `
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
      <Page
        status={status}
        totalResults={totalResults}
        header={title}
        query={query}
      >
        <Article people={peopleList.results} />
        <Pagination />
      </Page>
    </main>
  );
};
