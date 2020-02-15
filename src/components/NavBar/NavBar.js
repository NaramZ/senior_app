import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/PersonOutline";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import Button from '@material-ui/core/Button/Button';


class Navigation extends Component{
render(){
    return (
        <Navbar>
            <IconButton aria-label="add to favorites">
                <MenuIcon/>
            </IconButton>
            
            <Navbar.Toggle aria-controls = 'basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav> 
                    <Navbar.Text> Naram Ziady</Navbar.Text>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                    
                
            </Navbar.Collapse>
        </Navbar>
    )
}

}

export default Navigation;