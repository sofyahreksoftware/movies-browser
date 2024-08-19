import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getImageUrl } from "../../common/getImageUrl";
import {
  fetchMovieDataFromApi,
  selectMovie,
  selectCredits,
  selectFetchMovieStatus,
} from "./movieSlice";

import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";
import { Backdrop } from "./Backdrop";
import { Tile } from "../../common/Tile";

import { Article } from "./Article";

export const MovieDetails = () => {
  const movieId = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDataFromApi(movieId));
  }, [dispatch, movieId]);

  const movie = useSelector(selectMovie);
  const credits = useSelector(selectCredits);
  const fetchMovieStatus = useSelector(selectFetchMovieStatus);

  return (
    <>
      {fetchMovieStatus === "loading" && <LoadingPage />}
      {fetchMovieStatus === "error" && <ErrorPage />}
      {fetchMovieStatus === "success" && (
        <section>
          <Backdrop movie={movie} />

          <Tile
            $detailed
            poster={getImageUrl({
              size: "/w342",
              path: `${movie?.poster_path}.jpg`,
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
        </section>
      )}
    </>
  );
};
