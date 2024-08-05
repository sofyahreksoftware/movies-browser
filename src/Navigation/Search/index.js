import { useRef } from "react";
import { useLocation, useNavigate } from "react-router";

import searchQueryName from "../searchQueryName";
import { useQueryParam, useReplaceQueryParam } from "../queryParam";
import { usePageButton } from "../../Pagination/usePageButton";
import paginationParamName from "../../Pagination/paginationParamName";
import { SearchBox, SearchIcon, SearchForm } from "./styled";

export const Search = ({ placeholder }) => {
  const query = useQueryParam(searchQueryName);
  const replaceQueryParameter = useReplaceQueryParam();
  const searchBarRef = useRef();
  const location = useLocation();
  const history = useNavigate();
  const { page, setFirstPage } = usePageButton();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryName,
      value: target.value.trim() !== "" ? target.value : "",
    });
  };

  const setPageToFirst = () => {
    setFirstPage();
    replaceQueryParameter({
      key: paginationParamName,
      value: page,
    });
  };

  const onFocus = () => {
    if (location.pathname.startsWith("/movies/")) {
      history("/movies");
    } else if (location.pathname.startsWith("/people/")) {
      history("/people");
    } else {
      setPageToFirst();
    }
  };

  return (
    <SearchBox>
      <SearchIcon />
      <SearchForm
        ref={searchBarRef}
        placeholder={placeholder}
        value={query || ""}
        onChange={onInputChange}
        onFocus={onFocus}
      />
    </SearchBox>
  );
};
