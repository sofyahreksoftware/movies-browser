import { useLocation } from "react-router";

import { Search } from "./Search";
import {
  Container,
  LogoLink,
  LogoTyp,
  NavigationBar,
  NavigationItem,
  NavigationList,
  StyledNavLink,
  Sygnet,
  Wrapper,
} from "./styled";

export const Navigation = () => {
  const location = useLocation();
  const placeholder = location.pathname.startsWith("/movies")
    ? "Search for movies..."
    : "Search for people...";

  return (
    <NavigationBar>
      <Wrapper>
        <Container>
          <LogoLink to="/movies">
            <Sygnet />
            <LogoTyp>Movies&nbsp;Browser</LogoTyp>
          </LogoLink>
          <NavigationList>
            <NavigationItem>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </NavigationItem>
            <NavigationItem>
              <StyledNavLink to="/people">People</StyledNavLink>
            </NavigationItem>
          </NavigationList>
        </Container>
        <Search placeholder={placeholder} />
      </Wrapper>
    </NavigationBar>
  );
};
