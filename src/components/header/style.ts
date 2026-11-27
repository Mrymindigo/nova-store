'use client';

import styled from 'styled-components';
import { Link } from '../../utils/navigation';

export const HeaderBar = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 0.75rem;
`;

export const Start = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const DesktopOnly = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;