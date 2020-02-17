import React from 'react';
import { StyledCard } from './Card.styled';
import Aux from '../../../hoc/Aux';
import Staricon from '@material-ui/icons/StarBorderOutlined'
const Card = (props) => {
  return (
            
            <Aux>
                <StyledCard>
                <div>
                  <img src = {props.Image1} alt = {props.Alt} />
                  <h3>{props.ItemTitle1}</h3>
                  <p>
                    <span>{props.Rating1}</span> {props.Category1}
                    </p>
                </div>
                <div>
                  <img src = {props.Image2} alt = {props.Alt} />
                  <h3>{props.ItemTitle2}</h3>
                  <p>{props.Category2}</p>
                </div>
                <div>
                  <img src = {props.Image3} alt = {props.Alt}/>
                  <h3>{props.ItemTitle3}</h3>
                  <p>{props.Category3}</p>
                </div>
                </StyledCard>
            </Aux>
            
                  
  )
}
export default Card;
