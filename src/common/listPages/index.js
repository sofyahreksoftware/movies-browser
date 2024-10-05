import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useQueryParameter } from "../../common/queries/useQueryParameter";
import paginationParamName from "../../common/queries/paginationParamName";
import searchQueryName from "../../common/queries/searchQueryName";

import { Page } from "../../common/bothPageTypes/Page";
import { Article } from "../../common/bothPageTypes/Article";
import { Pagination } from "../../Pagination";

function List({
  fetch,
  fetchSearch,
  selectStatus,
  selectList,
  selectResult,
  clearOnLeave,
  genres,
  entityName,
}) {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const list = useSelector(selectList);
  const totalResults = useSelector(selectResult);

  const page = useQueryParameter(paginationParamName) || 1;
  const query = useQueryParameter(searchQueryName) || "";

  const title =
    query !== ""
      ? `Search results for "${query}" ${
          totalResults !== undefined ? `(${totalResults})` : ""
        } `
      : `Popular ${entityName}`;

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
  }, [page, dispatch, query, clearOnLeave, fetch, fetchSearch]);

  return (
    <main>
      <Page
        status={status}
        totalResults={totalResults}
        header={title}
        query={query}
      >
        <Article
          {...(entityName === "movies"
            ? { movies: list.results }
            : { people: list.results })}
          genreList={genres}
        />
        <Pagination />
      </Page>
    </main>
  );
}

export default List;
