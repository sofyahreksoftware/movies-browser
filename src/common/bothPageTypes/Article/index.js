import { List } from "./List";

import { Wrapper } from "./styled";
import { Header } from "../Header";

export const Article = ({ title, people, movies, genreList }) => (
  <Wrapper>
    {title && <Header>{title}</Header>}
    <List people={people} movies={movies} genreList={genreList} />
  </Wrapper>
);
