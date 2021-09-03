import './featuredInfo.css';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { useState, useEffect } from "react";
import axios from "axios";

export default function FeaturedInfo() {
    const [cuscount, setCusCount] = useState();
    const [reqcount, setReqCount] = useState();
    const [ownercount, setOwnerCount] = useState();
    useEffect(() => {
        axios
          .get("http://localhost:3001/customers/findcustomers")
          .then((response) => {
            // console.log(response.data.count);
              setCusCount(response.data.count)
          });
        axios.get("http://localhost:3001/owners/findrequests").then((response) => {
            setReqCount(response.data.count);
        });
        axios
          .get("http://localhost:3001/viewowners/findrequests")
          .then((response) => {
            setOwnerCount(response.data.count);
          });
    }, [])
    return (
      <div className="featured">
        <div className="featuredItem">
          <NaturePeopleIcon
            className="featuredItemIcon"
            style={{ fontSize: 40 }}
          />
          <div className="featuredTitle">Current Active Park Owners</div>
          <div className="featuredNum">{ownercount}</div>
        </div>
        <div className="featuredItem-green">
          <LocalParkingIcon
            className="featuredItemIcon"
            style={{ fontSize: 40 }}
          />
          <div className="featuredTitle">Current Active Park Requests</div>
          <div className="featuredNum">{reqcount}</div>
        </div>
        <div className="featuredItem">
          <DriveEtaIcon className="featuredItemIcon" style={{ fontSize: 40 }} />
          <div className="featuredTitle">Current Active Customers</div>
          <div className="featuredNum">{cuscount}</div>
        </div>
      </div>
    );
}
