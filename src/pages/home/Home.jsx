import './home.css';
import FeaturedInfo from '../../componnet/featuredInfo/FeaturedInfo';
import Chart from '../../componnet/chart/Chart';

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart/>
        </div>
    )
}
