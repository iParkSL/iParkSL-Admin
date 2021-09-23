import React from 'react';
import './topbar.css';
import logo from './logo.png';
import avatar from './avatar.png'
import { Navbar, Nav } from 'react-bootstrap';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { AuthContext } from '../../helpers/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

toast.configure();

export default function Topbar() {

    const [authState, setAuthState] = useState(false);

    let history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:3001/auth/auth",{
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response)=>{
            if(response.data.error){
                setAuthState(false);
            }
            else {
                setAuthState(true);
            }
        });
    });

    const logout = () =>{
        localStorage.removeItem("accessToken");
        setAuthState(false);
        toast.success("Logout Success", {
          autoClose: 1000,
        });
        history.push("/");
         };

    return (
        <AuthContext.Provider value={{authState, setAuthState}}>
        <div>
        <Navbar className="topbar">
            <div className="container">
            <Navbar.Brand href="#home"><img src={logo} width="40" height="40"/>iParkSL</Navbar.Brand>
            {/* <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav> */}
            
            {!authState ? (
                <>
                </>
            ) : (
                <button onClick={logout} className="logoutButton">Logout</button>
            ) }
            
            </div>
            {/* <div className="icon-container">
                    <NotificationsIcon className="icon-container-item item1"/><span/>
                    <Avatar alt="Remy Sharp" src={avatar} className="icon-container-item"/>
                </div> */}
        </Navbar>
        </div>
        </AuthContext.Provider>
    );
}
