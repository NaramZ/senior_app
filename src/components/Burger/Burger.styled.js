import styled from 'styled-components';
export const StyledBurger = styled.button`

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
  cursor: pointer;
  padding: 0;
  z-index: 10;
    :hover {
        background: none;
    }
  &:focus {
    outline: none;
    
  }

  
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
    width: 3rem;
    height: 2rem;
    border-radius: 25px;
    position: absolute;
    left: 25rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12);
    padding: 0;
    z-index: 0;
    border: none;
    cursor: pointer;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryLight : theme.primaryDark};
    border-radius: 24px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)': 'rotate(0)'};

    }
    

    :nth-child(2) {
      transform: ${({ open }) => open ? 'rotate(-45deg) translateY(4px) translateX(-10px)' : 'rotate(0) translateY(0) translateX(10px)'};
    }

   
  }
`;


//FIX THE X