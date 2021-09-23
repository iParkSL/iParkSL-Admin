import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../../componnet/topbar/Topbar";
import Sidebar from "../../componnet/sidebar/Sidebar";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import './reporthome.css';

export default function ReportHome() {
  return (
    <div className="fullcontainer">
      <Topbar />
      {/* <div className="reportcontainer"> */}
      <div className="containersidebar">
        <Sidebar />
        {/* <div className="editTitle">
          <h3>Change Password</h3>
        </div> */}
        <div className="featured-container">
          <div className="featured">
            <div className="featuredItem">
              <NaturePeopleIcon
                className="featuredItemIcon"
                style={{ fontSize: 40 }}
              />
              <div className="featuredTitle">
                <Link
                  to="/reportpayment"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Received Payment Report
                </Link>
              </div>
            </div>
            <div className="featuredItem">
              <LocalParkingIcon
                className="featuredItemIcon"
                style={{ fontSize: 40 }}
              />
              <div className="featuredTitle">
                <Link
                  to="/reportcustomer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Customer Report
                </Link>
              </div>
            </div>
            <div className="featuredItem">
              <DriveEtaIcon
                className="featuredItemIcon"
                style={{ fontSize: 40 }}
              />
              <div className="featuredTitle">
                <Link
                  to="/reportowner"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Park Owners Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
