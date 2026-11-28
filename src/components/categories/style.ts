'use client';

import styled from 'styled-components';

export const Section = styled.section`
  padding-block: 1.5rem;
  scroll-margin-top: 1rem;
`;

export const Title = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.25rem;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  padding: 0.5rem 1.25rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 9999px;
`;