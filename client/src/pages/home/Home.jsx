import './home.css';
// import '../../App.css';
import FeaturedInfo from '../../componnet/featuredInfo/FeaturedInfo';
import Chart from '../../componnet/chart/Chart';
import Topbar from '../../componnet/topbar/Topbar';
import Sidebar from '../../componnet/sidebar/Sidebar';

export default function Home() {
    return (
        
            <div className="fullcontainer">
            <Topbar/>
            <div className="containersidebar">
                <Sidebar/>
            
                <div className="home">
                    <FeaturedInfo/>
                    <Chart/>
                </div>
            </div>
            </div>
        
    )
}
