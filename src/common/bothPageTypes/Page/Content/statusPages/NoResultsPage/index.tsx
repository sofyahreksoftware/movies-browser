import { QueryProp } from "../../../../displayTypes";
import { Header } from "../../../../Header";

import { Container, IconContainer, Image } from "./styled";

interface NoResultPageProps {
  query: QueryProp;
}

export const NoResultsPage = ({ query }: NoResultPageProps) => (
  <Container>
    <Header as="h1">
      {query && `Sorry, there are no results for "${query}"`}
    </Header>
    <IconContainer>
      <Image />
    </IconContainer>
  </Container>
);
