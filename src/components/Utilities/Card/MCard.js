import React from 'react';
import { StyledCard } from './Card.styled';
import Aux from '../../../hoc/Aux';

const Card = (props) => {
  return (
            
            <Aux>
                <StyledCard>
                <div>
                  <img src = {props.Image1} alt = {props.Alt} />
                  <p>{props.ItemTitle1}</p>
                </div>
                <div>
                  <img src = {props.Image2} alt = {props.Alt} />
                  <p>{props.ItemTitle2}</p>
                </div>
                <div>
                  <img src = {props.Image3} alt = {props.Alt}/>
                  <p>{props.ItemTitle3}</p>
                </div>
                </StyledCard>
            </Aux>
            
                  
  )
}
export default Card;
