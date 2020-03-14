import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    text-rendering: optimizeLegibility;
  }
  h5{
        font-family: 'Roboto Light';
        display: inline-block;
        margin: 0;
        
    }
  a {
    display: inline-block;
    flex-direction: space-between;
    color: black;
    text-decoration: none;
    text-align: center;
    
    :hover {
      text-shadow: 0px 3px 0px #FCD561;
      }
    }
    button {
    font-family: 'Roboto Light';
    display: inline-block; 
    border-radius: 24px;
    background: none;
    border: 2px solid #FCD561;
    text-align: center;
    :hover {
        background: #FCD561;
    }
    }
  li{
    list-style: none;
  }
  
 
`