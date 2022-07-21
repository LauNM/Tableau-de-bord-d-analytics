import "./style.scss";
import {dataRadar} from "../../api/fetchMockData";
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';


function ChartRadar(id) {
  return (
    <ResponsiveContainer>
      <RadarChart outerRadius={90} data={dataRadar}>
        <PolarGrid/>
        <PolarAngleAxis dataKey="subject"/>
        <PolarRadiusAxis/>
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default ChartRadar;