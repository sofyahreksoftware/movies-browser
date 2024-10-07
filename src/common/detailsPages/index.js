import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getImageUrl } from "../../common/api/getImageUrl";

import { Page } from "../../common/bothPageTypes/Page";
import { Tile } from "../../common/bothPageTypes/Tile";
import { Article } from "../../common/bothPageTypes/Article";

function Details({
  fetch,
  clearOnLeave,
  selectStatus,
  selectDetails,
  selectCredits,
  id,
  genres,
  entityType,
}) {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const details = useSelector(selectDetails);
  const credits = useSelector(selectCredits);

  useEffect(() => {
    dispatch(fetch(id));

    return () => {
      dispatch(clearOnLeave());
    };
  }, [dispatch, id, clearOnLeave, fetch]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}.${month}.${year}`;
  };
  console.log(details);
  return (
    <section>
      <Page status={status}>
        <Tile
          $detailed
          {...(entityType === "person" && {
            $personDetailed: true,
            poster: getImageUrl({
              size: "/h632",
              path: `/${details?.profile_path}`,
            }),
            title: details?.name,
            dateOfBirth: formatDate(details?.birthday),
            placeOfBirth: details?.place_of_birth,
            description: details?.biography,
          })}
          {...(entityType === "movie" && {
            poster: getImageUrl({
              size: "/w342",
              path: `${details?.poster_path}`,
            }),
            title: details?.title,
            year: details?.release_date?.split("-")[0],
            productionPlaces: details?.production_countries,
            releaseDate: details?.release_date?.split("-").reverse().join("."),
            genres: details?.genres?.map(({ name }) => name),
            mark: details?.vote_average?.toFixed(1),
            votes: details?.vote_count,
            description: details?.overview,
          })}
        />

        {credits.cast?.length !== 0 && (
          <Article
            {...(entityType === "movie" && {
              title: "Cast",
              people: credits.cast,
            })}
            {...(entityType === "person" && {
              title: "Movies - cast",
              movies: credits.cast,
              genreList: genres,
            })}
          />
        )}

        {credits.crew?.length !== 0 &&
          ({
            ...(entityType === "movie" && {
              title: "Crew",
              people: credits.crew,
            }),
          },
          {
            ...(entityType === "person" && {
              title: "Movies - crew",
              movies: credits.crew,
              genreList: genres,
            }),
          })}
      </Page>
    </section>
  );
}

export default Details;
