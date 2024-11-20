import styled, { css } from "styled-components";

import { SmallProp, DetailedProp, NoImageProp, UrlProp } from "./styledTypes";

export const Wrapper = styled.article<SmallProp & DetailedProp>`
  display: grid;
  grid-template-areas:
    "picture"
    "data";
  grid-template-columns: 1fr;
  gap: 16px 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 16px 16px 59px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.heather};
  position: relative;
  transition: transform 0.5s linear;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-areas: "picture data";
    grid-template-rows: 169px;
    padding-top: unset;
    grid-template-columns: 114px auto;
    padding: 16px;
    gap: 0 16px;
  }

  ${({ $small }) =>
    $small &&
    css`
      border-radius: unset;
      box-shadow: unset;
      gap: 0;
      grid-template-columns: 1fr;
      grid-template-rows: unset;
      padding: 16px;
      text-align: center;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        grid-template-columns: 1fr;
        grid-template-rows: unset;
        grid-template-areas:
          "picture"
          "data";
        gap: 0;
        border-radius: 5px;
        box-shadow: 0 4px 12px #bac7d5;
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
      grid-template-columns: auto 1fr;
      position: unset;
      max-width: 1368px;
      gap: 16px 40px;
      margin: 0 auto;
      box-shadow: 0 4px 12px #bac7d5;
      padding: 40px;
      border-radius: unset;
      transition: unset;

      &:hover {
        transform: unset;
      }

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        grid-template-areas:
          "picture data"
          "description description";
        grid-template-columns: 114px auto;
      }
    `}
`;

export const Poster = styled.div<
  SmallProp & NoImageProp & UrlProp & DetailedProp
>`
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
  padding-top: calc(100% * 434 / 292);

  ${({ $small }) =>
    $small &&
    css`
      padding-top: calc(100% * 178 / 120);
    `}

  ${({ $noImage }) =>
    $noImage &&
    css`
      background-color: ${({ theme }) => theme.colors.silver};
      padding-top: unset;
      width: 100%;
      aspect-ratio: 292 / 434;
    `}
 
  ${({ $noImage, $small }) =>
    $noImage &&
    $small &&
    css`
      aspect-ratio: 120 / 178;
    `}
    
  ${({ $detailed }) =>
    $detailed &&
    css`
      width: 314px;
      height: 464px;
      margin: unset;
      padding-top: unset;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        width: 114px;
        height: 169px;
      }
    `}
`;
