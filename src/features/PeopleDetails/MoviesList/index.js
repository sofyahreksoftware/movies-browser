import { nanoid } from "@reduxjs/toolkit";

import { toMovieDetails } from "../../../core/routes";
import { MovieTile } from "../../../common/MovieTile";
import { StyledHeader, StyledList, StyledLink } from "../../styled";

export const MovieList = ({ header, moviesList, genreList }) => {
  return (
    <>
      {moviesList.length !== 0 && (
        <StyledHeader $paragraph as="p">
          {header} ({moviesList.length})
        </StyledHeader>
      )}
      <StyledList>
        {moviesList.map((movie) => (
          <li key={nanoid()}>
            <StyledLink to={toMovieDetails({ movieId: movie.id })}>
              <MovieTile
                poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                title={movie.title}
                year={movie.release_date?.split("-")[0]}
                genres={movie.genre_ids?.map((id) =>
                  genreList?.find((genre) => genre.id === id)
                )}
                mark={movie.vote_average?.toFixed(1)}
                votes={movie.vote_count}
                character={movie.character}
                job={movie.job}
              />
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
};
