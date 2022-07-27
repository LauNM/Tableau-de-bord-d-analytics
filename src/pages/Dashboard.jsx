import '../assets/css/style.scss';
import logo1 from "../assets/images/calories-icon.svg";
import ChartBar from "../components/Bar/ChartBar";
import ChartLine from "../components/Line/ChartLine";
import ChartPie from "../components/Pie/ChartPie";
import ChartRadar from "../components/Radar/ChartRadar";
import InfoCard from "../components/InfoCard/InfoCard";

function Dashboard({ id = null, name = '' }) {
    return (
        <div className={"dashboard"}>
            <div className={"dashboard-header"}>
                <h1 id="hello">Bonjour <span className='red'>{name}</span></h1>
                <p id="congratulations-message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className={"dashboard-main"}>
                <div className={"charts"}>
                    <div className={"main-chart"}>
                        <ChartBar id={id} />
                    </div>
                    <div className={"secondary-chart"}>
                        <ChartLine id={id} />
                        <ChartRadar id={id} />
                        <ChartPie id={id} />
                    </div>
                </div>
                <div className={"numbers-info"}>
                    <InfoCard text={'1.930kCal'} category={'Calories'}>
                        <img src={logo1} alt="" />
                    </InfoCard>
                    <InfoCard text={'1.930kCal'} category={'Calories'}>
                        <img src={logo1} alt="" />
                    </InfoCard>
                    <InfoCard text={'1.930kCal'} category={'Calories'}>
                        <img src={logo1} alt="" />
                    </InfoCard>
                    <InfoCard text={'1.930kCal'} category={'Calories'}>
                        <img src={logo1} alt="" />
                    </InfoCard>
                </div>
            </div>
        </div>

    )
}

export default Dashboard;