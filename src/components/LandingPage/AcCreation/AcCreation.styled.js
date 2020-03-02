import styled from 'styled-components';
export const StyledAc = styled.nav`


    position: absolute;
    display: flex;
    top: 5%;
    left: 80%;
    width: 100%;
    height: 2rem;
    
    ul{
    list-style-type: none;
    }
    li {
    float: left;
    }

    li a {
    display: flex;
    padding: 6px 10px;
    color: black;
    text-decoration: none;
    :hover {
            text-shadow: 0px 3px 0px #FCD561;
        }
}
 h5{
     font-family: 'Roboto Light';
 }



`;