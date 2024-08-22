import styled from "styled-components";

export const Header = styled.h2`
  margin: 0 0 32px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0 0 12px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
