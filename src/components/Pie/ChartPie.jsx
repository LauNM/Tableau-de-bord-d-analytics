import "./style.scss";
import {PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts';

function customLegend({ payload, score }) {
  return (
    <p><strong>{score * 100}%</strong> <br />de votre objectif</p>
  );
}

function ChartPie({score = Number}) {
  let data = [{value: score, color: '#FF0000'}, {value: 1-score, color: '#FBFBFB'}]

  return (
    <ResponsiveContainer>
      <PieChart>
        <Legend content={customLegend(12)} width={70} layout={'vertical'} align="center" verticalAlign="middle" iconSize={0}/>
        <Pie 
           data={data}
           innerRadius={60}
           outerRadius={70}
           dataKey="value"
           startAngle={180} 
           endAngle={-180}
           minAngle={80}
           >
            {
      data.map((entry, index) => (
        <Cell key={`cell-${entry.value}`} fill={entry.color} />
      ))
    }
          </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ChartPie;