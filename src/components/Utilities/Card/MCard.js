import React from 'react';
import { StyledCard } from './Card.styled';
import Aux from '../../../hoc/Aux';

const Card = (props) => {
  return (
            
            <Aux>
                <StyledCard>
                <div>
                  <img src = {props.Image1} alt = {props.Alt} />
                </div>
                <div>
                  <img src = {props.Image2} alt = {props.Alt} />
                </div>
                <div>
                  <img src = {props.Image3} alt = {props.Alt}/>
                </div>
                </StyledCard>
            </Aux>
            
                  
  )
}
export default Card;
