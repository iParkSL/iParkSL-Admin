import React from 'react';
import './topbar.css';
import logo from './logo.png';
import avatar from './avatar.png'
import { Navbar, Nav } from 'react-bootstrap';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


export default function Topbar() {
    return (
        <div>
        <Navbar className="topbar">
            <div className="container">
            <Navbar.Brand href="#home"><img src={logo} width="40" height="40"/>iParkSL</Navbar.Brand>
            {/* <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav> */}
                
            </div>
            <div className="icon-container">
                    <NotificationsIcon className="icon-container-item item1"/><span/>
                    <Avatar alt="Remy Sharp" src={avatar} className="icon-container-item"/>
                </div>
        </Navbar>
        </div>
    );
}
