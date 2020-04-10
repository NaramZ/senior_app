import React, {Fragment} from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {NavLink} from 'react-router-dom';
import '../../../Grid.scss';
import IconButton from '@material-ui/core/IconButton';
import { MuiThemeProvider} from '@material-ui/core/styles';
import {GlobalColor} from '../../../MaterialTheme';
const Navigation = () => {
  return (
    <Fragment>
      <MuiThemeProvider theme = {GlobalColor}>
      <div className = "boxGrid">
          <div className= 'navContainerMenu-2'>
              <h3>Naram</h3>
          </div>

          <div className= 'navContainerMenu-4'>
            <NavLink to = "/Menu"exact>
              <h5>Menu</h5>
            </NavLink>
          </div>
          
          <div className= 'navContainerMenu-5'>
            <NavLink to="/YourSet">
                <h5>Your Set</h5>
            </NavLink>
          </div>
          
          <div className= 'navContainerMenu-6'>
            <NavLink to ="/History">
              <h5>History</h5>
            </NavLink>
          </div>

          <div className= 'navContainerMenu-9'>
              <IconButton color = "primary" size="medium">
                <AccountCircle fontSize="large"/>
              </IconButton>
          </div>
        </div>
      </MuiThemeProvider>
    </Fragment>
  )
}

export default Navigation;