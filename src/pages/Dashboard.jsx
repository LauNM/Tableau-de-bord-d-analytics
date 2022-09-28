import '../assets/css/style.scss';
import { useParams, useNavigate } from "react-router-dom";
import calories from "../assets/images/calories-icon.svg";
import proteines from "../assets/images/protein-icon.svg";
import glucides from "../assets/images/carbs-icon.svg";
import lipides from "../assets/images/fat-icon.svg";
import ChartBar from "../components/Charts/Bar/ChartBar";
import ChartLine from "../components/Charts/Line/ChartLine";
import ChartPie from "../components/Charts/Pie/ChartPie";
import ChartRadar from "../components/Charts/Radar/ChartRadar";
import InfoCard from "../components/InfoCard/InfoCard";
import { getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from "api/service";
import { useEffect, useState } from 'react';

function Dashboard() {
    const navigate = useNavigate();
    let params = useParams();
    const [currentUser, setCurrentUser] = useState([]);
    const [activity, setActivity] = useState([]);
    const [averageSessions, setAverageSessions] = useState([]);
    const [performance, setPerformance] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const result = await Promise.all([
                    getUser(parseInt(params.id, 10)),
                    getUserActivity(parseInt(params.id, 10)),
                    getUserAverageSessions(parseInt(params.id, 10)),
                    getUserPerformance(parseInt(params.id, 10)) 
                ])
                setCurrentUser(result[0])
                setActivity(result[1])
                setAverageSessions(result[2])
                setPerformance(result[3])
                setIsLoading(false);
            }
            catch (error) {
                navigate('/');
                console.log(error)
            }

        })()
    }, [navigate, params.id])


    return (
        <div className={"dashboard"}>
            {isLoading ? <p>please wait</p> :
             <div className={"dashboard-wrapper"}>
                <div className={"dashboard-header"}>
                    <h1 id="hello">Bonjour <span className='red'>{currentUser.userInfos.firstName}</span></h1>
                    <p id="congratulations-message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className={"dashboard-main"}>
                    <div className={"charts"}>
                        <div className={"main-chart wrapper light p-24"}>
                            <p className={"chart-title pt-5"}>Activité quotidienne</p>
                            <ChartBar data={activity} />
                        </div>
                        <div className={"secondary-chart"}>
                            <div className={"one-third wrapper color"}>
                                <ChartLine data={averageSessions} />
                                </div>
                            <div className={"one-third wrapper dark"}>
                                <ChartRadar data={performance} />
                                </div>
                            <div className={"one-third wrapper light"}>
                                <p className={"chart-title pl-15 pt-15"}>Score</p>
                                <ChartPie score={currentUser.score} />
                            </div>
                        </div>
                    </div>
                    <div className={"numbers-info"}>
                        <InfoCard text={`${currentUser.keyData.calorieCount / 1000}kCal`} category={'Calories'}>
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
            }
        </div>
    )
}

export default Dashboard;