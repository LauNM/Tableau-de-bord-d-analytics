import "./style.scss";
import {PieChart, Pie, ResponsiveContainer} from 'recharts';

function ChartPie(id) {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80}
             fill="#82ca9d" label/>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ChartPie;