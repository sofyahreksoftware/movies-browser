import { ChangeEvent, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

import searchQueryName from "../../../common/queries/searchQueryName";
import { useQueryParameter } from "../../../common/queries/useQueryParameter";
import { useReplaceQueryParameter } from "../../../common/queries/useReplaceGueryParameter";
import { SearchBox, SearchIcon, SearchInput } from "./styled";

interface SearchProps {
  placeholder: string;
}

export const Search = ({ placeholder }: SearchProps) => {
  const query = useQueryParameter(searchQueryName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const searchBarRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const history = useNavigate();

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    replaceQueryParameter({
      key: searchQueryName,
      value: target.value.trim() !== "" ? target.value : "",
    });
  };

  const onFocus = () => {
    if (location.pathname.startsWith("/movies/")) {
      history("/movies");
    } else if (location.pathname.startsWith("/people/")) {
      history("/people");
    }
  };

  return (
    <SearchBox>
      <SearchIcon />
      <SearchInput
        ref={searchBarRef}
        placeholder={placeholder}
        value={query || ""}
        onChange={onInputChange}
        onFocus={onFocus}
        as="input"
      />
    </SearchBox>
  );
};
