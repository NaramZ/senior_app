import React from 'react';
import Aux from '../../hoc/Aux';
import {FiUser} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';
import '../Card/Grid.scss';
const Navigation = () => {
  return (
    <Aux>
      <div className = "boxGrid">
          <div className= 'navContainer-2's>
              <h3>Naram</h3>
          </div>

          <div className= 'navContainer-4'>
            <NavLink to = "/Menu"exact>
              <h5>Menu</h5>
            </NavLink>
          </div>
          
          <div className= 'navContainer-5'>
            <NavLink to="/Favorites">
                <h5>Favorites</h5>
            </NavLink>
          </div>
          
          <div className= 'navContainer-6'>
            <NavLink to ="/History">
              <h5>History</h5>
            </NavLink>
          </div>
          
          <div className= 'navContainer-7'>
            <NavLink to="/Yourset">
              <h5>Your Set</h5>
            </NavLink>
          </div>

          <div className= 'navContainer-9'>
              <button>
                <FiUser/>
              </button>
          </div>
        </div>
    </Aux>
  )
}

export default Navigation;