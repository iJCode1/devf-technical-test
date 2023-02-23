import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    --primary-color: #00337C;
    --white: #fff;
    --main-font: 'Raleway', sans-serif;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    margin: 0;
    font-family: var(--main-font);
  }
`;

export default GlobalStyle;
