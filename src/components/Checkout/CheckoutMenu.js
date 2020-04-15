import React, { Fragment} from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './CheckoutMenu.styled';
import {NavLink} from 'react-router-dom';
import Order from './SetCheckout';



const Menu = ({ open }) => {
  return (
    <Fragment>
      {/* {console.log("Hello there", product)} ***** This is rendering multiple times must fix*/}
      <StyledMenu open={open}>
        <NavLink to="/Checkout" exact>
          <span role="img" aria-label="Order">📝</span>
          <h5>My Order</h5>
        </NavLink>
        <Order/>
      </StyledMenu>
    </Fragment>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;


