import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: auto;
    font-family: 'Actor', 'sans-serif';
  }

  img {
  width: 100%;
  display: block;
  height: auto;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
  list-style: none;
}

a {
  text-decoration: none;
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

`;

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1280px;
  margin: auto;
`;
