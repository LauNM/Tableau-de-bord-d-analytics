/* export const getUser = (userId) => {
    new Promise ((resolve) => {

    })
    
    
} */

const user = [
  {
    id: 12,
    userInfos: {
      firstName: 'Karl',
      lastName: 'Dovineau',
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50
    }
  },
  {
    id: 18,
    userInfos: {
      firstName: 'Cecilia',
      lastName: 'Ratorez',
      age: 34,
    },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120
    }
  }
].map((user) => ({
  id: user.id,
  userInfos: {
    firstName: user.userInfos.firstName,
    lastName: user.userInfos.lastName,
    age: user.userInfos.age,
  },
  score: user.score || user.todayScore,
  keyData: {
    calorieCount: user.keyData.calorieCount,
    proteinCount: user.keyData.proteinCount,
    carbohydrateCount: user.keyData.carbohydrateCount,
    lipidCount: user.keyData.lipidCount
  }
}))

const userActivity = [
  {
    userId: 12,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240
      },
      {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220
      },
      {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280
      },
      {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290
      },
      {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160
      },
      {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162
      },
      {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390
      }
    ]
  },
  {
    userId: 18,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 70,
        calories: 240
      },
      {
        day: '2020-07-02',
        kilogram: 69,
        calories: 220
      },
      {
        day: '2020-07-03',
        kilogram: 70,
        calories: 280
      },
      {
        day: '2020-07-04',
        kilogram: 70,
        calories: 500
      },
      {
        day: '2020-07-05',
        kilogram: 69,
        calories: 160
      },
      {
        day: '2020-07-06',
        kilogram: 69,
        calories: 162
      },
      {
        day: '2020-07-07',
        kilogram: 69,
        calories: 390
      }
    ]
  }
]


const userAverageSessions = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 30
      },
      {
        day: 2,
        sessionLength: 23
      },
      {
        day: 3,
        sessionLength: 45
      },
      {
        day: 4,
        sessionLength: 50
      },
      {
        day: 5,
        sessionLength: 0
      },
      {
        day: 6,
        sessionLength: 0
      },
      {
        day: 7,
        sessionLength: 60
      }
    ]
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 30
      },
      {
        day: 2,
        sessionLength: 40
      },
      {
        day: 3,
        sessionLength: 50
      },
      {
        day: 4,
        sessionLength: 30
      },
      {
        day: 5,
        sessionLength: 30
      },
      {
        day: 6,
        sessionLength: 50
      },
      {
        day: 7,
        sessionLength: 50
      }
    ]
  }
]


const userPerformance = [
  {
    userId: 12,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
    },
    data: [
      {
        value: 80,
        kind: 1
      },
      {
        value: 120,
        kind: 2
      },
      {
        value: 140,
        kind: 3
      },
      {
        value: 50,
        kind: 4
      },
      {
        value: 200,
        kind: 5
      },
      {
        value: 90,
        kind: 6
      }
    ]
  },
  {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
    },
    data: [
      {
        value: 200,
        kind: 1
      },
      {
        value: 240,
        kind: 2
      },
      {
        value: 80,
        kind: 3
      },
      {
        value: 80,
        kind: 4
      },
      {
        value: 220,
        kind: 5
      },
      {
        value: 110,
        kind: 6
      }
    ]
  }
]

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataRadar = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export {
  user,
  data,
  dataRadar,
  userActivity,
  userAverageSessions,
  userPerformance
}