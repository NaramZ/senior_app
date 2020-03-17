import styled from 'styled-components';
export const StyledExpanding = styled.div`

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
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.034)
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
    }

    .IngSec{
        position: absolute;
        top: 11rem;
        width: 11rem;
        height: 8rem;
        hr{
        width: inherit;
        }
        li{

        }
    }
    


`;