import styled from 'styled-components';
export const StyledBar = styled.nav`


    position: absolute;
    display: inline-flex;
    justify-content: space-between;
    top: 5%;
    height: 2rem;
    
    ul{
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    flex-direction: space-between;
    gap: 34px;
    margin: 0;
    padding: 0px;
    
    li {
    display: inline;
    justify-self: center;
    align-self: center;
    :nth-child(1) {
        justify-self:start;
        grid-column: 2/4;
        }
    :nth-child(2) {
        grid-column: 6/7;
        }
    :nth-child(7) {
        grid-column: 13/14;
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
    background: none;
    border: 2px solid #FCD561;
    text-align: center;
    :hover {
        background: #FCD561;
    }
    }
}
`;