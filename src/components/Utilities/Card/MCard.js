import React from 'react';
import { StyledCard } from './Card.styled';
import Aux from '../../../hoc/Aux';


const Card = (props) => {
  return (
    <Aux>
        <StyledCard>
            <div>
            <img src= {props.Image} alt='Item'/>
            </div>
        </StyledCard>
        
    </Aux>
  )
}
export default Card;
