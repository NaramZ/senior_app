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
              <h6>Naram</h6>
          </div>
          <div className= 'navContainerMenu-4'>
            <NavLink to = "/Menu"exact>
              <h6>Menu</h6>
            </NavLink>
          </div>
          <div className= 'navContainerMenu-5'>
            <NavLink to ='YourSet'>
                <h6>Your Set</h6>
            </NavLink>
          </div>
          <div className= 'navContainerMenu-6'>
            <NavLink to ="/History">
              <h6>History</h6>
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