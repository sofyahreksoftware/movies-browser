import { List } from "./List";

import { Wrapper } from "./styled";
import { Header } from "../Header";

type XOR<T, U> = (T & Partial<U>) | (U & Partial<T>);

interface Genres {
  [key: number]: string;
}

interface Movie {
  adult: false;
  backdrop_path: string;
  character: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  order: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: string;
  vote_average: number;
  vote_count: number;
}

interface Person {
  adult: boolean;
  gender: number;
  id: number;
  credit_id: string;
  department: string;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

interface MovieArticleProps {
  title: string;
  movies: Movie[];
  genreList: Genres;
}

interface PersonArticleProps {
  title: string;
  people: Person[];
}

type ArticleProps = XOR<MovieArticleProps, PersonArticleProps>;

export const Article = ({ title, people, movies, genreList }: ArticleProps) => {
  console.log(genreList);
  return (
    <Wrapper>
      {title && <Header>{title}</Header>}
      {movies && genreList ? (
        <List people={people} movies={movies} genreList={genreList} />
      ) : people ? (
        <List people={people} movies={movies} genreList={genreList} />
      ) : null}
    </Wrapper>
  );
};
