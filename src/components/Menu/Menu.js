import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">🏠</span>
        Home
      </a>
      <a href="/">
        <span role="img" aria-label="price">📝</span>
        Menu
        </a>
      <a href="/">
        <span role="img" aria-label="contact">📧</span>
        Contact
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;