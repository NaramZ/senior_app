import styled from 'styled-components';
export const StyledExpanding = styled.div`

    /* transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'}; */
    transition: transform 0.3s ease-in-out;
    display: ${({ openCard }) => openCard ? 'block': 'none'};
    position: inherit;
    
    .DivContainer{
        display: inline-block;
        position: absolute;
        border: 2px solid #FCD561;
        border-radius: 24px 0;
        width: 50rem;
        height: 20rem;
        padding: 20px;
        box-shadow: 10px 10px 5px rgba(251, 109, 58, 0.1)
    }
    img{
        display: inline-block;
        position: relative;
        max-width: 50%;
        max-height: 60%;
        border-radius: 0 24px;
        box-shadow: 10px 10px 10px rgba(251, 109, 58, 0.1)
    }
    h3{
        display: inline;
        position: absolute;
        margin: 20px;
        top: 0;
    }
    .DescriptionP{
        position: relative;
        display: inline-table;
        width: 24rem;
        height: 11rem;
        margin-left: 20px;
        bottom: 20px;
    }
    h2{
        display: inline;
        position: absolute;
        color: #FCD561;
        margin: 10px;
        right: 0;
        top: 0;
    }
    .Addbutton{
        position: absolute;
        display: inline-block;
        right:0;
        bottom: 0;
        margin: 20px;
    }
    .Favbutton{
        position: absolute;
        right: 80px;
        bottom: 0;
        margin: 20px;

        :active{
            color: #FB6D3A
        }
        :hover{
            background: none;
        }
        
    }

    .IngSec{
        position: absolute;
        top: 12rem;
        width: 12rem;
        height: 8rem;
        left: -1rem;
        hr{
        width: inherit;
        margin: 7px 0 7px 0;
        }
        li{
        list-style: disc;
        list-style-position: inside;
        }
        p{
        }
      
    }
    


`;