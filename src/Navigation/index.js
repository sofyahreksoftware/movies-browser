import { useLocation } from "react-router";

import { toMovieList, toPeopleList } from "../core/routes";
import { Search } from "./Search";
import {
  Container,
  LogoLink,
  LogoTyp,
  NavigationBar,
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
          <LogoLink to={toMovieList()}>
            <Sygnet />
            <LogoTyp>Movies&nbsp;Browser</LogoTyp>
          </LogoLink>
          <NavigationList>
            <li>
              <StyledNavLink to={toMovieList()}>Movies</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={toPeopleList()}>People</StyledNavLink>
            </li>
          </NavigationList>
        </Container>
        <Search placeholder={placeholder} />
      </Wrapper>
    </NavigationBar>
  );
};
