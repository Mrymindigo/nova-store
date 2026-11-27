'use client';

import styled from 'styled-components';
import { Link } from '../../utils/navigation';

export const HeaderBar = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 1200px;
  margin-inline: auto;
  padding: 1rem;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;