import styled from 'styled-components';
export const StyledNavBar = styled.nav`

    position: absolute;
    display: inline-flex;
    top: 5%;
    z-index: 1;

    ul{
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    flex-direction: space-between;
    gap: 32px;
    margin: 0;
    padding: 0;
    
    li {
    display: inline;
    justify-self: center;
    align-self: center;
    :nth-child(1) {
        justify-self:center;
        grid-column: 3/4;
        }
    :nth-child(2) {
        grid-column: 7/8;
        }
    :nth-child(6) {
        justify-self:end;
        grid-column: 15/16;
        }
    :nth-child(7) {
        justify-self:start;
        grid-column: 16/17;
        }
    }

    a {
    display: inline-block;
    flex-direction: space-between;
    color: black;
    text-decoration: none;
    text-align: center;
}
    h5{
        font-family: 'Roboto Light';
        display: inline-block;
        margin: 0;
        :hover {
            text-shadow: 0px 3px 0px #FCD561;
        }
    }

    h3 {
        display: inline-block;
        margin: 0;
        font-family: 'Roboto Condensed';
        :hover {
            text-shadow: 0px 3px 0px #FCD561;
        }
    }
    button {
    font-family: 'Roboto Light';
    display: inline-block; 
    border-radius: 24px;
    background: #FCD561;
    border: 2px solid #FCD561;
    text-align: center;
    }

    svg{
        background-color: #FCD561;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        
    }
}
`;