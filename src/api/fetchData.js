export function getUser(userId) {
   return fetch(`http://localhost:3000/user/${userId}`)
    .then(res => res.json())
    .catch(error => {
        console.log(error)
        throw error
    });
  }

export const getActivity = (userId) => {
   return fetch(`http://localhost:3000/user/${userId}/activity`)
    .then(res => res.json())
    .catch(error => {
        console.log(error)
        throw error
    });
}
export const getAverageSessions = (userId) => {
   return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    .then(res => res.json())
    .catch(error => {
        console.log(error)
        throw error
    });
}
export const getPerformance = (userId) => {
    return fetch(`http://localhost:3000/user/${userId}/performance`)
    .then(res => res.json())
    .catch(error => {
        console.log(error)
        throw error
    });
}