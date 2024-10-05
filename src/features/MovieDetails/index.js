import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getImageUrl } from "../../common/api/getImageUrl";

import {
  fetch,
  clearOnLeave,
  selectStatus,
  selectMovieDetails,
  selectCredits,
} from "./movieDetailsSlice";

import { Backdrop } from "./Backdrop";
import { Page } from "../../common/bothPageTypes/Page";
import { Tile } from "../../common/bothPageTypes/Tile";

import { Article } from "../../common/bothPageTypes/Article";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch(movieId));

    return () => {
      dispatch(clearOnLeave());
    };
  }, [dispatch, movieId]);

  const status = useSelector(selectStatus);
  const movie = useSelector(selectMovieDetails);
  const credits = useSelector(selectCredits);

  return (
    <section>
      <Backdrop movie={movie} />

      <Page status={status}>
        <Tile
          $detailed
          poster={getImageUrl({
            size: "/w342",
            path: `${movie?.poster_path}`,
          })}
          title={movie?.title}
          year={movie?.release_date?.split("-")[0]}
          productionPlaces={movie?.production_countries}
          releaseDate={movie?.release_date?.split("-").reverse().join(".")}
          genres={movie.genres?.map(({ name }) => name)}
          mark={movie?.vote_average?.toFixed(1)}
          votes={movie?.vote_count}
          description={movie?.overview}
        />

        {credits.cast?.length !== 0 && (
          <Article title="Cast" people={credits.cast} />
        )}

        {credits.crew?.length !== 0 && (
          <Article title="Crew" people={credits.crew} />
        )}
      </Page>
    </section>
  );
};
