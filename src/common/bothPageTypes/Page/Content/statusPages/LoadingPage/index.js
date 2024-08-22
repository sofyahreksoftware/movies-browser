import { Container, Header, IconContainer, Icon } from "./styled";

export const LoadingPage = ({ title }) => (
  <Container>
    <Header>{title && <>Search results for "{title}"</>}</Header>
    <IconContainer>
      <Icon />
    </IconContainer>
  </Container>
);
