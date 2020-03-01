import styled from 'styled-components';
export const StyledNavBar = styled.nav`

  position: absolute;
  display: flex;
  z-index: 0;
  top: 5%;
  width: 100vh;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background:transparent;
  border: none;



h2 {
    font-size: 2rem;
    left: 10rem;
    position: absolute;
    font-family: Helvetica;
    z-index:0;
    font-weight: 400;
    opacity: ${({ open }) => open ? '0' : '1'};
    transition: all 0.3s linear;
    
  }
`;