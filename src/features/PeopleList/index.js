import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getImageUrl } from "../../common/api/getImageUrl";
import {
  fetchPeopleList,
  fetchPeopleSearch,
  selectFetchDataStatus,
  selectPeopleList,
  selectPeopleResult,
} from "./peopleSlice";
import { LoadingPage } from "../../common/statusPages/LoadingPage";
import { ErrorPage } from "../../common/statusPages/ErrorPage";
import { PersonTile } from "../../common/PersonTile";
import { Pagination } from "../../Pagination";
import { useQueryParam } from "../../Navigation/queryParam";
import paginationParamName from "../../Pagination/paginationParamName";
import searchQueryName from "../../Navigation/searchQueryName";
import { NoResultsPage } from "../../common/statusPages/NoResultsPage";
import { toPersonDetails } from "../../core/routes";
import {
  StyledMain,
  StyledHeader,
  StyledList,
  StyledLink,
  Item,
} from "../styled";

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
    <StyledMain>
      {fetchDataStatus === "loading" && <LoadingPage title={query} />}
      {totalResult === 0 && query !== "" && <NoResultsPage title={query} />}
      {fetchDataStatus === "error" && <ErrorPage />}
      {fetchDataStatus === "success" && totalResult !== 0 && (
        <>
          <StyledHeader>{title}</StyledHeader>
          <StyledList $people>
            {peopleList.map(({ id, profile_path, name }) => (
              <StyledLink to={toPersonDetails({ personId: id })} key={nanoid()}>
                <Item key={nanoid()}>
                  <PersonTile
                    {...(profile_path && {
                      poster: getImageUrl({
                        size: "/w185",
                        path: `/${profile_path}`,
                      }),
                    })}
                    personName={name}
                  />
                </Item>
              </StyledLink>
            ))}
          </StyledList>
          <Pagination />
        </>
      )}
    </StyledMain>
  );
};
