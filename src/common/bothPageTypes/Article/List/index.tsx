import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import { getImageUrl } from "../../../api/getImageUrl";
import { toPersonDetails, toMovieDetails } from "../../../../core/routes";
import {
  People,
  Movies,
  Genres,
  Person,
  Movie,
  EntityTypeProp,
} from "../../moviePersonTypes";

import { Tile } from "../../Tile";

import { Wrapper, Item } from "./styled";

interface ListProps {
  people?: People;
  movies?: Movies;
  genreList?: Genres;
  entityType: EntityTypeProp;
}
export const List = ({ entityType, people, movies, genreList }: ListProps) => {
  return (
    <>
      {people && (
        <Wrapper $small>
          {Array.isArray(people) &&
            entityType === "person" &&
            people?.map((person: Person) => (
              <Link
                to={toPersonDetails({ personId: person.id.toString() })}
                key={nanoid()}
              >
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
          {Array.isArray(movies) &&
            entityType === "movie" &&
            movies?.map((movie: Movie) => (
              <Link
                to={toMovieDetails({ movieId: movie.id.toString() })}
                key={nanoid()}
              >
                <Item key={nanoid()}>
                  <Tile
                    poster={getImageUrl({
                      size: "/w342",
                      path: movie.poster_path,
                    })}
                    title={movie.title}
                    year={movie.release_date?.split("-")[0]}
                    genres={
                      movie.genre_ids &&
                      Array.isArray(movie.genre_ids) &&
                      genreList
                        ? movie.genre_ids.map((id) => genreList[id])
                        : undefined
                    }
                    mark={Number(movie.vote_average?.toFixed(1))}
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
};
