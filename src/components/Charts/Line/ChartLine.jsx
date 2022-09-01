import "./style.scss";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, ReferenceArea } from 'recharts';
import { useState } from 'react';


function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="chart-line-custom-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
}

function CustomLegend() {
  return (
    <p className="chart-line-custom-legend">Durée moyenne des sessions</p>
  );
}

function ChartLine({ data }) {
  const [activeIndex, setActiveIndex] = useState(6);

  return (
    <ResponsiveContainer width="100%" aspect={1} >
      <LineChart
        onMouseMove={(e) => setActiveIndex(e.activeTooltipIndex)}
        onMouseLeave={(e) => setActiveIndex(6)}
        onMouseEnter={(e) => setActiveIndex(6)}
        data={data}
        margin={{
          top: 5,
          right: 15,
          left: 15,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#FFF" stopOpacity={1} />
            <stop offset="100%" stopColor="#FFF" stopOpacity={0.4} />
          </linearGradient>
        </defs>
        <XAxis dataKey={'day'} tick={{ fill: '#FFF', fontSize: '12', fontWeight: '500', opacity: 0.5 }} axisLine={false} tickLine={false} />
        <YAxis type="number" hide />
        <Tooltip content={<CustomTooltip />} />
        <Legend iconSize={0} verticalAlign={'top'} content={<CustomLegend />} />
        <Line type="monotone" dataKey="sessionLength" stroke="url(#colorUv)" dot={{ r: 0 }} strokeWidth={2} />
        <ReferenceArea x1={activeIndex} x2={6} y1={0} y2={60} fill="blue" stroke="blue" strokeOpacity={1} isFront />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ChartLine;