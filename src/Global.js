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
  font-size: 96px;
  letter-spacing: 8px;
  font-family: 'Roboto Condensed';
  :hover {
      text-shadow: 10px 10px 0px rgba(251, 109, 58, 0.6);
  }
}

h2{
        margin:0;
        font-family: "Roboto Light";
        font-size: 60px;
}

h3 {
    font-family: 'Roboto Regular';
    display: inline-block;
    margin: 0;
    padding: 0;
    font-size: 48px;

}

h4{
  font-family: 'Roboto Regular';
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 34px;

}

h5{
  font-family: 'Roboto Regular';
  display: inline-block;
  margin: 0;
  font-size: 24px;
}

h6{
  font-family: 'Roboto Regular';
  display: inline-block;
  margin: 0;
  font-size: 20px;
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
