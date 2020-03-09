import React from 'react';
import { StyledNavBar } from './NavBar.styled';
import Aux from '../../hoc/Aux';
import {FiUser} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
  return (
    <Aux>
    <StyledNavBar>
      <ul>
          <li>
              <h3>Naram</h3>
          </li>

          <li>
            <NavLink to = "/Menu"exact>
              <h5>Menu</h5>
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/Favorites">
                <h5>Favorites</h5>
            </NavLink>
          </li>
          
          <li>
            <NavLink to ="/History">
              <h5>History</h5>
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/Yourset">
              <h5>Your Set</h5>
            </NavLink>
          </li>

          <li>
              <button>
                <FiUser/>
              </button>
          </li>

          <li>
              <button>
                <h5>2</h5>
              </button>
          </li>
        </ul>
    </StyledNavBar>
    </Aux>
  )
}

export default Navigation;