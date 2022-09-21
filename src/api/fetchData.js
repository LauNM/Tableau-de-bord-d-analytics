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
export function getUser(userId) {
   return fetch(`http://localhost:3000/user/${userId}`)
    .then(res => res.json())
    .catch(error => {
        console.log(error)
        throw error
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
export const getActivity = (userId) => {
   return fetch(`http://localhost:3000/user/${userId}/activity`)
    .then(res => res.json())
    .catch(error => {
        console.log(error)
        throw error
    });
}

/**
 * @typedef {Object} AverageSessions
 * @property {number} userId
 * @property {object[]} sessions
 * @property {number} sessions[].date
 * @property {number} sessions[].sessionLength
 * 
 * @param {number} userId 
 * @returns {Promise<AverageSessions>}
 */
export const getAverageSessions = (userId) => {
   return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    .then(res => res.json())
    .catch(error => {
        console.log(error)
        throw error
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
export const getPerformance = (userId) => {
    return fetch(`http://localhost:3000/user/${userId}/performance`)
    .then(res => res.json())
    .catch(error => {
        console.log(error)
        throw error
    });
}