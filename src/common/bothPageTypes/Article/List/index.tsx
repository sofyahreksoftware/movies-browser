import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import { getImageUrl } from "../../../api/getImageUrl";
import { toPersonDetails, toMovieDetails } from "../../../../core/routes";
import { XOR, MovieProps, PeopleProps, Person, Movie } from "../../types";

import { Tile } from "../../Tile";

import { Wrapper, Item } from "./styled";

type ListProps = XOR<MovieProps, PeopleProps>;

export const List = ({ people, movies, genreList }: ListProps) => (
  <>
    {people && (
      <Wrapper $small>
        {people?.map((person: Person) => (
          <Link to={toPersonDetails({ personId: person.id })} key={nanoid()}>
            <Item key={nanoid()}>
              <Tile
                $small
                poster={getImageUrl({
                  size: "/w342",
                  path: `${person.profile_path}.jpg`,
                })}
                title={person.name}
                character={person.character}
              />
            </Item>
          </Link>
        ))}
      </Wrapper>
    )}

    {movies && (
      <Wrapper>
        {movies?.map((movie: Movie) => (
          <Link to={toMovieDetails({ movieId: movie.id })} key={nanoid()}>
            <Item key={nanoid()}>
              <Tile
                poster={getImageUrl({
                  size: "/w342",
                  path: `${movie.poster_path}`,
                })}
                title={movie.title}
                year={movie.release_date?.split("-")[0]}
                genres={movie.genre_ids?.map(
                  (id) => genreList && genreList[id]
                )}
                mark={movie.vote_average?.toFixed(1)}
                votes={movie.vote_count}
                character={movie.character}
              />
            </Item>
          </Link>
        ))}
      </Wrapper>
    )}
  </>
);
