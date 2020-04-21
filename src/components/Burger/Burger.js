
import React, {Fragment} from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen }) => {
  return (
    <Fragment>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </StyledBurger>
    </Fragment>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;