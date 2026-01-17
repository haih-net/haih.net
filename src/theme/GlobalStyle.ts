import { createGlobalStyle } from 'styled-components'
import { markdownStyles } from './markdownStyles'
import { customStyles } from './customStyles'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;

    &:focus {
      outline: none;
    }
  }

  html, body{
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
  }

  #__next {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    
    &:hover {
      text-decoration: underline;
    }
    
    &:active {
      text-decoration: none;
    }
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  pre, code {
    white-space: pre-line !important;
  }

  button{
    &:enabled {
      cursor: pointer;
    }
  }

  ${markdownStyles};

  ${customStyles};
`
