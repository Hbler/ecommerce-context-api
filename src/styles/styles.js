import styled, { createGlobalStyle, keyframes } from "styled-components";

const breakpoints = [576, 768, 992, 1200, 2000];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const GlobalStyle = createGlobalStyle`
:root{
    --toastify-color-light: ${({ theme: { colors } }) => colors.bg};
    --toastify-color-success: ${({ theme: { colors } }) => colors.success};
    --toastify-color-error: ${({ theme: { colors } }) => colors.error};
    --toastify-text-color-light: ${({ theme: { colors } }) => colors.text};
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
    transition: 0.2s;
}

body{
    color: ${({ theme: { colors } }) => colors.text};
    background-color: ${({ theme: { colors } }) => colors.bg};
}

img{
    width: 100%;
}


ul,ol{
    list-style: none;
}

button{
    border: none;
    cursor: pointer;
}

.container{
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 0.8rem;
}
`;

export const Logo = styled.h1`
  width: 100%;
  padding: 0.5rem 0;

  font-size: 2.5rem;

  color: ${({ theme: { colors } }) => colors.text};
  font-family: "Kaushan Script", cursive;
`;

export const Btn = styled.button`
  width: 100%;
  height: 40px;
  margin: 1rem 0;
  padding: 0;

  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme: { colors } }) => colors.bg};

  border-radius: 2px;
  background-color: ${({ theme: { colors } }) => colors.text};
  position: relative;
  z-index: 1;

  :hover {
    color: ${({ theme: { colors } }) => colors.bgAlpha};
  }
`;

export const expand = keyframes`
0%{
  height: 0;
  opacity: 0;
}
100%{
  height: 155px;
  opacity: 1;
}
`;

export const slideDown = keyframes`
0%{
  opacity: 0;
  transform: translateY(-50%);
}
100%{
  opacity: 1;
  transform: translateY(0);
}
`;

export const slideUp = keyframes`
0%{
  opacity: 0;
  transform: translateY(50%);
}
80%{
  opacity: 1;
  transform: translateY(-10%);
}
100%{
  transform: translateY(0);
}
`;
