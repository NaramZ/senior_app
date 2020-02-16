import styled from 'styled-components'; 
export const StyledCard= styled.div`


position: relative;
bottom: 10%;
left: 5%;
display: flex;
width: 25rem;
height: 15rem;
background : ${({theme}) => theme.primaryDark};
color: ${({ theme }) => theme.primaryDark};
border: none;
border-radius:25px;
cursor: pointer;
padding: 0;



z-index: 0;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);

img {
  height:100%;
  width: 100%;
}



:hover {
  box-shadow: 1px 5px 20px ${({theme}) => theme.primaryHover};
}
`;