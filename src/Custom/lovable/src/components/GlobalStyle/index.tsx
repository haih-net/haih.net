import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${(p) => p.theme.lovable.color.bg};
    color: ${(p) => p.theme.lovable.color.text};
    font-family: ${(p) => p.theme.lovable.font.sans};
    font-size: 18px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;

    @media (min-width: 48rem) {
      font-size: 19px;
    }
  }

  a {
    color: ${(p) => p.theme.lovable.color.accent};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ::selection {
    background: ${(p) => p.theme.lovable.color.accentDim};
    color: ${(p) => p.theme.lovable.color.text};
  }
`
