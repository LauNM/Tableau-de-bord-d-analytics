import "./style.scss";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {data} from "../../api/fetchMockData"

function ChartLine(id) {
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
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }}/>
        <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ChartLine;