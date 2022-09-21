import "./style.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

function customTick({ payload, x, y, textAnchor }) {
  return (
    <g
      className="radar-custom-tick"
    >
      <text
        x={x}
        y={y < 100 ? y : y + 10}
        textAnchor={textAnchor}
        fill="#FFF"
      >
        <tspan>
          {payload.value}
        </tspan>
      </text>
    </g>
  );
}

function ChartRadar({ data }) {

  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <RadarChart outerRadius="50%" data={data} >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey={'translation'} tick={customTick} />
        <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />

        <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

ChartRadar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    translation: PropTypes.string,
    value: PropTypes.number
  })),
}

export default ChartRadar;