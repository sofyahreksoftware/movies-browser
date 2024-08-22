import { List } from "./List";
import { Wrapper, Title } from "./styled";

export const Article = ({ title, people, movies, genreList }) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    <List people={people} movies={movies} genreList={genreList} />
  </Wrapper>
);
