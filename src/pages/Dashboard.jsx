import '../assets/css/style.scss';
import {useParams, Navigate} from "react-router-dom";
import logo1 from "../assets/images/calories-icon.svg";
import ChartBar from "../components/Bar/ChartBar";
import ChartLine from "../components/Line/ChartLine";
import ChartPie from "../components/Pie/ChartPie";
import ChartRadar from "../components/Radar/ChartRadar";
import InfoCard from "../components/InfoCard/InfoCard";

function Dashboard({ data }) {
    let params = useParams();
    let user = data.find((element) => element.id === parseInt(params.id, 10));
    if (user === undefined) {
      return <Navigate to="/"/>
    }

    return (
        <div className={"dashboard"}>
            <div className={"dashboard-header"}>
                <h1 id="hello">Bonjour <span className='red'>{user.userInfos.firstName}</span></h1>
                <p id="congratulations-message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className={"dashboard-main"}>
                <div className={"charts"}>
                    <div className={"main-chart"}>
                        <ChartBar id={user.id} />
                    </div>
                    <div className={"secondary-chart"}>
                        <ChartLine id={user.id} />
                        <ChartRadar id={user.id} />
                        <ChartPie id={user.id} />
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