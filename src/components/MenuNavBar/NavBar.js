import React from 'react';
import Aux from '../../hoc/Aux';
import {FiUser} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';
import '../../Grid.scss';
const Navigation = () => {
  return (
    <Aux>
      <div className = "boxGrid">
          <div className= 'navContainerMenu-2'>
              <h3>Naram</h3>
          </div>

          <div className= 'navContainerMenu-4'>
            <NavLink to = "/Menu"exact>
              <h5>Menu</h5>
            </NavLink>
          </div>
          
          <div className= 'navContainerMenu-5'>
            <NavLink to="/YourSet">
                <h5>Your Set</h5>
            </NavLink>
          </div>
          
          <div className= 'navContainerMenu-6'>
            <NavLink to ="/History">
              <h5>History</h5>
            </NavLink>
          </div>

          <div className= 'navContainerMenu-9'>
              <button>
                <FiUser/>
              </button>
          </div>
        </div>
    </Aux>
  )
}

export default Navigation;