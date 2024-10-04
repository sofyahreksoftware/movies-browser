import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/Logo.svg";
import styled from "styled-components";

export const NavigationBar = styled.nav`
  width: 100%;
  height: 94px;
  background-color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    height: 142px;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1368px;
  margin: auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    padding: 0 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    gap: 12px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  vertical-align: middle;
  text-decoration: none;
  padding: 8px 24px;
  border-radius: 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 29px;
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 80px;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    gap: 8px;
  }
`;

export const Sygnet = styled(Logo)`
  height: auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 17px;
  }
`;

export const LogoTyp = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.66;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;
