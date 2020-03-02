import styled from 'styled-components';
export const StyledPgOne = styled.nav`

position: absolute;
display: grid;
grid-template-columns: repeat(14, 1fr);
gap: 32px;
border-radius: 25px;
width: 100%;
height: 100%;
justify-self: start;
margin:0;
padding:0;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    grid-column: 2/12;
    grid-row: 3/14;
  
}
`;