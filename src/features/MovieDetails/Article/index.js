import { PeopleList } from "./PeopleList";
import { Wrapper, Title } from "./styled";

export const Article = ({ title, people }) => (
  <Wrapper>
    <Title>{title}</Title>
    <PeopleList people={people} />
  </Wrapper>
);
