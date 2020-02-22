import styled from 'styled-components';
export const StyledNavBar = styled.nav`

  position: absolute;
  display: flex;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100vh;


h2 {
    font-size: 2rem;
    left: 10rem;
    top: 2.6rem;
    position: absolute;
    font-family: Helvetica;
    z-index:0;
    font-weight: 400;
    opacity: ${({ open }) => open ? '0' : '1'};
    transition: all 0.3s linear;
    
  }
`;