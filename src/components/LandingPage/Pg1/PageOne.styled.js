import styled from 'styled-components';
export const StyledPgOne = styled.div`

    ul{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 32px;
    margin: 0;
    padding: 0;
    li {
    display: inline-block;
        :first-child{
            grid-column: 2/12;
            grid-row: 1;
            align-self: end;
        }
        :nth-child(2) {
        z-index:1;
        grid-column: 2/7;
        grid-row: 3;
        }
        :nth-child(3){
            z-index:1;
            grid-column: 2/7;
            align-self: center;
            grid-row-start: 5;
        }
        :nth-child(4){
            z-index:2;
            grid-column: 2/3;
            grid-row: 4;
            align-self: start;
        }
    }
    div {
        display: inline-block;
        position: absolute;
        overflow: hidden;
        width: 80%;
        height: 60%;
        border-radius: 24px;
        grid-row-start: 2;
    }
    img {
        position: absolute;
        display: inline-block;
        border-radius: 24px;
        top: -60%;
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
        margin:0;
    }
    svg{
        background-color: #FCD561;
        border-radius: 50%;
        width: 10px;
        height: 10px;
    }
}

`;