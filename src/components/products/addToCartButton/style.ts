'use client';

import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.6rem 1rem;
  font-weight: 600;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
  }
`;