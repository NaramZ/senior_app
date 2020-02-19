import styled from 'styled-components';
export const StyledNavBar = styled.div`

  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background:transparent;
  border: none;
  padding: 0;
  z-index: 0;




h2 {
    display: flex;
    position: absolute;
    left: 6rem;
    font-family: Helvetica;
    z-index:0;
    font-weight: 400;
    opacity: ${({ open }) => open ? '0' : '1'};
    transition: all 0.3s linear;
    
  }

ul {
    display: flex;
    position: absolute;
    left: 105rem;
}

p {
    display: flex;
    position: absolute;
    left: 113rem;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 15px;
    background: ${({ theme }) => theme.primaryHover};
    border-radius: 60px;
    
    }
`;