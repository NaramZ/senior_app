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
  
  /* Text */

h5{
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  margin: 0;
  font-size: 1em;
   
}

h3 {
    font-family: 'Roboto Condensed';
    display: inline-block;
    margin: 0;
    padding: 0;
  }

h1 {
  font-size: 4em;
  letter-spacing: 8px;
  display: inline-block;
  margin: 0;
  font-family: 'Roboto Condensed';
  :hover {
      text-shadow: 10px 10px 0px rgba(251, 109, 58, 0.6);
  }
}
h2{
        font-size: 2.5em;
        letter-spacing: 8px;
        margin:0;
        font-family: "Roboto Condensed";
  }
p{
    font-family: 'Roboto 300', sans-serif;
    color:black;
    margin:0;
    padding:0;
  }

a {
  display: inline-block;
  flex-direction: space-between;
  color: black;
  text-decoration: none;
  text-align: center;
  :hover {
      color:inherit; 
      cursor:pointer; 
      text-shadow: 0px 3px 0px #FCD561;
  }
}

  /* Functional Items */

button {
  font-family: 'Roboto', sans-serif;
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
  
hr{
  border: 1.5px solid #FCD561;
  border-radius: 24px;
}

`
