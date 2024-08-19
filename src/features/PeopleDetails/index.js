import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";

import { getImageUrl } from "../../common/api/getImageUrl";
import {
  fetchPeopleDetails,
  selectFetchDataStatus,
  selectPersonDetails,
  selectPersonMovieCast,
  selectPersonMovieCrew,
  selectGenreList,
} from "./peopleDetailsSlice";

import { LoadingPage } from "../../common/statusPages/LoadingPage";
import { ErrorPage } from "../../common/statusPages/ErrorPage";
import { Page } from "../../common/Page";
import { Tile } from "../../common/Tile";
import { Article } from "../../common/Article";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
};

export const PersonDetails = () => {
  const dispatch = useDispatch();
  const personId = useParams();
  const person = useSelector(selectPersonDetails);
  const fetchDataStatus = useSelector(selectFetchDataStatus);

  const genreList = useSelector(selectGenreList);
  const moviesCast = useSelector(selectPersonMovieCast);
  const moviesCrew = useSelector(selectPersonMovieCrew);

  useEffect(() => {
    dispatch(fetchPeopleDetails(personId));
  }, [dispatch, personId]);

  return (
    <section>
      {fetchDataStatus === "loading" && <LoadingPage />}
      {fetchDataStatus === "error" && <ErrorPage />}
      {fetchDataStatus === "success" && (
        <Page>
          <Tile
            $personDetailed
            $detailed
            poster={getImageUrl({
              size: "/h632",
              path: `/${person.profile_path}`,
            })}
            title={person.name}
            dateOfBirth={formatDate(person.birthday)}
            placeOfBirth={person.place_of_birth}
            description={person.biography}
          />

          <Article
            title="Movies - cast"
            movies={moviesCast}
            genreList={genreList}
          />

          <Article
            title="Movies - crew"
            movies={moviesCrew}
            genreList={genreList}
          />
        </Page>
      )}
    </section>
  );
};
