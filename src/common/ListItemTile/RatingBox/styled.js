import styled from "styled-components";

import { ReactComponent as Star } from "../../../assets/starIcon.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  bottom: 16px;
  margin-top: 39px;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    position: static;
    margin: 8px 0 0;
  }
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
`;
