import React from 'react';
import { bool } from 'prop-types';
import Aux from '../../hoc/Aux';
import {StyledExpanding} from './ExpCard.styled';
import { MdFavoriteBorder } from "react-icons/md";
import WhiskeyImg from '../../assets/WhiskeyW.jpg';
import '../../Grid.scss';


const ExpCard = ({ openCard}) => {
    return (
        <Aux>
            <div>
                    <StyledExpanding openCard={openCard}>
                        <div className = "DivContainer transform">
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
                                <ol> <h5>Ingredients: </h5>
                                <hr/>
                                    <p>
                                        <li>Whiskey</li>
                                    </p>
                                    <p>
                                        <li>Muddling Sugar</li>
                                    </p>
                                    <p>
                                        <li>Citrus Rind</li>
                                    </p>
                                </ol>
                            </div>
                            <div>   
                                <button className="Addbutton">
                                    <p>
                                    Add +
                                    </p>
                                </button>
                                <button className="Favbutton">
                                <p>Favorite <MdFavoriteBorder/></p>
                                    </button>
                            </div>
                        </div>
                    </StyledExpanding>
            </div>
        </Aux>
    )
}
ExpCard.propTypes = {
    openCard: bool.isRequired,
}

export default ExpCard;