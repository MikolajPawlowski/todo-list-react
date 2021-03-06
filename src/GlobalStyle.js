import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    background-color: rgb(235, 235, 235);
  }
`;