import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getImageUrl } from "../../common/api/getImageUrl";

import {
  fetch,
  selectStatus,
  selectMovieDetails,
  selectCredits,
} from "./movieDetailsSlice";

import { LoadingPage } from "../../common/statusPages/LoadingPage";
import { ErrorPage } from "../../common/statusPages/ErrorPage";
import { Backdrop } from "./Backdrop";
import { Page } from "../../common/Page";
import { Tile } from "../../common/Tile";

import { Article } from "../../common/Article";

export const MovieDetails = () => {
  const movieId = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch(movieId));
  }, [dispatch, movieId]);

  const status = useSelector(selectStatus);
  const movie = useSelector(selectMovieDetails);
  const credits = useSelector(selectCredits);

  return (
    <>
      {status === "loading" && <LoadingPage />}
      {status === "error" && <ErrorPage />}
      {status === "success" && (
        <section>
          <Backdrop movie={movie} />
          <Page>
            <Tile
              $detailed
              poster={getImageUrl({
                size: "/w342",
                path: `${movie?.poster_path}`,
              })}
              title={movie?.title}
              year={movie.release_date?.split("-")[0]}
              productionPlaces={movie?.production_countries}
              releaseDate={movie.release_date?.split("-").reverse().join(".")}
              genres={movie?.genres}
              mark={movie?.vote_average?.toFixed(1)}
              votes={movie?.vote_count}
              description={movie?.overview}
            />
            <Article title="Cast" people={credits.cast} />
            <Article title="Crew" people={credits.cast} />
          </Page>
        </section>
      )}
    </>
  );
};
