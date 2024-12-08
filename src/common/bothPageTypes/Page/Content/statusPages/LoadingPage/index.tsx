import { HeaderProp } from "../../../../displayTypes";
import { Container, Header, IconContainer, Icon } from "./styled";

interface LoadingPageProps {
  header?: HeaderProp;
}

export const LoadingPage = ({ header }: LoadingPageProps) => (
  <Container>
    <Header>{header && `Search results for "${header}"`}</Header>
    <IconContainer>
      <Icon />
    </IconContainer>
  </Container>
);
