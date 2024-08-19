import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 180px 16px 32px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: auto;
  }
`;

export const StyledHeader = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
`;

export const StyledParagraph = styled.p`
  max-width: 426.53px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 0 auto 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 16px 24px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  line-height: 1.36;
  cursor: pointer;
`;
