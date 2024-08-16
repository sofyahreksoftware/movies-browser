import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  grid-area: data;

  ${({ $detailed }) =>
    $detailed &&
    css`
      display: grid;
      align-content: stretch;
    `}
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 16px;
  }

  ${({ $detailed }) =>
    $detailed &&
    css`
      font-weight: 600;
      font-size: 36px;
      line-height: 1.2;
      margin: 8px 0 0;
    `}
`;

export const Year = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin: 8px 0 0;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    line-height: 1.3;
    margin: 4px 0 0;
  }

  ${({ $detailed }) =>
    $detailed &&
    css`
      font-size: 22px;
      line-height: 1.2;
      margin: 24px 0;
      color: ${({ theme }) => theme.colors.black};

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        color: ${({ theme }) => theme.colors.waterloo};
        margin: 4px 0 8px;
      }
    `}
`;

export const Role = styled(Year)`
  line-height: 1.5;
  font-size: 18px;
  margin: 8px 0 0;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    margin: 4px 0 0;
    line-height: 1.3;
  }
`;

export const Genres = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  gap: 8px;
  margin: 8px 0;

  ${({ $detailed }) =>
    $detailed &&
    css`
      margin: 0 0 24px;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        margin: 0 0 8px;
      }
    `}
`;

export const Genre = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  white-space: nowrap;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.mystic};
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 1.1;
  }
`;
