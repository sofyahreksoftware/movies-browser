import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const StyledMain = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
`;

export const StyledHeader = styled.h1`
  font-size: 36px;
  line-height: 1.2;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 18px;
    line-height: 1.2;
    margin-top: 24px;
  }

  ${({ $paragraph }) =>
    $paragraph &&
    css`
      font-weight: 600;
      margin: 64px 0 24px;
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 20px;
    margin: 24px 0 16px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  }

  ${({ $people }) =>
    $people &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
        grid-gap: 16px;
      }
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Item = styled.li`
  width: 100%;
  height: 100%;
`;
