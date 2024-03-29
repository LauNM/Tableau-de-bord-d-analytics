import "./style.scss";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="chart-bar-custom-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
}

function ChartBar({data}) {
  return (
   <ResponsiveContainer  width="100%" height="100%">
      <BarChart
        width={150} 
        height={40} 
        data={data}
        barSize={7}
        >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="day"/>
        <YAxis dataKey="kilogram" yAxisId="right" orientation={"right"} domain={[ 'dataMin - 1', 'dataMax + 1']}/>
        <YAxis dataKey="calories" yAxisId="left" orientation={"left"} hide />
        <Tooltip content={<CustomTooltip />}/>
        <Legend 
          verticalAlign="top" 
          align="right" 
          iconType="circle" 
          iconSize={8} 
          height={50}  
          formatter={(value) => <span className="legend">{value}</span>}
        />
        <Bar yAxisId="right" name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} />
        <Bar yAxisId="left" name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
ChartBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    calories: PropTypes.number,
    day: PropTypes.number,
    kilogram: PropTypes.number
  })),
}

export default ChartBar;

