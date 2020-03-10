import styled from 'styled-components';
export const StyledPgThree= styled.div`

ul{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(9, 1fr);
    gap: 32px;
    margin: 0;
    padding: 0;
    li {
    display: inline-block;
        :first-child{
            grid-column: 2/3;
            grid-row: 4;
        }
        :nth-child(2) {
        z-index:1;
        grid-column: 2/5;
        grid-row: 5;
        }
        :nth-child(3){
            z-index:1;
            grid-column: 5/9;
            grid-row: 3/8;
        }
    }
    div {
        display: inline-block;
        position: absolute;
        overflow: hidden;
        width: 30rem;
        height: 30rem;
        border: 1.2px solid #FCD561;
        border-radius: 0 24px;
        text-align: center;
        h2{
        font-size: 3em;
        letter-spacing: 8px;
        margin:0;
        font-family: "Roboto Condensed";
    }
    }
    img {
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 100%;
        right: 6px;
        z-index: 1;
    }
    

    h1 {
        font-size: 4em;
        letter-spacing: 8px;
        display: inline-block;
        margin: 0;
        z-index: 10;
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
        margin: 0 0 16px;
    }
}

`;