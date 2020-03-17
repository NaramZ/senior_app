import React from 'react';
import Card from '../Card/MCard';
import { bool } from 'prop-types';
import Aux from '../../hoc/Aux';
import {StyledExpanding} from './ExpCard.styled';
import { FiStar } from "react-icons/fi";
import WhiskeyImg from '../../assets/WhiskeyW.jpg';
import TequilaImg from '../../assets/TequilaT.png';
import MohitoImg from '../../assets/mojito.jpg';
import '../../Grid.scss';


const ExpCard = ({ open, props }) => {
    return (
        <Aux >
            <div className= "boxGrid">
                    <StyledExpanding className= 'ExpandingContainer' open={open}>
                        <div className = "DivContainer">
                            <img src = {WhiskeyImg} alt = 'Whiskey'/>
                            <h3>Old Fashioned</h3>
                            <h2>6$</h2>
                            <div className = "DescriptionP">
                                <p>The old fashioned is a cocktail traditionally 
                                    served in an old fashioned glass (also known as rocks glass), 
                                    which predated the cocktail.
                                </p>
                            </div>
                            <div className="IngSec">
                                <ol> <h5><b>Ingridients: </b></h5>
                                <hr/>
                                    <li>
                                        <p>Whiskey</p>
                                    </li>
                                    <li>
                                        <p>Muddling Sugar</p>
                                    </li>
                                    <li>
                                        <p>Citrus Rind</p>
                                    </li>
                                </ol>
                            </div>
                            <div>   
                                <button className="Addbutton">Add +</button>
                                <button className="Favbutton">Favorite</button>
                            </div>
                        </div>
                    </StyledExpanding>
            </div>
        </Aux>
    )
}

export default ExpCard;