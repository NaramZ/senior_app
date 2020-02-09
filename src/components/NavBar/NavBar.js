import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Image from 'react-bootstrap/Image';
import profilePic from '../../assets/profilePic.jpg'
import classes from './NavBar.module.css';
class Navigation extends Component{
render(){
    return (
        <Navbar bg= 'white' expand ='lg'>
            <Navbar.Brand href="#home">Poison Picker</Navbar.Brand>
            <Navbar.Toggle aria-controls = 'basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className = 'd-inline p-2 bg-white text-black'
                    to = '/Home'>Home</NavLink>
                    <NavLink className = 'd-inline p-2 bg-white text-black'
                    to = '/Favorites'>Favorites</NavLink>
                    
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                 <Navbar.Text>
                        {/* <Image src={profilePic}  className= {classes.image}/>  */}
                        <a href="#login">Naram Ziady</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

}

export default Navigation;