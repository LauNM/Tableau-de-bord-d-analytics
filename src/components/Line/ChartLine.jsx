import "./style.scss";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { userAverageSessions } from "../../api/fetchMockData"

function ChartLine({id = Number}) {

  let user = userAverageSessions.find((user) => user.userId === id);
  let data = user.sessions;

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d"/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ChartLine;