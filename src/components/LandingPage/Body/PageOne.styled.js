import styled from 'styled-components';
export const StyledPgOne = styled.div`

    div{
        position: absolute;
        display: inline-flex;
        background-color: black;
        top: 10%;
        width:83%;
        height: 60%;
        overflow:hidden;
        border-radius: 24px;
        left:8.8rem;
        z-index:0;
    }
    ul{
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    gap: 32px;
    margin: 0;
    padding: 0;

    li {
    display: inline;

        :nth-child(2) {
        z-index:1;
        justify-self: end;
        align-self: end;
        grid-column: 1/6;
        grid-row: 10/11;
        }
    }
    img {
    left: -0.2rem;
    top:-280px;
    position: absolute;
    display: inline-block;
    border-radius: 24px;
    }
    

    h1 {
        font-size: 4em;
        letter-spacing: 8px;
        display: inline-block;
        margin: 0;
        font-family: 'Roboto Condensed';
        :hover {
            text-shadow: 0px 3px 0px #FCD561;
        }
    }
}













  /* position: absolute;  
  display: inline-block;
  width:100rem;
  height: 40rem;
  left: 9rem;
  top:10%;
  z-index: 0;
  border-radius: 24px;
  overflow: hidden;

ul {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(12,1fr);
    background-color: red;
    grid-column: 2/14;
    grid-row: 1/10;
} */



`;