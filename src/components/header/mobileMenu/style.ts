'use client';

import styled from 'styled-components';
import { Link } from '../../../utils/navigation';

export const MenuButton = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  font-size: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.25s ease;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Panel = styled.div<{ $open: boolean }>`
  position: fixed;
  inset-block: 0;
  inset-inline-start: 0;
  z-index: 50;
  width: min(80%, 320px);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.secondary};
  border-inline-end: 1px solid ${({ theme }) => theme.colors.border};
  transform: translateX(${({ $open }) => ($open ? '0' : '-100%')});
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: transform 0.25s ease, visibility 0.25s ease;

  /* در راست‌به‌چپ از سمت راست باز می‌شود */
  html[dir='rtl'] & {
    transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PanelLogo = styled.span`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CloseButton = styled.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  font-size: 1.25rem;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MenuLink = styled(Link)`
  display: block;
  padding: 0.75rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.accent};
  }
`;