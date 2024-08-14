import styled, { css } from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    "picture"
    "data";
  grid-template-rows: 60vh auto;
  gap: 16px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 16px 16px 79px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.heather};
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-areas: "picture data";
    grid-template-rows: 169px;
    grid-template-columns: 114px auto;
    padding: 16px;
  }

  ${({ $small }) =>
    $small &&
    css`
      border-radius: unset;
      box-shadow: unset;
      gap: 12px;
      grid-template-rows: 32vh auto;
      padding: 16px;
      text-align: center;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        grid-template-columns: unset;
        grid-template-areas:
          "picture"
          "data";
        gap: 8px;
        padding: 8px;
      }
    `}
`;

export const Poster = styled.div`
  grid-area: picture;
  margin: 0 auto;
  width: 100%;
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
      padding-top: unset;
      width: 100%;
    `}
`;
