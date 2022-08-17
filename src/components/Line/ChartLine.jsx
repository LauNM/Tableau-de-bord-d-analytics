import "./style.scss";
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import { userAverageSessions } from "../../api/fetchMockData"

function ChartLine({id = Number}) {

  let user = userAverageSessions.find((user) => user.userId === id);
  let data = user.sessions;

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3"/> */}
        <XAxis/>
        <YAxis type="number" domain={[ 'dataMin - 5', 'dataMax']} hide/>
        <Tooltip/>
        <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" strokeWidth={2}/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ChartLine;