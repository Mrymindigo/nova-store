'use client'

import styled from "styled-components"

export const FooterContainer = styled.footer`
background-color: ${({theme})=>theme.colors.footer};
color: ${({theme})=>theme.colors.secondary};
width: 100%;
height: 200px;
display: flex;
gap: 4rem;
align-items: center;
justify-content: space-around;

`