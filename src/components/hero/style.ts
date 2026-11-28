// 'use client'

// import Link from "next/link";
// import styled from "styled-components";

// export const Hero = styled.section`
// display: flex;
// position: relative;
// width: 100%;
// height: 100Vh;
// `
// export const ImgContainer = styled.div`
// position: absolute;
// width: 100%;
// height: 100%;
// `

// export const Content = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: start;
// z-index: 10;
// position: absolute;
// padding-top: 12rem;
// padding-inline-start: 4rem;
// `

// export const ViewProductBtn = styled(Link)`
// background: ${({theme})=>theme.colors.accent};
// color:  ${({theme})=>theme.colors.secondary};
// padding: .5rem 2rem;
// border-radius: 5rem;
// `



'use client';

import styled from 'styled-components';
import { Link } from '../../utils/navigation';

export const Hero = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: clamp(320px, 50vh, 520px);
  overflow: hidden;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.primary};
`;

export const ImgContainer = styled.div`
  position: absolute;
  inset: 0;

  /* لایه تیره برای خوانا بودن متن روی عکس */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(15, 31, 61, 0.5);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 520px;
  padding-block: 3rem;

  h1 {
    margin: 0;
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    line-height: 1.3;
  }

  p {
    margin: 0;
    font-size: clamp(1rem, 2vw, 1.125rem);
  }
`;

export const ViewProductBtn = styled(Link)`
  padding: 0.6rem 2rem;
  font-weight: 600;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 9999px;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
  }
`;