import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
  box-sizing: border-box;
  }

  *, ::after, ::before {
  box-sizing: inherit;
  }

  body {
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => theme.colors.whisper};
  overflow-wrap: anyway;
  overflow-y: scroll;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
