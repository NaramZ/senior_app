import PersonIcon from "@material-ui/icons/PersonOutline";
import React from 'react';
import { StyledNavBar } from './NavBar.styled';
import Aux from '../../hoc/Aux';


const Navigation = () => {
  return (
    <Aux>
    <StyledNavBar>
      <h2>Naram</h2>
      <ul><PersonIcon  style={{ fontSize: 35 }}/></ul>
      <p>3</p>
    </StyledNavBar>
    
    

    </Aux>
  )
}

export default Navigation;