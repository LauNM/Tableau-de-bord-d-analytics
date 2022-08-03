import "./style.scss";
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

function ChartPie({score = Number}) {
  let data = [{value: score}, {value: 1-score}]
  const COLORS = ['#FF0000', '#E5E5E5'];

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie 
           data={data}
           innerRadius={60}
           outerRadius={70}
           fill="#8884d8"
           paddingAngle={5}
           dataKey="value">
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ChartPie;