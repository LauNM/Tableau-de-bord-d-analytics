import "./style.scss";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {data} from "../../api/fetchMockData"

function ChartBar(id) {
  return (
   <ResponsiveContainer>
      <BarChart
        data={data}
        barSize={7}
        /*margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}*/
      >
        <CartesianGrid strokeDasharray="3" vertical={false}/>
        <XAxis dataKey="name"/>
        <YAxis orientation={"right"}/>
        <Tooltip/>
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} height={50}/>
        <Bar dataKey="pv" fill="#8884d8"/>
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartBar;