import styled from 'styled-components';
export const StyledBar = styled.nav`


    position: absolute;
    display: inline-flex;
    top: 5%;
    z-index: 1;

    ul{
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 32px;
    margin: 0;
    padding: 0;
    
    li {
    display: inline;
    justify-self: center;
    align-self: center;
    :nth-child(1) {
        justify-self:center;
        grid-column: 2/4;
        }
    :nth-child(2) {
        grid-column: 5/7;
        justify-self: end;
        }
    :nth-child(6){
        justify-self:start;
        grid-column: 10/12;
    }
    :nth-child(7) {
        justify-self:end;
        grid-column: 15/16;
        }
    }

   
    
}
`;