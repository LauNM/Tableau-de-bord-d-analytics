import "./style.scss";
import { getPerformance } from "../../../api/fetchData";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

let translations = [
  { index: 1, name: 'intensity', value: 'Intensité' },
  { index: 2, name: 'speed', value: 'Vitesse' },
  { index: 3, name: 'strength', value: 'Force' },
  { index: 4, name: 'endurance', value: 'Endurance' },
  { index: 5, name: 'energy', value: 'Energie' },
  { index: 6, name: 'cardio', value: 'Cardio' }
];

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

function ChartRadar({ id = Number }) {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
          const { data } = await getPerformance(id);
          const userdata = data.data;
          const tab = userdata.map((el) => ({
            index: translations.find((item) => item.name === data.kind[el.kind]).index,
            translation: translations.find((item) => item.name === data.kind[el.kind]).value,
            value: el.value,
            // kind: data.kind[el.kind]
          })).sort((a,b) => a.index - b.index);

          setUserData(tab)

       
      }
      catch (error) {
        console.log(error)
      }

    })()
  }, [id])

 /*  const kindList = item.kind;
  let userData = item.data; */
//console.log(kindList, userData)
  /* userData = userData.map((el) => ({
    index: translations.find((item) => item.name === kindList[el.kind]).index,
    translation: translations.find((item) => item.name === kindList[el.kind]).value,
    value: el.value,
    kind: kindList[el.kind]
  })).sort((a,b) => a.index - b.index) */

  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <RadarChart outerRadius="50%" data={userData} >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey={'translation'} tick={customTick} />
        <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />

        <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default ChartRadar;