import React, {Fragment} from 'react';
import {StyledPgThree} from './PgThree.styled';
import DrinkImg from '../../../assets/drink.jpg'
import '../../../Grid.scss';
function PgThree() {
    return (
    <Fragment>
        <StyledPgThree>
            <div className = "LandingGrid">
                <div className = "LandingContainerThree-1">
                    <h1>Drinks</h1>
                </div>
                <div className = "LandingContainerThree-2">
                    <hr/>
                    <h6>Choose for yourself the Drinks that you want</h6>
                </div>
                
                <div className = "LandingContainerThree-3">
                        <img src = {DrinkImg} alt= "firstimg" />
                </div>
                <div className = "LandingContainerThree-4">
                    <h3>Mohito</h3>
                </div>
                <div className = "LandingContainerThree-5">
                    <h3>Tequila</h3>
                </div>
               
            </div>
        </StyledPgThree>
    </Fragment>
    )
};

export default PgThree;
