import React from 'react';
import { StyledCard } from './Card.styled';
import Aux from '../../../hoc/Aux';
import { FiStar } from "react-icons/fi";
const Card = (props) => {
  return (
            
            <Aux>
                <StyledCard>
                  <img src = {props.Image} alt = {props.Alt} />
                  <h3>{props.ItemTitle}</h3>
                  <p>
                    <FiStar/>
                    {props.Rating}
                    {props.Category}
                    </p>
                </StyledCard>
            </Aux>
            
                  
  )
}
export default Card;
