import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
  }
`

