import "./style.css";
import { dataRadar } from "../../api/fetchMockData";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


function ChartRadar() {
  return (
    <RadarChart  outerRadius={90} width={730} height={250} data={dataRadar}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}
export default ChartRadar;