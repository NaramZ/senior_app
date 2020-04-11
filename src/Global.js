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

h1 {
  display: inline-block;
  margin: 0;
  font-size: 4em;
  letter-spacing: 8px;
  font-family: 'Roboto Condensed';
  :hover {
      text-shadow: 10px 10px 0px rgba(251, 109, 58, 0.6);
  }
}

h2{
        margin:0;
        font-family: "Roboto Light";
}

h3 {
    font-family: 'Roboto Regular';
    display: inline-block;
    margin: 0;
    padding: 0;
}

h4{
  font-family: 'Roboto Regular';
  display: inline-block;
  margin: 0;
  padding: 0;
}

h5{
  font-family: 'Roboto Regular';
  display: inline-block;
  margin: 0;
}


p{
    font-family: 'Roboto Regular';
    margin:0;
    padding:0;
  }

a {
  display: inline-block;
  flex-direction: space-between;
  color: black;
  text-decoration: none;

  :hover {
      color:inherit; 
      cursor:pointer; 
      text-shadow: 5px 5px 0px rgba(251, 109, 58, 0.4);


  }
}

  /* Functional Items */

button {
  font-family: 'Roboto Medium';
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
