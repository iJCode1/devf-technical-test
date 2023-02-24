import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    --primary-color: #00337C;
    --white: #fff;
    --main-font: 'Raleway', sans-serif;
    --h1: 700 2.25rem/2.25rem 'Raleway'; 
    --h2: 700 2rem/2.5rem 'Raleway'; 
    --h3: 400 1.5rem/1.5rem 'Raleway'; 
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
