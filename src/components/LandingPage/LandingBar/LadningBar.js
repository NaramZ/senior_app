import React from 'react';
import Aux from '../../../hoc/Aux';
import {NavLink} from 'react-router-dom';
import '../../../Grid.scss';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider} from '@material-ui/core/styles';
import {GlobalColor} from '../../../MaterialTheme';
const LandingNav = () => {
    return (
        <Aux>
            <MuiThemeProvider theme ={GlobalColor}>
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
                            <Button variant = "outlined" color = "secondary">
                                <h5>Sign Up</h5>
                            </Button>
                        </NavLink>
                    </div>
                </div>
                
                
            </MuiThemeProvider>
        </Aux>
    )
}

export default LandingNav;
