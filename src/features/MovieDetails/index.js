import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { getImageUrl } from "../../common/api/getImageUrl";
import {
  fetchMovieDataFromApi,
  selectMovie,
  selectCredits,
  selectFetchMovieStatus,
} from "./movieSlice";
import { toPersonDetails } from "../../core/routes";
import { MovieTile } from "../../common/MovieTile";
import { PersonTile } from "../../common/PersonTile";
import { LoadingPage } from "../../common/statusPages/statusPages/LoadingPage";
import { ErrorPage } from "../../common/statusPages/ErrorPage";

import { StyledHeader, StyledList, StyledLink, Item } from "../styled";
import {
  StyledMoviePage,
  Background,
  Poster,
  MetaData,
  MovieTitle,
  VotesContainer,
  StyledStarIcon,
  MarkContainer,
  Mark,
  MaxMark,
  VotesNumber,
  TileContainer,
  Article,
} from "./styled";

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
        <StyledMoviePage>
          {movie?.backdrop_path && (
            <>
              <Background />
              <Poster
                backdrop={getImageUrl({
                  size: "/w1280",
                  path: `${movie?.backdrop_path}`,
                })}
              >
                <MetaData>
                  <MovieTitle>{movie?.original_title}</MovieTitle>
                  <VotesContainer>
                    <StyledStarIcon />
                    <MarkContainer>
                      <Mark>{movie.vote_average?.toFixed(1)}</Mark>
                      <MaxMark>/ 10</MaxMark>
                    </MarkContainer>
                    <VotesNumber>{movie?.vote_count} votes</VotesNumber>
                  </VotesContainer>
                </MetaData>
              </Poster>
            </>
          )}

          <TileContainer>
            <MovieTile
              $main
              key={nanoid()}
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
          </TileContainer>

          <Article>
            <StyledHeader as="h2">Cast</StyledHeader>
            <StyledList $people>
              {credits.cast?.map((person) => (
                <StyledLink
                  to={toPersonDetails({ personId: person.id })}
                  key={nanoid()}
                >
                  <Item key={nanoid()}>
                    <PersonTile
                      {...(person.profile_path && {
                        poster: getImageUrl({
                          size: "/w342",
                          path: `${person.profile_path}.jpg`,
                        }),
                      })}
                      personName={person.name}
                      role={person.character}
                    />
                  </Item>
                </StyledLink>
              ))}
            </StyledList>
          </Article>

          <Article>
            <StyledHeader as="h2">Crew</StyledHeader>
            <StyledList $people>
              {credits.crew?.map((person) => (
                <StyledLink
                  to={toPersonDetails({ personId: person.id })}
                  key={nanoid()}
                >
                  <Item key={nanoid()}>
                    <PersonTile
                      key={nanoid()}
                      {...(person.profile_path && {
                        poster: getImageUrl({
                          size: "/w342",
                          path: `${person.profile_path}.jpg`,
                        }),
                      })}
                      personName={person.name}
                      role={person.job}
                    />
                  </Item>
                </StyledLink>
              ))}
            </StyledList>
          </Article>
        </StyledMoviePage>
      )}
    </>
  );
};
