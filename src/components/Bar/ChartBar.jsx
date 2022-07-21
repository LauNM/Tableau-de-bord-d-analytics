import "./style.scss";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {data} from "../../api/fetchMockData"

function ChartBar(id) {
  return (
   <ResponsiveContainer>
      <BarChart
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
        <Bar dataKey="pv" fill="#8884d8"/>
        <Bar dataKey="uv" fill="#82ca9d"/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartBar;