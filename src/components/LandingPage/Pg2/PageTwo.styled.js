import styled from 'styled-components';
export const StyledPgTwo= styled.div`

ul{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 32px;
    margin: 0;
    padding: 0;
    li {
    display: inline-block;
        :first-child{
            grid-column: 1/12;
            grid-row: 6;
        }
        :nth-child(2) {
        z-index:1;
        grid-column: 5/8;
        grid-row: 2;
        }
        :nth-child(3){
            z-index:1;
            grid-column: 4/9;
            grid-row-start: 3;
            text-align: center;
        }
    }
    div {
        display: inline-block;
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 40%;
        border-radius: 24px; 
    }
    img {
        position: absolute;
        display: inline-block;
        border-radius: 24px;
        top: -650px;
        width: 100%;
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
        margin: 0 0 16px;
    }
}
`;