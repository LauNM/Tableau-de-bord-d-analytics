import "./style.scss";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { userActivity } from "../../api/fetchMockData"


const onlyDay = (date) => {
  const newDate = new Date(date);
  return newDate.getDate();
}

function ChartBar({id = Number}) {

  let user = userActivity.find((user) => user.userId === id);
  let data = user.sessions;
  data = data.map((obj) => ({
    day: onlyDay(obj.day),
    kilogram: obj.kilogram,
    calories: obj.calories
  }))


  return (
   <ResponsiveContainer>
      <BarChart
        data={data}
        barSize={7}
      >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="day"/>
        <YAxis orientation={"right"}/>
        <Tooltip />
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} height={50}/>
        <Bar name="Poids (kg)" dataKey="kilogram" fill="#8884d8"/>
        <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartBar;

