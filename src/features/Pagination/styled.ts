import styled, { css } from "styled-components";

import { ReactComponent as Arrow } from "../../assets/arrowIcon.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
  white-space: nowrap;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.cornflowerBlue};
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.pattensBlue2};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.mystic};
    color: ${({ theme }) => theme.colors.woodSmoke};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding: 8px 12px;
    margin-right: 8px;
  }
`;

export const ArrowIcon = styled(Arrow)<{
  $toNextPage?: boolean;
  disabled?: boolean;
}>`
  margin: 0 2px 0 4px;
  color: ${({ theme }) => theme.colors.cornflowerBlue};

  *:disabled & {
    color: ${({ theme }) => theme.colors.waterloo};
  }

  ${({ $toNextPage }) =>
    $toNextPage &&
    css`
      transform: rotate(180deg);
    `}
`;

export const ButtonText = styled.p`
  margin: 0 4px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: none;
  }
`;

export const PageCounter = styled.div`
  margin: 0 24px 0 16px;
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 10px;
    line-height: 2.4;
    margin: 0 8px;
  }
`;

export const PageNumbers = styled.span`
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.woodSmoke};
  font-weight: 600;
`;
