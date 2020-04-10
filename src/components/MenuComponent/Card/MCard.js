import React from 'react';
import Aux from '../../hoc/Aux';

const Card = (props) => {
  return (
            
    <Aux>
            <img src = {props.Image} alt = {props.Alt} />
            <h3>{props.ItemTitle}</h3>
            <p>
              {props.Icon}
              {props.Rating}
              {props.Category}
            </p>
    </Aux>
            
                  
  )
}
export default Card;
