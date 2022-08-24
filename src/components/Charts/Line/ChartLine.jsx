import "./style.scss";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { userAverageSessions } from "api/fetchMockData"

const daysOfWeek = [
  { index: 1, day: 'L' },
  { index: 2, day: 'M' },
  { index: 3, day: 'M' },
  { index: 4, day: 'J' },
  { index: 5, day: 'V' },
  { index: 6, day: 'S' },
  { index: 7, day: 'D' }
]

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

function ChartLine({ id = Number }) {

  let user = userAverageSessions.find((user) => user.userId === id);
  let data = user.sessions;
  data = data.map((el) => ({
    index: el.day,
    day: daysOfWeek.find((item) => item.index === el.day).day,
    sessionLength: el.sessionLength
  }))

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
        <YAxis type="number" domain={['dataMin - 5', 'dataMax']} hide />
        <Tooltip content={<CustomTooltip />} />
        <Legend iconSize={0} verticalAlign={'top'} content={<CustomLegend />} />
        <Line type="monotone" dataKey="sessionLength" stroke="url(#colorUv)" dot={{ r: 0 }} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ChartLine;