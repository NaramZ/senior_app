import React from 'react';
import Aux from '../../../hoc/Aux';
import LandingImg from '../../../assets/LandingImage.png';
import {StyledPgOne} from './PageOne.styled';
const PgOne = () => {
    return (
        <Aux>
            <StyledPgOne>
                    <img src ={LandingImg}/>
            </StyledPgOne>
        </Aux>
    )
}

export default PgOne;