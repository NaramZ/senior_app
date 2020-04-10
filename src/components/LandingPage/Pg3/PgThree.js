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
                    <h5>Choose for yourself the Drinks that you want</h5>
                </div>
                
                <div className = "LandingContainerThree-3">
                        <img src = {DrinkImg} alt= "firstimg" />
                </div>
                <div className = "LandingContainerThree-4">
                    <h2>Mohito</h2>
                </div>
                <div className = "LandingContainerThree-5">
                    <h2>Tequila</h2>
                </div>
               
            </div>
        </StyledPgThree>
    </Fragment>
    )
};

export default PgThree;
