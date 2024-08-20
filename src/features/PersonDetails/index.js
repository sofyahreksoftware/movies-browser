import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";

import {
  fetch,
  selectStatus,
  selectPersonDetails,
  selectPersonMovieCredits,
  selectGenreList,
} from "./personDetailsSlice";
import { getImageUrl } from "../../common/api/getImageUrl";
import { LoadingPage } from "../../common/statusPages/LoadingPage";
import { ErrorPage } from "../../common/statusPages/ErrorPage";
import { Tile } from "./Tile";
import { MovieList } from "./MoviesList";
import { StyledMain } from "../styled";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
};

export const PersonDetails = () => {
  const dispatch = useDispatch();
  const personId = useParams();

  const fetchDataStatus = useSelector(selectStatus);
  const credits = useSelector(selectPersonMovieCredits);
  const genreList = useSelector(selectGenreList);
  const person = useSelector(selectPersonDetails);

  useEffect(() => {
    dispatch(fetch(personId));
  }, [dispatch, personId]);

  return (
    <StyledMain>
      {fetchDataStatus === "loading" && <LoadingPage />}
      {fetchDataStatus === "error" && <ErrorPage />}
      {fetchDataStatus === "success" && (
        <>
          <Tile
            poster={getImageUrl({
              size: "/h632",
              path: `/${person.profile_path}`,
            })}
            name={person.name}
            birthDate={formatDate(person.birthday)}
            birthPlace={person.place_of_birth}
            biography={person.biography}
          />
          <MovieList
            header={`Movies - cast`}
            moviesList={credits.cast}
            genreList={genreList}
          />

          <MovieList
            header={`Movies - crew`}
            moviesList={credits.crew}
            genreList={genreList}
          />
        </>
      )}
    </StyledMain>
  );
};
