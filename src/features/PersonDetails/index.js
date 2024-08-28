import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";

import { getImageUrl } from "../../common/api/getImageUrl";
import {
  fetch,
  clearOnLeave,
  selectStatus,
  selectPersonDetails,
  selectPersonMovieCredits,
} from "./personDetailsSlice";

import { Page } from "../../common/bothPageTypes/Page";
import { Tile } from "../../common/bothPageTypes/Tile";
import { Article } from "../../common/bothPageTypes/Article";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
};

export const PersonDetails = ({ genres }) => {
  const dispatch = useDispatch();
  const { personId } = useParams();

  const status = useSelector(selectStatus);
  const credits = useSelector(selectPersonMovieCredits);
  const person = useSelector(selectPersonDetails);

  useEffect(() => {
    dispatch(fetch(personId));

    return () => {
      dispatch(clearOnLeave());
    };
  }, [dispatch, personId]);

  console.log(credits?.crew?.length);
  return (
    <section>
      <Page status={status}>
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

        {credits?.cast?.length !== 0 && (
          <Article
            title="Movies - cast"
            movies={credits.cast}
            genreList={genres}
          />
        )}

        {credits?.crew?.length !== 0 && (
          <Article
            title="Movies - crew"
            movies={credits.crew}
            genreList={genres}
          />
        )}
      </Page>
    </section>
  );
};
