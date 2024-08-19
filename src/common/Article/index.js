import { List } from "./List";
import { Wrapper, Title } from "./styled";

export const Article = ({ title, people, movies }) => (
  <Wrapper>
    <Title>{title}</Title>
    <List people={people} movies={movies} />
  </Wrapper>
);
