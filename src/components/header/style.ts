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

export const Logo = styled.div`
display:flex;
gap:.5rem;
justify-content:center;
align-items:center;
`

export const LogoIcon = styled.span`
font-size:24px;
color:${({ theme }) => theme.colors.accent};
display:flex;
justify-content:center;
align-items:center;
padding-bottom: .65rem;
`
export const LogoText = styled.h1`
display:flex;
justify-content:center;
align-items:center;
margin: auto;
color:${({ theme }) => theme.colors.primary};`