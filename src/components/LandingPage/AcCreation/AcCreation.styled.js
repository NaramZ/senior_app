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
    padding: 6px 10px;
    color: black;
    text-decoration: none;
    :hover {
            text-shadow: 0px 3px 0px #FCD561;
        }
}
 h5{
     display: inline-block;
     font-family: 'Roboto Light';
     
 }
 button {
    font-family: 'Roboto Light';
    display: inline-block; 
    border-radius: 24px;
    background: none;
    border: 2px solid #FCD561;
    padding: 6px 12px;
    text-align: center;
    :hover {
        background: #FCD561;
    }
    }




`;