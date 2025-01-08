import { List } from "./List";

import {
  NameTitleProp,
  People,
  Movies,
  Genres,
  EntityTypeProp,
} from "../moviePersonTypes";
import { Wrapper } from "./styled";
import { Header } from "../Header";

interface ArticleProps {
  title?: NameTitleProp;
  people?: People;
  movies?: Movies;
  genreList?: Genres;
  entityType: EntityTypeProp;
}

export const Article = ({
  entityType,
  title,
  people,
  movies,
  genreList,
}: ArticleProps) => (
  <Wrapper>
    {title && <Header>{title}</Header>}
    {movies && genreList ? (
      <List
        people={people}
        movies={movies}
        genreList={genreList}
        entityType={entityType}
      />
    ) : people ? (
      <List
        people={people}
        movies={movies}
        genreList={genreList}
        entityType={entityType}
      />
    ) : null}
  </Wrapper>
);
