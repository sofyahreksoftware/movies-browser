import { Container, IconContainer, Image } from "./styled";
import { Header } from "../../../../Header";

export const NoResultsPage = ({ query }) => (
  <Container>
    <Header as="h1">{query && `Sorry, there are no results for "${query}"`}</Header>
    <IconContainer>
      <Image />
    </IconContainer>
  </Container>
);
