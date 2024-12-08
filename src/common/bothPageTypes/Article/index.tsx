import { List } from "./List";

import { XOR, MovieProps, PeopleProps } from "../moviePersonTypes";
import { Wrapper } from "./styled";
import { Header } from "../Header";

type ArticleProps = XOR<MovieProps, PeopleProps>;

export const Article = ({ title, people, movies, genreList }: ArticleProps) => (
  <Wrapper>
    {title && <Header>{title}</Header>}
    {movies && genreList ? (
      <List people={people} movies={movies} genreList={genreList} />
    ) : people ? (
      <List people={people} movies={movies} genreList={genreList} />
    ) : null}
  </Wrapper>
);
