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
  background-color: ${({ theme }) => theme.colors.whisper}
  }
`;

export default GlobalStyle;
