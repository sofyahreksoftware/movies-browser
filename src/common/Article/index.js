import { List } from "./List";
import { Wrapper, Title } from "./styled";

export const Article = ({ title, people, movies, genreList }) => (
  <Wrapper>
    <Title>{title}</Title>
    <List people={people} movies={movies} genreList={genreList}/>
  </Wrapper>
);
