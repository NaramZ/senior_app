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
    right: 0;
    }
    li {
    float: left;
    }

    li a {
    flex-direction: space-between;
    display: flex;
    padding: 0 30px;
    color: black;
    text-decoration: none;
}
 h4{
     font-family: 'Roboto Light';
 }
`;