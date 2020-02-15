import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/PersonOutline";
import MenuIcon from "@material-ui/icons/MenuOutlined";


class Navigation extends Component{
render(){
    const mystyle = {
        color: "black"
    };
    return (
        
        <Navbar>
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