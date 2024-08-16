import styled from "styled-components";

export const StyledDescription = styled.p`
  grid-area: description;
  line-height: 1.6;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 14px;
    margin-top: 16px;
  }
`;
