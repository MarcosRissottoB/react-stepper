import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    -webkit-font-smoothing: antialiased;
    background: #e96443;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1e90ff, #66078b);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1e90ff , #66078b); 
    height: 100vh;
    margin: 0 auto;
    max-width: 800px;
    overscroll-behavior: none;
    width: 100%; 
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
    color: white
  }
`
