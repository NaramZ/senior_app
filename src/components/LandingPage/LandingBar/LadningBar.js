import React from 'react';
import Aux from '../../../hoc/Aux';
import { StyledBar } from './LandingBar.styled';
import {NavLink} from 'react-router-dom';
const LandingNav = () => {

    return (
        <Aux>
            <StyledBar>
                <ul>
                    <li>
                        <NavLink to = "/Home">
                            <h3>Poison Picker</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/OurMission">
                            <h5>Our Mission</h5>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Pubs">
                            <h5>Pubs</h5>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Drinks">
                            <h5>Drinks</h5>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Yourset">
                            <h5>Your Set</h5>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contactus">
                            <h5>Contact Us</h5>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Login">
                            <h5>Log in</h5>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/SignUp">
                            <h5>
                                <button>Sign Up</button>
                            </h5>
                        </NavLink>
                    </li>
                </ul>
                
                
                
            </StyledBar>
        </Aux>
    )
}

export default LandingNav;
