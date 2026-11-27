'use client';

import styled from 'styled-components';
import { Link } from '../../../utils/navigation';

export const CartLink = styled(Link)`
  position: relative;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -4px;
  inset-inline-end: -4px;
  min-width: 18px;
  height: 18px;
  padding-inline: 4px;
  display: grid;
  place-items: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 9999px;
`;