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
    padding: 0 50px;
    color: black;
    text-decoration: none;
}
    h4{
        font-family: 'Roboto Light';
        padding: 0 10px;
        :hover {
        text-shadow: 1px 5px 20px ${({theme}) => theme.primaryHover};
        }
    }
`;