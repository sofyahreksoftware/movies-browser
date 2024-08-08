import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as StarIcon } from "../../assets/starIcon.svg";

export const StyledMovieTile = styled.article`
  display: grid;
  grid-template-rows: 1.6fr 1fr;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.heather};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 16px;
    max-width: 350px;
  }

  ${({ $main }) =>
    $main &&
    css`
      max-width: 1368px;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 1fr;
      gap: 40px;
      height: auto;
      background-color: transparent;
      box-shadow: none;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        gap: 16px;
        padding: 0;
      }
    `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 114px;
    height: 169px;
  }

  ${({ $main }) =>
    $main &&
    css`
      width: 292px;
      height: 434px;
      margin: 0 auto;
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0;
  }
`;

export const DataContainer = styled.div`
  display: grid;
  align-items: start;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  max-height: 270px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: flex;
    padding: 0;
    margin-top: -14px;
    gap: 4px;
    flex-direction: column;
    justify-content: top;
  }

  ${({ $main }) =>
    $main &&
    css`
      display: block;
      max-width: 936px;
      max-height: none;
      margin: 0 auto;
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h2`
  font-weight: 500px;
  font-size: 22px;
  line-height: 1.3;
  margin: 16px 0 8px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 16px;
    margin: 16px 0 4px;
  }

  ${({ $main }) =>
    $main &&
    css`
      font-weight: 600;
      font-size: 36px;
      line-height: 1.2;
      margin: 8px 0 0;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.3;
      }
    `}
`;

export const StyledInfo = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.waterloo};
  margin: 0 0 8px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    line-height: 1.3;
    margin: 0 0 8px;
  }

  ${({ $main }) =>
    $main &&
    css`
      font-size: 22px;
      line-height: 1.2;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.black};
      margin: 24px 0;
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 4px 0 8px;
    color: ${({ theme }) => theme.colors.waterloo};
  }
`;

export const Container = styled.p`
  margin: 0 0 16px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0 0 8px;
  }
`;

export const AdditionalDataName = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.stormGray};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: none;
  }
`;

export const AdditionalData = styled.span`
  font-size: 22px;
  line-height: 0.9;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 12px;
    line-height: 1.5;
    font-weight: 400;
  }
`;

export const Genres = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  gap: 8px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    max-width: 130px;
    margin: 0 0 12px;
  }

  ${({ $main }) =>
    $main &&
    css`
      max-width: 936px;
      margin: 0 0 8px;
    `}
`;

export const Genre = styled.li`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.mystic};
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const VotesContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  bottom: 16px;
  margin-top: 39px;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    position: static;
    margin: 0;
  }

  ${({ $main }) =>
    $main &&
    css`
      font-weight: 500;
      line-height: 1.3;
      font-size: 22px;
      margin: 0;
    `}
`;

export const StyledStarIcon = styled(StarIcon)`
  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 16px;
    height: 15.25px;
  }
`;

export const Mark = styled.em`
  font-weight: 600;
  line-height: 1.5;
  font-size: 16px;
  text-decoration: none;
  font-style: normal;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    line-height: 1.3;
    white-space: nowrap;
  }

  ${({ $main }) =>
    $main &&
    css`
      font-weight: 500;
      line-height: 1.3;
      font-size: 22px;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        font-weight: 600;
      }
    `}
`;

export const MaxMark = styled.b`
  display: none;

  ${({ $main }) =>
    $main &&
    css`
      display: block;
      font-size: 14px;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        display: none;
      }
    `};
`;

export const VotesNumber = styled.b`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.waterloo};
  text-decoration: none;
  font-style: normal;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    line-height: 1.3;
    white-space: nowrap;
  }

  ${({ $main }) =>
    $main &&
    css`
      ${({ theme }) => theme.colors.black};

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        color: ${({ theme }) => theme.colors.waterloo};
      }
    `}
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  text-align: justify;
  color: ${({ theme }) => theme.colors.black};
  margin: 24px 0 0;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Description2 = styled.p`
  @media (max-width: 992px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6;
    text-align: justify;
    color: ${({ theme }) => theme.colors.black};
    margin: 24px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    color: ${({ theme }) => theme.colors.black};
    margin: 16px auto 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    text-align: justify;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
