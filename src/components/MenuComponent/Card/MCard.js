import React, {Fragment} from 'react';

const Card = (props) => {
  return (
            
    <Fragment>
            <img src = {props.Image} alt = {props.Alt} />
            <h3>{props.ItemTitle}</h3>
            <p>
              {props.Icon}
              {props.Rating}
              {props.Category}
            </p>
    </Fragment>
            
                  
  )
}
export default Card;
