import React from 'react';
import './sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MessageIcon from '@material-ui/icons/Message';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import MapIcon from '@material-ui/icons/Map';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitlle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HomeIcon/><Link to="/home" style={{ textDecoration: 'none', color: 'black', marginLeft: 5}}>Home</Link>
                        </li>
                        {/* <li className="sidebarListItem">
                            <AssessmentIcon/>Analytics
                        </li> */}
                        <li className="sidebarListItem">
                            <MessageIcon/><Link to="/requests" style={{ textDecoration: 'none', color: 'black', marginLeft: 5}}>Requests</Link>
                        </li>
                        {/* <li className="sidebarListItem">
                            <PersonAddIcon/>Add User
                        </li> */}
                        <li className="sidebarListItem">
                            <PeopleIcon/><Link to="/users" style={{ textDecoration: 'none', color: 'black', marginLeft: 5}}>View Owners</Link>
                        </li>
                        <li className="sidebarListItem">
                            <RecentActorsIcon/><Link to="/viewcustomers" style={{ textDecoration: 'none', color: 'black', marginLeft: 5}}>View Customers</Link>
                        </li>
                        <li className="sidebarListItem">
                            <MapIcon/><Link to="/viewmap" style={{ textDecoration: 'none', color: 'black', marginLeft: 5}}>View Map</Link>
                        </li>
                        <li className="sidebarListItem">
                            <CreditCardIcon/><Link to="/receivedpayments" style={{ textDecoration: 'none', color: 'black', marginLeft: 5}}>Recieved Payments</Link>
                        </li>
                        <li className="sidebarListItem">
                            <AssignmentIcon/><Link to="/reporthome" style={{ textDecoration: 'none', color: 'black', marginLeft: 5}}>Reports</Link>
                        </li>
                        <li className="sidebarListItem">
                            <EditIcon/><Link to="/changepassword" style={{ textDecoration: 'none', color: 'black', marginLeft: 5}}>Change Password</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
