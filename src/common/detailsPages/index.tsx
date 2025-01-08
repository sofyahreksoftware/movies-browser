import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { FetchActionType, ClearOnLeaveActionType } from "./actionsInterface";
import { RootState } from "../bothPageTypes/stateTypes";
import { StatusProp } from "../bothPageTypes/displayTypes";
import {
  IdProp,
  Movie,
  Person,
  Genres,
  EntityTypeProp,
} from "../bothPageTypes/moviePersonTypes";
import { getImageUrl } from "../api/getImageUrl";

import { Page } from "../bothPageTypes/Page";
import { Tile } from "../bothPageTypes/Tile";
import { Article } from "../bothPageTypes/Article";
import { Backdrop } from "../../features/MovieDetails/Backdrop";

interface DetailsProps {
  fetch: FetchActionType;
  clearOnLeave: ClearOnLeaveActionType;
  selectStatus: (state: RootState) => StatusProp;
  selectDetails: (state: RootState) => Movie | Person;
  selectCredits: (state: RootState) => any;
  id: IdProp;
  genres: Genres;
  entityType: EntityTypeProp;
}

const formatDate = (dateString: string) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
};

function Details({
  fetch,
  clearOnLeave,
  selectStatus,
  selectDetails,
  selectCredits,
  id,
  genres,
  entityType,
}: DetailsProps) {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const details = useSelector(selectDetails);
  const credits = useSelector(selectCredits);

  const isMovie = (details: Movie | Person): details is Movie =>
    "genres" in details;

  useEffect(() => {
    dispatch(fetch(id));

    return () => {
      dispatch(clearOnLeave());
    };
  }, [dispatch, id, clearOnLeave, fetch]);

  const cast = credits?.cast && Array.isArray(credits.cast) ? credits.cast : [];
  const crew = credits?.crew && Array.isArray(credits.crew) ? credits.crew : [];

  console.log(cast);
  return (
    <section>
      {entityType === "movie" && isMovie(details) && (
        <Backdrop movie={details} />
      )}
      <Page status={status}>
        <Tile
          $detailed
          {...(entityType === "person" &&
            !isMovie(details) && {
              $personDetailed: true,
              poster:
                details?.profile_path &&
                getImageUrl({
                  size: "/h632",
                  path: `/${details?.profile_path}`,
                }),
              title: details.name,
              dateOfBirth: details?.birthday && formatDate(details?.birthday),
              placeOfBirth: details?.place_of_birth,
              description: details?.biography,
            })}
          {...(entityType === "movie" &&
            isMovie(details) && {
              poster: getImageUrl({
                size: "/w342",
                path: `${details?.poster_path}`,
              }),
              title: details?.title,
              year: details?.release_date?.split("-")[0],
              productionPlaces: details?.production_countries,
              releaseDate: details?.release_date
                ?.split("-")
                .reverse()
                .join("."),
              genres:
                details?.genres && Array.isArray(details?.genres)
                  ? details.genres.map(({ name }) => name)
                  : undefined,
              mark: Number(details?.vote_average?.toFixed(1)),
              votes: details?.vote_count,
              description: details?.overview,
            })}
        />

        <Article
          entityType={entityType}
          {...(entityType === "movie" &&
            isMovie(details) && {
              title: "Cast",
              people: cast,
            })}
          {...(entityType === "person" &&
            !isMovie(details) && {
              title: "Movies - cast",
              movies: cast,
              genreList: genres,
            })}
        />

        <Article
          entityType={entityType}
          {...(entityType === "movie" &&
            isMovie(details) && {
              title: "Crew",
              people: crew,
            })}
          {...(entityType === "person" &&
            !isMovie(details) && {
              title: "Movies - crew",
              movies: crew,
              genreList: genres,
            })}
        />
      </Page>
    </section>
  );
}
export default Details;
