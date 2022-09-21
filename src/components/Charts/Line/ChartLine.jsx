import "./style.scss";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';


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

function CustomDot({cx,cy}) {
  return <svg>
    <circle cx={cx} cy={cy} r={3}  fill="white" opacity={1}/>
    <circle cx={cx} cy={cy} r={6} fill="white" opacity={0.2}/>
    <rect x={cx} y={0} width="100%" height="100%" fill="black" opacity={0.1}/>
  </svg>
}

function ChartLine({ data }) {

  return (
    <ResponsiveContainer width="100%" aspect={1} >
      <LineChart
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
        <Tooltip content={<CustomTooltip />} cursor={false}/>
        <Legend iconSize={0} verticalAlign={'top'} content={<CustomLegend />} />
        <Line type="monotone" dataKey="sessionLength" stroke="url(#colorUv)" dot={false} strokeWidth={2} activeDot={<CustomDot />}/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ChartLine;