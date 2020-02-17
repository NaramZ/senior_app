import styled from 'styled-components'; 
export const StyledCard= styled.div`


  position: absolute;
  bottom: 5%;
  left: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
    transform-origin: 1px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 0;
    z-index: 0;
    border: none;

    cursor: pointer;

  :hover {
  box-shadow: 1px 5px 20px ${({theme}) => theme.primaryHover};
  }
}
img {
  width:100%;
  height: 100%;


}
`;






