import styled from 'styled-components';
export const StyledBar = styled.nav`


    position: absolute;
    display: inline-flex;
    justify-content: space-between;
    top: 5%;
    left: 0;
    height: 2rem;
    
    ul{
    list-style-type: none;
    display: inline-block;
    flex-direction: space-between;
    }
    li {
    display: inline;
    }

    a {
    display: inline-flex;
    flex-direction: space-between;
    color: black;
    text-decoration: none;
    
    
}
    h5{
        font-family: 'Roboto Light';
        
        display: inline-block; 
        :hover {
            text-shadow: 0px 3px 0px #FCD561;
        }
    }

    h3 {
        display: inline-block; 
        font-family: 'Roboto Condensed';
        :hover {
            text-shadow: 0px 3px 0px #FCD561;
        }
    }
`;