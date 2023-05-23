import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: var(--searchbarbg);
  box-shadow: var(--main-shadow);
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1200px;
`;

export const Nav = styled.nav`
  margin-bottom: 16px;
  padding: 20px 0;
  max-width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const NavItemLink = styled(NavLink)`
  display: block;
  padding: 8px 16px;

  font-weight: 600;
  font-size: 24px;

  border-radius: 4px;

  transition: all 200ms ease-in-out;

  &.active {
    color: var(--bg);
    background-color: var(--accent);
    box-shadow: var(--main-shadow);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--accent);
  }
  
  :focus {
    outline: none;
    box-shadow: transperent;
  }
`;