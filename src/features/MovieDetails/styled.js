import styled from "styled-components";

import { ReactComponent as StarIcon } from "../../assets/starIcon.svg";

export const StyledMoviePage = styled.section`
  padding-bottom: 8px;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const PosterBackground = styled.div`
  width: 100%;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.black};
  height: 770px;
  position: absolute;
  top: 0;

  @media (max-width: ${({ theme }) => theme.media.forPoster.tablet}px) {
    height: 525px;
  }

  @media (max-width: ${({ theme }) => theme.media.forPoster.mobile}px) {
    height: 400px;
  }
`;

export const Poster = styled.div`
  width: 100%;
  display: inline-block;
  height: 770px;
  position: relative;
  top: 0;
  background-image: linear-gradient(
      270deg,
      rgba(${({ theme }) => theme.colors.darkRGB}) 14.11%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.875) 15.08%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.72) 16.51%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.294) 19.99%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.16) 21.88%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      rgba(${({ theme }) => theme.colors.darkRGB}) 13.6%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.984) 14.58%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.97) 15.44%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.867) 16.3%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.23) 22.87%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0) 26.64%
    ),
    linear-gradient(
      rgba(${({ theme }) => theme.colors.darkRGB}) 0%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.69) 4.66%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.44) 9.34%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.208) 15.16%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0) 24.22%
    ),
    linear-gradient(
      180deg,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0) 58.48%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.106) 63.17%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.235) 68.85%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.494) 78.08%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.74) 85.86%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 1) 92.87%
    ),
    url(${({ backdrop }) => backdrop});
  background-size: 1920px 770px, 1920px 770px, 1920px 770px, 1920px 770px,
    1368px 769px;
  background-repeat: no-repeat;
  background-position: top center;

  @media (max-width: ${({ theme }) => theme.media.forPoster.tablet}px) {
    background-size: 1366px 525px, 1366px 525px, 1366px 525px, 1366px 525px,
      1024px 525px;
    height: 525px;
  }

  @media (max-width: ${({ theme }) => theme.media.forPoster.mobile}px) {
    background-size: 1040px 400px, 1040px 400px, 1040px 400px, 1040px 400px,
      776px 400px;
    background-position: center top;
    height: 400px;
  }
`;

export const MetaData = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 15%;
  left: 10%;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    bottom: 5%;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 44px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 24px;
    line-height: 1.2;
    margin: 0 0 4px;
  }
`;

export const VotesContainer = styled.div`
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 40px;
  height: 38.12px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 16px;
    height: 15.25px;
  }
`;

export const MarkContainer = styled.div`
  display: flex;
  align-items: top;
`;

export const Mark = styled.em`
  font-weight: 500;
  font-size: 30px;
  line-height: 0.8;
  text-decoration: none;
  font-style: normal;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 14px;
    line-height: 1.3;
    font-weight: 600;
  }
`;

export const MaxMark = styled.b`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  margin-left: 5px;
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 10px;
  }
`;

export const VotesNumber = styled.b`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  position: absolute;
  top: 56px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    position: static;
    align-self: center;
    font-size: 10px;
  }
`;

export const TileContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px #bac7d5;
  max-width: 1368px;
  margin: 64px auto;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    max-width: 288px;
    padding: 16px;
    margin: 16px auto;
  }
`;

export const Article = styled.article`
  margin: 64px auto;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0;
    padding-left: 16px;
  }
`;
