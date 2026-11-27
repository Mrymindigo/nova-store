'use client';

import styled from 'styled-components';
import { Link } from '../../../utils/navigation';

//mobile 
export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavLink = styled(Link) <{ $active: boolean }>`
  padding-block: 0.25rem;
  font-weight: 600;
  color: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.text)};
  border-bottom: 2px solid
    ${({ theme, $active }) => ($active ? theme.colors.accent : 'transparent')};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;