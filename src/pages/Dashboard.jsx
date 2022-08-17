import '../assets/css/style.scss';
import {useParams, Navigate} from "react-router-dom";
import calories from "../assets/images/calories-icon.svg";
import proteines from "../assets/images/protein-icon.svg";
import glucides from "../assets/images/carbs-icon.svg";
import lipides from "../assets/images/fat-icon.svg";
import ChartBar from "../components/Bar/ChartBar";
import ChartLine from "../components/Line/ChartLine";
import ChartPie from "../components/Pie/ChartPie";
import ChartRadar from "../components/Radar/ChartRadar";
import InfoCard from "../components/InfoCard/InfoCard";
import { user } from "../api/fetchMockData";

function Dashboard() {
    let params = useParams();
    let currentUser = user.find((element) => element.id === parseInt(params.id, 10));
    if (currentUser === undefined) {
      return <Navigate to="/"/>
    }

    return (
        <div className={"dashboard"}>
            <div className={"dashboard-header"}>
                <h1 id="hello">Bonjour <span className='red'>{currentUser.userInfos.firstName}</span></h1>
                <p id="congratulations-message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className={"dashboard-main"}>
                <div className={"charts"}>
                    <div className={"main-chart"}>
                        <ChartBar id={currentUser.id} />
                    </div>
                    <div className={"secondary-chart"}>
                        {/* <ChartLine id={currentUser.id} /> 
                        <ChartRadar id={currentUser.id} />
                        <ChartPie score={currentUser.score} /> */}
                       <div className={"one-third"}><ChartLine id={currentUser.id} /></div> 
                       <div className={"one-third"}><ChartRadar id={currentUser.id} /></div> 
                       <div className={"one-third"}><ChartPie score={currentUser.score} /></div> 
                    </div>
                </div>
                <div className={"numbers-info"}>
                    <InfoCard text={`${currentUser.keyData.calorieCount/1000}kCal`} category={'Calories'}>
                        <img src={calories} alt="" />
                    </InfoCard>
                    <InfoCard text={`${currentUser.keyData.proteinCount}g`} category={'Proteines'}>
                        <img src={proteines} alt="" />
                    </InfoCard>
                    <InfoCard text={`${currentUser.keyData.carbohydrateCount}g`} category={'Glucides'}>
                        <img src={glucides} alt="" />
                    </InfoCard>
                    <InfoCard text={`${currentUser.keyData.lipidCount}g`} category={'Lipides'}>
                        <img src={lipides} alt="" />
                    </InfoCard>
                </div>
            </div>
        </div>

    )
}

export default Dashboard;