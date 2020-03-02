import styled from 'styled-components';
export const StyledBar = styled.nav`


    position: absolute;
    display: flex;
    top: 5%;
    width: 100%;
    height: 2rem;
    
    ul{
    list-style-type: none;
    }
    li {
    float: left;
    
    
    }

    li a {
    flex-direction: space-between;
    display: flex;
    vertical-align: baseline;
    width: 100%;
    color: black;
    text-decoration: none;
    :hover {
            text-shadow: 0px 3px 0px #FCD561;
        }
    
}
    h5{
        font-family: 'Roboto Light';
        padding: 6px 3rem; 
    }

    h3 {
        font-family: 'Roboto Condensed';
        padding: 0 5rem;
        padding-right: 8rem;
        
    }
`;