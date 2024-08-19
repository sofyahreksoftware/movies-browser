import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getImageUrl } from "../../common/api/getImageUrl";
import {
  fetchMovieDataFromApi,
  selectMovie,
  selectCredits,
  selectFetchMovieStatus,
} from "./movieSlice";

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
          <Page>
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
          </Page>
        </section>
      )}
    </>
  );
};
