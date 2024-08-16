import styled, { css } from "styled-components";

import { ReactComponent as Star } from "../../../../assets/starIcon.svg";

export const Wrapper = styled.div`
  display: flex;
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
`;

export const StarIcon = styled(Star)`
  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 16px;
    height: auto;
  }
`;

export const Rating = styled.em`
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
`;

export const MaxRating = styled.b`
  font-weight: normal;
  font-size: 14px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: none;
  }
`;

export const TotalVotes = styled.b`
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
`;
