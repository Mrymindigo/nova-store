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
padding-bottom:.65rem;
`
export const LogoText = styled.h1`
display:flex;
justify-content:center;
align-items:center;
font-size: 1.5rem;
font-weight: 800;
margin: auto;
color:${({ theme }) => theme.colors.primary};`