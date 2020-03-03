import styled from 'styled-components';
export const StyledPgOne = styled.div`

    div{
        position: absolute;
        display: inline-flex;
        top: 90px;
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
    display: inline-block;
        :nth-child(2) {
        z-index:1;
        grid-column: 2/6; /*find a way to move a bit left*/
        grid-row: 11/12;
        }
        :nth-child(3){
            z-index:1;
            grid-column: 2/6;
            grid-row:17/18;
        }
        :nth-child(4){
            z-index:2;
            grid-column: 2/3;
            grid-row: 17/18;
            align-self: start;
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
            text-shadow: 10px 10px 0px rgba(251, 109, 58, 0.6);
        }
    }

    h5{
        font-family: 'Roboto Light';
        display: inline-block;
        margin: 0;
    }
    hr{
        border: 1.2px solid #FCD561;
    }
    svg{
        background-color: #FCD561;
        border-radius: 50%;
        width: 10px;
        height: 10px;
    }
}

`;