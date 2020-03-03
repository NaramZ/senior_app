import styled from 'styled-components'; 
export const StyledCard= styled.div`

  position: absolute;
  display: inline-flex;
  width: 22rem;
  height: 12rem;
  /* box-shadow: 0 1px 1px rgba(0,0,0,0.12); */
  z-index: 0;

  ul{
    display: grid;
    grid-template-rows: repeat(12,6rem);
    grid-template-columns: repeat(10, 11rem);
    margin: 0;
    padding: 0;
    li {
        display: inline-flex;
        z-index:1;
        
        :nth-child(3n+1){
          grid-column:2/3;
          grid-row: 2/3;
        }
        }
      

  

    img {
    width: 100%;
    height: 100%;
    position: absolute;
    display: inline-block;
    border-radius: 24px;
    }
  
  h3{
    position: relative;
    font-family: 'Roboto Mono';
    font-size: 30px;
    font-weight: 500;
  }

  }
  @media screen and (min-width: 620px) {
    
  }
  
`;






