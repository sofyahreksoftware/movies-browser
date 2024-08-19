import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { selectGenreList } from "../../../features/MovieList/moviesSlice";
import { getImageUrl } from "../../getImageUrl";
import { toPersonDetails, toMovieDetails } from "../../../core/routes";

import { Tile } from "../../Tile";

import { Wrapper, Item } from "./styled";

export const List = ({ people, movies }) => {
  const genreList = useSelector(selectGenreList);

  return (
    <>
      {people && (
        <Wrapper $small>
          {people?.map((person) => (
            <Link to={toPersonDetails({ personId: person.id })} key={nanoid()}>
              <Item key={nanoid()}>
                <Tile
                  $small
                  {...(person.profile_path && {
                    poster: getImageUrl({
                      size: "/w342",
                      path: `${person.profile_path}.jpg`,
                    }),
                  })}
                  title={person.name}
                  role={person.character}
                />
              </Item>
            </Link>
          ))}
        </Wrapper>
      )}

      {movies && (
        <Wrapper>
          {movies?.map((movie) => (
            <Link to={toMovieDetails({ movieId: movie.id })} key={nanoid()}>
              <Item key={nanoid()}>
                <Tile
                  poster={getImageUrl({
                    size: "/w342",
                    path: `${movie.poster_path}`,
                  })}
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
              </Item>
            </Link>
          ))}
        </Wrapper>
      )}
    </>
  );
};
