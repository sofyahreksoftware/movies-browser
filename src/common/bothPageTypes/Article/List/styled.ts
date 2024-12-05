import styled, { css } from "styled-components";

import { SmallProp } from "../../styledTypes";

export const Wrapper = styled.ul<SmallProp>`
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

  ${({ $small }) =>
    $small &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
        grid-gap: 16px;
      }
    `}
`;

export const Item = styled.li`
  width: 100%;
  height: 100%;
`;
