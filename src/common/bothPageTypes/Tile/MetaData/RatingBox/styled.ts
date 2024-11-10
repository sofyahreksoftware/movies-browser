import styled, { css } from "styled-components";

import { ReactComponent as Star } from "../../../../../assets/starIcon.svg";
import { WrapperExtendedProps, BackdropProp, VotesProps } from "../../styledTypes";

export const Wrapper = styled.div<WrapperExtendedProps>`
  display: flex;
  flex-wrap: wrap;
  bottom: 16px;
  gap: 12px;
  position: absolute;
  bottom: 16px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    position: unset;
  }

  ${({ $detailed }) =>
    $detailed &&
    css`
      position: unset;
      margin: 0;
    `}

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      position: unset;
      margin: 0;
    `}
`;

export const StarIcon = styled(Star)<BackdropProp>`
  height: auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 16px;
  }

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      width: 40px;
    `}
`;

export const Rating = styled.em<BackdropProp>`
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

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      color: ${({ theme }) => theme.colors.white};
      font-weight: 500;
      font-size: 30px;
      line-height: 1.3;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        font-size: 14px;
      }
    `}
`;

export const MaxRating = styled.b<BackdropProp>`
  font-weight: normal;
  font-size: 14px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 10px;
    display: none;
  }

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      color: ${({ theme }) => theme.colors.white};
      font-size: 16px;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        display: unset;
      }
    `}
`;

export const TotalVotes = styled.b<VotesProps>`
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

  ${({ $detailed }) =>
    $detailed &&
    css`
      color: ${({ theme }) => theme.colors.black};

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        color: ${({ theme }) => theme.colors.waterloo};
      }
    `}

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      color: ${({ theme }) => theme.colors.white};
      display: block;
      width: 100%;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        font-size: 10px;
        line-height: 1.2;
        display: unset;
        width: unset;
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;
