import styled from 'styled-components';
export const StyledPgFour= styled.div`

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
            grid-column: 9/12;
            grid-row: 4;
        }
        :nth-child(2) {
            z-index:1;
            grid-column: 9/12;
            text-align: center;
            grid-row: 5;
        }
        :nth-child(3){
            grid-column: 2/4;
            grid-row: 2;
            img{
                right: 0;
                height: 100%;
                top:-30%;
            }
            h2{
                position: absolute;
                left : -60px;
                top: 10%;
            }
            h5{
                position:absolute;
                left: 10px;
                top: 45%;
                text-align: start;
            }
        }
        :nth-child(4){
            grid-column: 6/8;
            grid-row: 2/ span 6;
            div{
                height: 40rem;
            }
            img {
                right: 0;
                top: -10%;
            }
            h2{
                position: absolute;
                right: 15%;
                top: 50%;
            }
            h5{
                position:absolute;
                left: 10px;
                top: 65%;
                text-align: start;
            }
        }
        :nth-child(5){
            grid-column: 2/6;
            grid-row: 6;
            div{
                width: 30rem;
            }
            img {
                right: 0;
                top: -10%;
                width: 50%;
                height: 70%;
            }
            h2{
                position: absolute;
                left: -60px;
                width: 300px;
                text-align: justify;
                top: 10%;
            }
            h5{
                position:absolute;
                left: 10px;
                top: 65%;
                text-align: start;
            }
        }
        
    }
    div {
        display: inline-block;
        position: absolute;
        width: 20rem;
        height: 20rem;
        border: 1px solid #FCD561;
        border-radius: 0 24px;
        text-align: center;
        
    }
    img {
        display: inline-block;
        position: absolute;
        width: auto;
        height: auto;
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
    h2{
        font-size: 3em;
        letter-spacing: 8px;
        margin:0;
        font-family: "Roboto";
    }
    hr{
        border: 1.2px solid #FCD561;
        margin: 0 0 16px;
    }
}

`;