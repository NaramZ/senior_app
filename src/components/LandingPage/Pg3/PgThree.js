import React from 'react';
import Aux from './../../../hoc/Aux';
import {StyledPgThree} from './PgThree.styled';
import DrinkImg from '../../../assets/drink.jpg'
function PgThree() {
    return (
    <Aux>
        <StyledPgThree>
            <ul>
                <li>
                    <h1>Drinks</h1>
                </li>
                <li>
                    <h5>Choose for yourself the Drinks that you want</h5>
                </li>
                <li>
                    <div>
                        <h2>Mohito</h2>
                        <img src = {DrinkImg} />
                    </div>
                </li>
            </ul>
        </StyledPgThree>
    </Aux>
    )
};

export default PgThree;
