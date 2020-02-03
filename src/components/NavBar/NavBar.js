import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

class Navigation extends Component{
render(){
    return (
        <Navbar bg= 'dark' expand ='lg'>
            <Navbar.Toggle aria-controls = 'basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav>
                    <NavLink className = 'd-inline p-2 bg-dark text-white'
                    to = '/'>Home</NavLink>
                    <NavLink className = 'd-inline p-2 bg-dark text-white'
                    to = '/Favorites'>Favorites</NavLink>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

}

export default Navigation;