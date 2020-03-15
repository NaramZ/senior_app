import React from 'react';
import Aux from '../../../hoc/Aux';
import {NavLink} from 'react-router-dom';
import '../../../Grid.scss';
const LandingNav = () => {
    return (
        <Aux>
                <div className = "boxGrid">
                    <div className= 'navContainerLanding-2'>
                        <NavLink to = "/">
                            <h3>Poison Picker</h3>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-4'>
                        <NavLink to = "/OurMission" exact>
                            <h5>Our Mission</h5>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-5'>
                        <NavLink to = "/Pubs">
                            <h5>Pubs</h5>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-6'>
                        <NavLink to="/Drinks">
                            <h5>Drinks</h5>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-7'>
                        <NavLink to="/Yourset">
                            <h5>Your Set</h5>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-8'>
                        <NavLink to="/Contactus">
                            <h5>Contact Us</h5>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-9'>
                        <NavLink to="/Login">
                            <h5>Log in</h5>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-10'>
                        <NavLink to="/SignUp">
                            <h5>
                                <button>Sign Up</button>
                            </h5>
                        </NavLink>
                    </div>
                </div>
                
                
                
        </Aux>
    )
}

export default LandingNav;
