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
                            <h3>Poison Picker</h3>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-4'>
                        <NavLink to = "/OurMission" exact>
                            <h4>Our Mission</h4>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-5'>
                        <NavLink to = "/Pubs">
                            <h4>Pubs</h4>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-6'>
                        <NavLink to="/Drinks">
                            <h4>Drinks</h4>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-7'>
                        <NavLink to="/Yourset">
                            <h4>Your Set</h4>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-8'>
                        <NavLink to="/Contactus">
                            <h4>Contact Us</h4>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-9'>
                        <NavLink to="/Login">
                            <h4>Log in</h4>
                        </NavLink>
                    </div>
                    <div className= 'navContainerLanding-10'>
                        <NavLink to="/SignUp">
                            <Button variant = "outlined" color = "secondary">
                                <h4>Sign Up</h4>
                            </Button>
                        </NavLink>
                    </div>
                </div>
                
                
            </MuiThemeProvider>
        </Fragment>
    )
}

export default LandingNav;
