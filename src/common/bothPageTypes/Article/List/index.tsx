import { Link } from "react-router-dom";
import { getImageUrl } from "../../../api/getImageUrl";
import { toPersonDetails, toMovieDetails } from "../../../../core/routes";
import {
  People,
  Movies,
  Person,
  Movie,
  EntityTypeProp,
  GenreMap,
} from "../../moviePersonTypes";
import { Tile } from "../../Tile";

import { Wrapper, Item } from "./styled";

interface ListProps {
  people?: People;
  movies?: Movies;
  genreList?: GenreMap;
  entityType: EntityTypeProp;
}

export const List = ({ people, movies, genreList }: ListProps) => (
  <>
    {people && (
      <Wrapper $small>
        {people.map((person: Person) => (
          <Link
            to={toPersonDetails({ personId: person.id.toString() })}
            key={person.id}
          >
            <Item>
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
        {movies.map((movie: Movie) => (
          <Link
            to={toMovieDetails({ movieId: movie.id.toString() })}
            key={movie.id}
          >
            <Item>
              <Tile
                poster={getImageUrl({
                  size: "/w342",
                  path: movie.poster_path,
                })}
                title={movie.title}
                year={movie.release_date?.split("-")[0]}
                genres={
                  movie.genre_ids && genreList
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
