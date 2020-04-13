import styled from 'styled-components';
export const StyledMenu = styled.nav`

  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryHover};
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    
  }

  a {
    margin-top: 25px;
    font-size: 1.5rem;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      text-align: center;
    }
  }
`;