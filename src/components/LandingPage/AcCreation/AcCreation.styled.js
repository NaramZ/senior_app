import styled from 'styled-components';
export const StyledAc = styled.nav`


    position: absolute;
    display: flex;
    top: 5%;
    right: 0;
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
 button {
    font-family: 'Roboto Light';
    border-radius: 24px;
    background: #FCD561;
    border: 10px #FCD561;
    width: 100%;
    height: 100%;
    text-align: center;
    cursor: pointer;
    }




`;