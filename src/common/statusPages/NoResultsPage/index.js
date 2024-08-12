import { Container, Header, IconContainer, Image } from "./styled";

export const NoResultsPage = ({ title }) => (
  <Container>
    <Header>{title && <>Sorry, there are no results for "{title}"</>}</Header>
    <IconContainer>
      <Image />
    </IconContainer>
  </Container>
);
