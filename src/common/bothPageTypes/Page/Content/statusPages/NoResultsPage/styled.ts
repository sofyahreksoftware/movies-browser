import styled from "styled-components";
import { ReactComponent as NoResultsImage } from "../../../../../../assets/noResultsImage.svg";

export const Container = styled.div`
  padding: 16px;
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
