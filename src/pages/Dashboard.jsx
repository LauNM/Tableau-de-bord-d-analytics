import '../assets/css/style.css';
import ChartBar from "../components/Bar/ChartBar";
import ChartLine from "../components/Line/ChartLine";
import ChartPie from "../components/Pie/ChartPie";
import ChartRadar from "../components/Radar/ChartRadar";

function Dashboard({id= null, name= ''}) {
    return (
        <div className={"dashboard"}>
            <h1 id="hello">Bonjour <span className='red'>{name}</span></h1>
            <p id='congratulations-message'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className={"charts"}>
                <ChartBar id={id} />
                <ChartLine id={id} />
                <ChartPie id={id} />
                <ChartRadar id={id} />
            </div>
        </div>
    
    )
}

export default Dashboard;