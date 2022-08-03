import "./style.scss";
import {userPerformance} from "../../api/fetchMockData";
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';


function ChartRadar({id = Number}) {

  let performances = userPerformance.find((user) => user.userId === id);
  let kindList = performances.kind;
  let trad =[
    {index: 1, name: 'intensity', value:'Intensité'},
    {index: 2, name: 'speed', value: 'Vitesse'},
    {index: 3, name: 'strength', value: 'Force'},
    {index: 4, name: 'endurance', value: 'Endurance'},
    {index: 5, name: 'energy',value : 'Energie'},
    {index: 6, name: 'cardio', value: 'Cardio'}
    ];
  let userData = performances.data;
  userData = userData.map((el) => ({
    value: el.value,
    kind: kindList[el.kind]
  }))


  return (
    <ResponsiveContainer>
      <RadarChart outerRadius={90} data={userData}>
        <PolarGrid/>
        <PolarAngleAxis dataKey={'kind'}/>
        <Radar  dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default ChartRadar;