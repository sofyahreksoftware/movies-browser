import styled, { css } from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    "picture"
    "data";
  gap: 16px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.heather};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-areas: "picture data";
  }

  ${({ $small }) =>
    $small &&
    css`
      border-radius: unset;
      box-shadow: unset;
      gap: 12px;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        grid-template-areas:
          "picture"
          "data";
          gap: 8px;
      }
    `}
`;

export const Poster = styled.div`
  grid-area: picture;
  padding-top: calc(100% * 434 / 292);
  margin: 0 auto;
  width: 100%;
  min-height: 264px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: url("${({ url }) => url}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  ${({ $noImage }) =>
    $noImage &&
    css`
      background-color: ${({ theme }) => theme.colors.silver};
    `}

  ${({ $small }) =>
    $small &&
    css`
      padding-top: calc(100% * 264 / 177);
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding-top: calc(100% * 169 / 114);
  }
`;
