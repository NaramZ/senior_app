import React from 'react';
import Aux from '../../../hoc/Aux';
import LandingImg from '../../../assets/LandingImage.png';
import {StyledPgOne} from './PageOne.styled';
const PgOne = () => {
    return (
        <Aux>
            <StyledPgOne>
                    <ul>
                        <li>
                            <div>
                                <img src ={LandingImg} alt = "First Land"/>
                            </div>
                        </li>
                        <li>
                            <h1>Your Drinking Experience</h1>
                        </li>
                        <li>
                            <hr/>
                            <h5>
                                <b>Drinking</b> is like life, sometimes it's fun and sometimes it's dull, but alcohol makes you 
                                forget the dull times ever happened.
                            </h5>
                        </li>
                        <li>
                            <svg/>
                        </li>
                    </ul>
            </StyledPgOne>
        </Aux>
    )
}

export default PgOne;