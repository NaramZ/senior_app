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
    const mystyle = {
        color: "black"
    };
    return (
        
        <Navbar>

            <Navbar.Collapse className="justify-content-start">
                <IconButton>
                    <MenuIcon style={mystyle} />
                </IconButton>
            </Navbar.Collapse>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-start">
                <Nav> 
                    <Navbar.Text style={mystyle}> Naram Ziady</Navbar.Text>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <IconButton>
                    <PersonIcon style={mystyle} />
                </IconButton>
            </Navbar.Collapse>
        </Navbar>
    )
}

}

export default Navigation;