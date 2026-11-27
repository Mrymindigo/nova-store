'use client'

import Link from "next/link";
import styled from "styled-components";

export const Hero = styled.section`
display: flex;
position: relative;
width: 100%;
height: 100Vh;
`
export const ImgContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
z-index: 10;
position: absolute;
padding-top: 12rem;
padding-inline-start: 4rem;
`

export const ViewProductBtn = styled(Link)`
background: ${({theme})=>theme.colors.accent};
color:  ${({theme})=>theme.colors.secondary};
padding: .5rem 2rem;
border-radius: 5rem;
`