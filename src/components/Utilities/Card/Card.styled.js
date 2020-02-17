import styled from 'styled-components'; 
export const StyledCard= styled.div`


  position: absolute;
  bottom: 10%;
  left: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: transparent;
  border-radius:25px;
  margin:20px;
  width:100rem;
  height: 15rem;
  
  
div {
    width: 25rem;
    height: 15rem;
    border-radius: 25px;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12);
    padding: 0;
    z-index: 0;
    border: none;
    cursor: pointer;

  :hover {
  box-shadow: 1px 5px 20px ${({theme}) => theme.primaryHover};
  }
  img {
  width:100%;
  height: 100%;
  border-radius:25px;
  }
  p{
    margin: 15px;
    position: absolute;
    font-family: 'Averta Bold';
    font-size: 30px;
    font-weight: 500;
  }

  
}
`;

//image is displaying twice, when you remove border-radius on img it will show, FIX






