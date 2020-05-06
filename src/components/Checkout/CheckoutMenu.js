import React, { Fragment} from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './CheckoutMenu.styled';
import {NavLink} from 'react-router-dom';
import Order from './SetCheckout';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider} from '@material-ui/core/styles';
import {GlobalColor} from '../../MaterialTheme';

const Menu = ({ open }) => {
  return (
    <Fragment>
      <MuiThemeProvider theme = {GlobalColor}>
      {/* {console.log("Hello there", product)} ***** This is rendering multiple times must fix*/}
      <StyledMenu open={open}>
        <NavLink to="/Checkout" exact>
          <span role="img" aria-label="Order">📝</span>
          <h5>My Order</h5>
        </NavLink>
        <Order/>
        <Button type="submit"
            fullWidth
            variant="outlined"
            color= "primary">
              Checkout
        </Button>
      </StyledMenu>
      </MuiThemeProvider>
    </Fragment>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;


