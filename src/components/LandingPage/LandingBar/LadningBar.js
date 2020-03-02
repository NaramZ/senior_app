import React from 'react';
import Aux from '../../../hoc/Aux';
import { StyledBar } from './LandingBar.styled';

const LandingNav = () => {

    return (
        <Aux>
            <StyledBar>
                <ul>
                    <li>
                        <a href = "#Home">
                            <h3>Poison Picker</h3>
                        </a>
                    </li>
                    <li>
                        <a href="#OurMission">
                            <h5>Our Mission</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#Pubs">
                            <h5>Pubs</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#Drinks">
                            <h5>Drinks</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#Yourset">
                            <h5>Your Set</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#Contactus">
                            <h5>Contact Us</h5>
                        </a>
                    </li>
                </ul>
                
                
                
            </StyledBar>
        </Aux>
    )
}

export default LandingNav;
