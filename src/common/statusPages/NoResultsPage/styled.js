import styled from "styled-components";
import { ReactComponent as NoResultsImage } from "../../assets/noResultsImage.svg";

export const Container = styled.div`
  padding: 16px;
`;

export const Header = styled.h1`
  font-size: 36px;
  line-height: 1.2;
  margin: 0 0 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.3;
    margin: 0 0 8px;
  }
`;

export const IconContainer = styled.div`
  text-align: center;
`;

export const Image = styled(NoResultsImage)`
  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 246px;
    height: 196px;
  }
`;
