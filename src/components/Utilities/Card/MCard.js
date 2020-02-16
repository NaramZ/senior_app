import React from 'react';
import { StyledCard } from './Card.styled';
import Aux from '../../../hoc/Aux';


const Card = (props) => {
  return (
    <Aux>
        <StyledCard >
            <img src= {props.Image}/>
        </StyledCard>
    </Aux>
  )
}
export default Card;
