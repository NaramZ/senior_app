import styled from 'styled-components'; 
export const StyledCard= styled.div`


  position: absolute;
  display: inline-block;
  width: 22rem;
  justify-content: space-evenly;
  height: 12rem;
  position: relative;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12);
  z-index: 0;
  cursor: pointer;
  border-radius: 25px;

  :hover {
  box-shadow: 1px 5px 20px ${({theme}) => theme.primaryHover};
  }
  img {
  width:100%;
  height: 100%;
  border-radius: 25px;

  }
  
  h3{
    left: 0;
    margin: 10px;
    position: absolute;
    font-family: 'Averta Bold';
    font-size: 30px;
    font-weight: 500;
  }

  p{
    left: 0;
    position: absolute;
    font-size: 20px;
    margin-top: 50px;
    margin-left: 30px;
    font-family:  Helvetica;
    color: black;
    justify-content: space-evenly;
    /* color: #bebebe; */
  }
  span {
    color: #bebebe;
    font-weight: 500;
  }
ul{
    position: absolute;
    left: 0; 
    margin-left: -45px;    
    bottom: 36px;
    align-items: center;
    color : black;
    
  }

`;

// Fixed DUPLICATION BUT NOW I NEED TO FIGURE OUT HOW TO REMOVE MARGINS





