import { useRef } from "react";
import { useLocation, useNavigate } from "react-router";

import searchQueryName from "../../common/queries/searchQueryName";
import { useQueryParameter } from "../../common/queries/useQueryParameter";
import { useReplaceQueryParameter } from "../../common/queries/useReplaceGueryParameter";
import { SearchBox, SearchIcon, SearchForm } from "./styled";

export const Search = ({ placeholder }) => {
  const query = useQueryParameter(searchQueryName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const searchBarRef = useRef();
  const location = useLocation();
  const history = useNavigate();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryName,
      value: target.value.trim() !== "" ? target.value : "",
    });
  };

  const onFocus = () => {
    if (location.pathname.startsWith("/movies/")) {
      history("/movies");
    } else location.pathname.startsWith("/people/");
    history("/people");
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
