import * as apiServer from "./fetchData";
import * as apiMock from "./fetchMockData";

const isMockActive =  process.env.REACT_APP_MOCK_ACTIVE === "true";
const API = isMockActive ? apiMock : apiServer;

/**
 * @param {string} date 
 * @returns {number}
 */
const onlyDay = (date) => {
  const newDate = new Date(date);
  return newDate.getDate();
};

const daysOfWeek = [
  { index: 1, day: 'L' },
  { index: 2, day: 'M' },
  { index: 3, day: 'M' },
  { index: 4, day: 'J' },
  { index: 5, day: 'V' },
  { index: 6, day: 'S' },
  { index: 7, day: 'D' }
];

const translations = [
  { index: 1, name: 'intensity', value: 'Intensité' },
  { index: 2, name: 'speed', value: 'Vitesse' },
  { index: 3, name: 'strength', value: 'Force' },
  { index: 4, name: 'endurance', value: 'Endurance' },
  { index: 5, name: 'energy', value: 'Energie' },
  { index: 6, name: 'cardio', value: 'Cardio' }
];


/**
 * @typedef {Object} User
 * @property {number} id
 * @property {object} keyData
 * @property {number} keyData.calorieCount
 * @property {number} keyData.proteinCoun
 * @property {number} keyData.carbohydrateCount
 * @property {number} keyData.lipidCount
 * @property {number} score
 * @property {object} userInfos
 * @property {string} userInfos.firstName
 * @property {string} userInfos.lastName
 * @property {number} userInfos.age
 * 
 * @param {number} userId 
 * @returns {Promise<User>}
 */
export async function getUser(userId) {
  try {
    const { data } = await API.getUser(userId);
    return {
      id: data.id,
      keyData: data.keyData,
      score: data.score || data.todayScore,
      userInfos: data.userInfos
    }
  }
  catch (error) {
    console.log(error)
    throw error
  }
}

/**
 * @typedef {Object} UserActivity
 * @property {number} day
 * @property {number} kilogram
 * @property {number} calories
 * 
 * @param {number} userId 
 * @returns {Promise<UserActivity>}
 */
export async function getUserActivity(userId) {
  try {
    const { data } = await API.getActivity(userId);
    return data.sessions.map((el) => ({
      day: onlyDay(el.day),
      kilogram: el.kilogram,
      calories: el.calories
    }))
  }
  catch (error) {
    console.log(error)
    throw error
  }
}

/**
 * @typedef {Object} UserAverageSessions
 * @property {number} index
 * @property {string} day
 * @property {number} sessionLength
 * 
 * @param {number} userId 
 * @returns {Promise<UserAverageSessions>}
 */
export async function getUserAverageSessions(userId) {
  try {
    const { data } = await API.getAverageSessions(userId);
    return data.sessions.map((el) => ({
      index: el.day,
      day: daysOfWeek.find((item) => item.index === el.day).day,
      sessionLength: el.sessionLength
    }))
  }
  catch (error) {
    console.log(error)
    throw error
  }

}

/**
 * @typedef {Object} UserPerformance
 * @property {number} index
 * @property {string} translation
 * @property {number} value
 * 
 * @param {number} userId 
 * @returns {Promise<UserPerformance>}
 */
export async function getUserPerformance(userId) {
  try {
    const { data } = await API.getPerformance(userId);
    return data.data.map((el) => ({
      index: translations.find((item) => item.name === data.kind[el.kind]).index,
      translation: translations.find((item) => item.name === data.kind[el.kind]).value,
      value: el.value
    })).sort((a, b) => a.index - b.index);
  }
  catch (error) {
    console.log(error)
    throw error
  }
}