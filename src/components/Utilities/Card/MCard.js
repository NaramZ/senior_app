import React from 'react';
import { StyledCard } from './Card.styled';
import Aux from '../../../hoc/Aux';
import Staricon from '@material-ui/icons/StarBorderOutlined'
const Card = (props) => {
  return (
            
            <Aux>
                <StyledCard>
                  <img src = {props.Image} alt = {props.Alt} />
                  <h3>{props.ItemTitle}</h3>
                  <p>
                    <Staricon/>
                    {props.Rating}
                    {props.Category}
                    </p>
                </StyledCard>
            </Aux>
            
                  
  )
}
export default Card;
