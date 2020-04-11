import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import '../../../Grid.scss';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider} from '@material-ui/core/styles';
import {GlobalColor} from '../../../MaterialTheme';
const LandingNav = () => {
    return (
        <Fragment>
            <MuiThemeProvider theme ={GlobalColor}>
                <div className = "boxGrid">
                    <div className= 'navContainerLanding-2'>
                        <NavLink to = "/">
                            <h6>Poison Picker</h6>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-4'>
                        <NavLink to = "/OurMission" exact>
                            <h6>Our Mission</h6>
                        </NavLink>
                    </div>
                    
                    <div className= 'navContainerLanding-5'>
                        <NavLink to="/Drinks">
                            <h6>Drinks</h6>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-6'>
                        <NavLink to="/Yourset">
                            <h6>Your Set</h6>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-7'>
                        <NavLink to="/Contactus">
                            <h6>Contact Us</h6>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-9'>
                        <NavLink to="/Login">
                            <h6>Log in</h6>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-10'>
                        <NavLink to="/SignUp">
                            <Button variant = "outlined" color = "secondary">
                                <h6>Sign Up</h6>
                            </Button>
                        </NavLink>
                    </div>
                </div>
                
                
            </MuiThemeProvider>
        </Fragment>
    )
}

export default LandingNav;
