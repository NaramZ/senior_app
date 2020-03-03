import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="Menu">📝</span>
        Menu
        </a>
      <a href="/">
        <span role="img" aria-label="Favorites">📧</span>
        Favorites
      </a>
      <a href="/">
        <span role="img" aria-label="Set">📧</span>
        Your Set
      </a>
      <a href="/">
        <span role="img" aria-label="History">📧</span>
        History
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;