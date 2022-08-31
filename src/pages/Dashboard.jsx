import '../assets/css/style.scss';
import {useParams, Navigate } from "react-router-dom";
import calories from "../assets/images/calories-icon.svg";
import proteines from "../assets/images/protein-icon.svg";
import glucides from "../assets/images/carbs-icon.svg";
import lipides from "../assets/images/fat-icon.svg";
import ChartBar from "../components/Charts/Bar/ChartBar";
import ChartLine from "../components/Charts/Line/ChartLine";
import ChartPie from "../components/Charts/Pie/ChartPie";
import ChartRadar from "../components/Charts/Radar/ChartRadar";
import InfoCard from "../components/InfoCard/InfoCard";
import { user } from "../api/fetchMockData";
/* import { getUser } from "api/service";
import { useEffect, useState } from 'react'; */

function Dashboard() {
    let params = useParams();
    
    //console.log(getUser(parseInt(params.id, 10)))
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
                    <div className={"main-chart wrapper light p-24"}>
                        <p className={"chart-title pt-5"}>Activité quotidienne</p>
                        <ChartBar id={currentUser.id} />
                    </div>
                    <div className={"secondary-chart"}>
                       <div className={"one-third wrapper color"}><ChartLine id={currentUser.id} /></div> 
                       <div className={"one-third wrapper dark"}><ChartRadar id={currentUser.id} /></div> 
                       <div className={"one-third wrapper light"}>
                        <p className={"chart-title pl-15 pt-15"}>Score</p>
                        <ChartPie score={currentUser.score} />
                        </div> 
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