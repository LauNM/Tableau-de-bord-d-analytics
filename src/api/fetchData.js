export const getUser = (userId) => {
    fetch(`http://localhost:3000/user/${userId}`)
    .then(res => res.json())
}