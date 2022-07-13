import '../assets/css/style.css';
import ChartBar from "../components/Bar/ChartBar";
import ChartLine from "../components/Line/ChartLine";
import ChartPie from "../components/Pie/ChartPie";
import ChartRadar from "../components/Radar/ChartRadar";

const user = {
    "id":18,
    "userInfos":{
        "firstName":"Cecilia",
        "lastName":"Ratorez",
        "age":34
    },
    "score":0.3,
    "keyData":{
        "calorieCount":2500,
        "proteinCount":90,
        "carbohydrateCount":150,
        "lipidCount":120
    }
}
function Dashboard() {
    return (
        <div className={"dashboard"}>
            <h1 id="hello">Bonjour <span className='red'>{user.userInfos.firstName}</span></h1>
            <p id='congratulations-message'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className={"charts"}>
                <ChartBar />
                <ChartLine />
                <ChartPie />
                <ChartRadar />
            </div>
        </div>
    
    )
}

export default Dashboard;