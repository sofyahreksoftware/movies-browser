import styled, { css } from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    "picture"
    "data";
  grid-template-rows: 60vh auto;
  grid-template-columns: 1fr;
  gap: 16px 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 16px 16px 59px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.heather};
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-areas: "picture data";
    grid-template-rows: 169px;
    grid-template-columns: 114px auto;
    padding: 16px;
    gap: 0 16px;
  }

  ${({ $small }) =>
    $small &&
    css`
      border-radius: unset;
      box-shadow: unset;
      gap: 12px 0;
       grid-template-columns: 1fr;  
      grid-template-rows: 32vh auto; 
      padding: 16px;
      text-align: center;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        grid-template-columns: 1fr;
        grid-template-rows: 32vh auto;
        grid-template-areas:
          "picture"
          "data";
        gap: 8px 0;
        padding: 8px;
      }
    `}

  ${({ $detailed }) =>
    $detailed &&
    css`
      grid-template-areas:
        "picture data"
        "picture description";
      grid-template-rows: unset;
      position: unset;
      max-width: 1368px;
      gap: 16px 40px;
      margin: 0 auto;
      box-shadow: 0 4px 12px #bac7d5;
      padding: 40px;
      border-radius: unset;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        grid-template-areas:
          "picture data"
          "description description";
        grid-template-columns: 114px auto;
        gap: 16px;
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

  ${({ $detailed }) =>
    $detailed &&
    css`
      width: 314px;
      height: 464px;
      margin: unset;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        width: 114px;
        height: 169px;
      }
    `}
`;
