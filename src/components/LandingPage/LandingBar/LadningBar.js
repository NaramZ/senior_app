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
                            <h4>Our Mission</h4>
                        </a>
                    </li>
                    <li>
                        <a href="#Pubs">
                            <h4>Pubs</h4>
                        </a>
                    </li>
                    <li>
                        <a href="#Drinks">
                            <h4>Drinks</h4>
                        </a>
                    </li>
                    <li>
                        <a href="#Yourset">
                            <h4>Your Set</h4>
                        </a>
                    </li>
                    <li>
                        <a href="#Contactus">
                            <h4>Contact Us</h4>
                        </a>
                    </li>
                </ul>
                
                
                
            </StyledBar>
        </Aux>
    )
}

export default LandingNav;
