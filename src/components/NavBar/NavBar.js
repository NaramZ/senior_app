import React from 'react';
import { StyledNavBar } from './NavBar.styled';
import Aux from '../../hoc/Aux';
import {FiUser} from 'react-icons/fi';
const Navigation = () => {
  return (
    <Aux>
    <StyledNavBar>
      <ul>
          <li>
              <h3>Naram</h3>
          </li>

          <li>
            <a href="/Menu">
              <h5>Menu</h5>
            </a>
          </li>
          
          <li>
            <a href="/Favorites">
                <h5>Favorites</h5>
            </a>
          </li>
          
          <li>
            <a href="/History">
              <h5>History</h5>
            </a>
          </li>
          
          <li>
            <a href="/Yourset">
              <h5>Your Set</h5>
            </a>
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