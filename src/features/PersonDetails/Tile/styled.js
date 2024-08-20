import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  margin-top: 56px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.heather};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin-top: 23px;
    padding: 16px;
  }
`;

export const StyledDataContainer = styled.div`
  display: grid;
  grid-template-columns: 399px 1fr;
  grid-gap: 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: 116px 1fr;
    grid-gap: 16px;
  }
`;

export const StyledImage = styled.img`
  max-height: 564px;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    max-width: 116px;
    max-height: 163px;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 36px;
  line-height: 1.2;
  margin: 8px 0 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
    margin: 4px 0 16px;
  }
`;

export const StyledDetails = styled.p`
  font-size: 18px;
  line-height: 1.2;
  margin: 0 0 8px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 14px;
  }
`;

export const StyledDetailsSpan = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};

  ${({ $desktop }) =>
    $desktop &&
    css`
      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        display: none;
      }
    `}

  ${({ $mobile }) =>
    $mobile &&
    css`
      @media (min-width: ${({ theme }) => theme.media.mobile}px) {
        display: none;
      }
    `}
`;

export const StyledDescriptionsDesktop = styled.p`
  line-height: 1.6;
  margin: 24px 0 0;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: none;
  }
`;

export const StyledDescriptionsMobile = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin: 16px 1px 0;

  @media (min-width: ${({ theme }) => theme.media.mobile}px) {
    display: none;
  }
`;
