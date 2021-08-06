import './featuredInfo.css';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <NaturePeopleIcon className="featuredItemIcon" style={{ fontSize: 40 }}/>
                <div className="featuredTitle">Current Active Park Owners</div>
                <div className="featuredNum">18</div>
            </div>
            <div className="featuredItem">
                <LocalParkingIcon className="featuredItemIcon" style={{ fontSize: 40 }}/>
                <div className="featuredTitle">Current Active Parks</div>
                <div className="featuredNum">50</div>
            </div>
            <div className="featuredItem">
                <DriveEtaIcon className="featuredItemIcon" style={{ fontSize: 40 }} />
                <div className="featuredTitle">Current Active Customers</div>
                <div className="featuredNum">60</div>
            </div>
        </div>
    )
}
