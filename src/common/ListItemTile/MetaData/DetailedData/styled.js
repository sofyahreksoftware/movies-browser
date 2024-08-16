import styled from "styled-components";

export const Detail = styled.dl`
  margin: 0 0 16px;
  display: flex;
  gap: 4px;
  flex-direction: row;
  flex-wrap: wrap;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0 0 8px;
    font-size: 12px;
    line-height: 0.8;
  }
`;

export const DetailLabel = styled.dt`
  color: ${({ theme }) => theme.colors.stormGray};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: none;
  }
`;

export const DetailValue = styled.dd`
  color: ${({ theme }) => theme.colors.black};
  margin-left: 10px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin-left: unset;
  }
`;
