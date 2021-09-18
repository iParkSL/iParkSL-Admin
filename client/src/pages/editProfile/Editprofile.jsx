
// import car from './business-man.jpg';
import "./editprofile.css";
import Topbar from '../../componnet/topbar/Topbar';
import Sidebar from '../../componnet/sidebar/Sidebar';
import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

toast.configure();

export default function Editprofile() {

    const history = useHistory();

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const changePassword = () => {
        axios.put(
            "http://localhost:3001/auth/changepassword",
            {
                oldPassword: oldPassword,
                newPassword: newPassword,
            },
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            }
        ).then((response) => {
            if (response.data.error) {
                //alert(response.data.error);
                toast.warn(response.data.error, { autoClose: 3000 });
            } else {
                //alert("Successfully Changed");
                toast.success("Change Success, Please Login with new Password", {
                  autoClose: 3000,
                });
                history.push("/");
            }
        });
    }

    
    return (
        <div className="fullcontainer">
            <Topbar/>
            <div className="containersidebar">
                <Sidebar/>
                <div className="editprofile">
                    <div className="editTitle"><h3>Change Password</h3></div>

                    <div className="editContainer">
                        <div className="row">
                            <div className="col">
                                <input type="password" className="form-control" placeholder="Old Password" onChange={ (event)=>{setOldPassword(event.target.value)}}/>
                            </div>
                            <div className="col">
                                <input type="password" className="form-control" placeholder="New Password" onChange={(event) => { setNewPassword(event.target.value) }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-warning" onClick={changePassword}>Change Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
