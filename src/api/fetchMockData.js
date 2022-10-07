const user = [
  {
    id: 12,
    userInfos: {
      firstName: 'Karl - Mock',
      lastName: 'Dovineau',
      age: 31,
    },
    todayScore: 0.23,
    keyData: {
      calorieCount: 1030,
      proteinCount: 76,
      carbohydrateCount: 120,
      lipidCount: 20
    }
  },
  {
    id: 18,
    userInfos: {
      firstName: 'Cecilia - Mock',
      lastName: 'Ratorez',
      age: 34,
    },
    score: 0.6,
    keyData: {
      calorieCount: 1400,
      proteinCount: 100,
      carbohydrateCount: 75,
      lipidCount: 120
    }
  }
];
const userActivity = [
  {
    userId: 12,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 82,
        calories: 240
      },
      {
        day: '2020-07-02',
        kilogram: 81,
        calories: 220
      },
      {
        day: '2020-07-03',
        kilogram: 80,
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
        kilogram: 80,
        calories: 162
      },
      {
        day: '2020-07-07',
        kilogram: 79,
        calories: 390
      }
    ]
  },
  {
    userId: 18,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 50,
        calories: 240
      },
      {
        day: '2020-07-02',
        kilogram: 52,
        calories: 220
      },
      {
        day: '2020-07-03',
        kilogram: 51,
        calories: 280
      },
      {
        day: '2020-07-04',
        kilogram: 52,
        calories: 500
      },
      {
        day: '2020-07-05',
        kilogram: 53,
        calories: 160
      },
      {
        day: '2020-07-06',
        kilogram: 52,
        calories: 162
      },
      {
        day: '2020-07-07',
        kilogram: 69,
        calories: 390
      }
    ]
  }
];

const userAverageSessions = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 45
      },
      {
        day: 2,
        sessionLength: 45
      },
      {
        day: 3,
        sessionLength: 40
      },
      {
        day: 4,
        sessionLength: 20
      },
      {
        day: 5,
        sessionLength: 30
      },
      {
        day: 6,
        sessionLength: 35
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
        sessionLength: 20
      },
      {
        day: 2,
        sessionLength: 20
      },
      {
        day: 3,
        sessionLength: 40
      },
      {
        day: 4,
        sessionLength: 20
      },
      {
        day: 5,
        sessionLength: 40
      },
      {
        day: 6,
        sessionLength: 60
      },
      {
        day: 7,
        sessionLength: 20
      }
    ]
  }
];

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
        value: 120,
        kind: 1
      },
      {
        value: 70,
        kind: 2
      },
      {
        value: 120,
        kind: 3
      },
      {
        value: 140,
        kind: 4
      },
      {
        value: 100,
        kind: 5
      },
      {
        value: 130,
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
        value: 70,
        kind: 1
      },
      {
        value: 90,
        kind: 2
      },
      {
        value: 120,
        kind: 3
      },
      {
        value: 130,
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
];

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {object} keyData
 * @property {number} keyData.calorieCount
 * @property {number} keyData.proteinCoun
 * @property {number} keyData.carbohydrateCount
 * @property {number} keyData.lipidCount
 * @property {number} [score]
 * @property {number} [todayScore]
 * @property {object} userInfos
 * @property {string} userInfos.firstName
 * @property {string} userInfos.lastName
 * @property {number} userInfos.age
 * 
 * @param {number} userId 
 * @returns {Promise<User>}
 */
export async function getUser(userId) {
  return new Promise((resolve) => {
    const newData = user.find((current) => current.id === userId);
    resolve({data: newData})
  });
}

/**
 * @typedef {Object} Activity
 * @property {number} userId
 * @property {object} sessions
 * @property {string} sessions.day
 * @property {number} sessions.kilogram
 * @property {number} sessions.calories
 * 
 * @param {number} userId 
 * @returns {Promise<Activity>}
 */
export async function getActivity(userId) {
  return new Promise((resolve) => {
    const newData = userActivity.find((current) => current.userId === userId);
    resolve({data: newData})
  });
}

/**
 * @typedef {Object} Session
 * @property {number} date
 * @property {number} sessionLength
 * 
 * @typedef {Object} AverageSessions
 * @property {number} userId
 * @property {Session[]} sessions
 * 
 * @param {number} userId 
 * @returns {Promise<AverageSessions>}
 */
export async function getAverageSessions(userId) {
  return new Promise((resolve) => {
    const newData = userAverageSessions.find((current) => current.userId === userId);
    resolve({data: newData})
  });
}

/**
 * @typedef {Object} Performance
 * @property {number} userId
 * @property {object} data
 * @property {number} data.value
 * @property {number} data.kind
 * @property {object} kind
 * 
 * @param {number} userId 
 * @returns {Promise<Performance>}
 */
export async function getPerformance(userId) {
  return new Promise((resolve) => {
    const newData = userPerformance.find((current) => current.userId === userId);
    resolve({data: newData})
  });
}

export {
  user,
  userActivity,
  userAverageSessions,
  userPerformance
}