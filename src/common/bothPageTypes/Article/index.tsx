import { List } from "./List";
import {
  NameTitleProp,
  People,
  Movies,
  EntityTypeProp,
  GenreMap,
} from "../moviePersonTypes";
import { Wrapper } from "./styled";
import { Header } from "../Header";

interface ArticleProps {
  title?: NameTitleProp;
  people?: People;
  movies?: Movies;
  genreList?: GenreMap;
  entityType: EntityTypeProp;
}

export const Article = ({
  entityType,
  title,
  people,
  movies,
  genreList,
}: ArticleProps) => {
  const shouldRenderList = (movies && genreList) || people;

  return (
    <Wrapper>
      {title && <Header>{title}</Header>}
      {shouldRenderList && (
        <List
          people={people}
          movies={movies}
          genreList={genreList}
          entityType={entityType}
        />
      )}
    </Wrapper>
  );
};
