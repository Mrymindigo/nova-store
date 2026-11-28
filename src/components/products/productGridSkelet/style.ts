'use client';

import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

export const SkeletonCard = styled.li`
  aspect-ratio: 3 / 4;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  animation: ${pulse} 1.2s ease-in-out infinite;
`;