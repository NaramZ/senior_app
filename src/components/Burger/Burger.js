
import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
import Aux from '../../hoc/Aux';
const Burger = ({ open, setOpen }) => {
  return (
    <Aux>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div/>
      <div />
      <h2>Naram</h2>
      
    </StyledBurger>
    </Aux>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;