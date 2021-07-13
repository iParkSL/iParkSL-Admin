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

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitlle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HomeIcon/>Home
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentIcon/>Analytics
                        </li>
                        <li className="sidebarListItem">
                            <MessageIcon/>Requests
                        </li>
                        <li className="sidebarListItem">
                            <PersonAddIcon/>Add User
                        </li>
                        <li className="sidebarListItem">
                            <PeopleIcon/>View User
                        </li>
                        <li className="sidebarListItem">
                            <RecentActorsIcon/>View Customer
                        </li>
                        <li className="sidebarListItem">
                            <MapIcon/>View Map
                        </li>
                        <li className="sidebarListItem">
                            <CreditCardIcon/>Recieved Payments
                        </li>
                        <li className="sidebarListItem">
                            <AssignmentIcon/>Reports
                        </li>
                        <li className="sidebarListItem">
                            <EditIcon/>Edit Profile
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
