'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.card};
`;

export const ImageBox = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: #ffffff;
`;

export const ProductImage = styled(Image)`
  padding: 0.75rem;
  object-fit: contain;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
`;

export const Category = styled.span`
  align-self: flex-start;
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 9999px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 0.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.textMuted};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Price = styled.p`
  margin: 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Footer = styled.div`
  margin-top: auto;
  padding-top: 0.5rem;
`;