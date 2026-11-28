'use client';

import styled from 'styled-components';
import { Link } from '../../../utils/navigation';

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

const itemStyles = `
  min-width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  padding-inline: 0.5rem;
  font-weight: 600;
`;

export const PageLink = styled(Link) <{ $active?: boolean }>`
  ${itemStyles}
  color: ${({ theme, $active }) => ($active ? '#ffffff' : theme.colors.text)};
  background: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.secondary)};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radius.sm};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }


  html[dir='rtl'] & svg {
    transform: scaleX(-1);
  }
`;

export const DisabledItem = styled.span`
  ${itemStyles}
  opacity: 0.4;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};

  html[dir='rtl'] & svg {
    transform: scaleX(-1);
  }
`;