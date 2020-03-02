import styled from 'styled-components';
export const StyledAc = styled.nav`


    position: absolute;
    display: inline-flex;
    justify-content: space-between;
    top: 5%;
    right: 0;
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
    color: black;
    text-decoration: none;
    :hover {
            text-shadow: 0px 3px 0px #FCD561;
        }
}
 
 




`;