import "./style.scss";
import {PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts';

function customLegend({score}) {
  return (
    <p className="chart-pie-custom-legend"><strong>{score * 100}%</strong> <br />de votre objectif</p>

  );
}

function ChartPie({score = Number}) {

  let data = [{value: score, color: '#FF0000'}, {value: 1-score, color: '#FBFBFB'}]

  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <PieChart
      margin={{
        top: 20,
        right: 5,
        left: 5,
        bottom: 5,
      }}
      >
        <Legend content={() => customLegend({score})} width={70} layout={'vertical'} verticalAlign="middle" />
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