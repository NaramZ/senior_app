import React from 'react';
import Aux from '../../../hoc/Aux';
import LandingImg from '../../../assets/LandingImage.png';
import {StyledPgOne} from './PageOne.styled';
const PgOne = () => {
    return (
        <Aux>
            <StyledPgOne>
                    <ul>
                        <div>
                            <li>
                                <img src ={LandingImg} alt = "First Land"/>
                            </li>
                        </div>
                        <li>
                            <h1>Your Drinking Experience</h1>
                        </li>
                    </ul>
            </StyledPgOne>
        </Aux>
    )
}

export default PgOne;