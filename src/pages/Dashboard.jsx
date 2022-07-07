import '../assets/css/style.css';

const user = {
    "id":18,
    "userInfos":{
        "firstName":"Cecilia",
        "lastName":"Ratorez",
        "age":34
    },
    "score":0.3,
    "keyData":{
        "calorieCount":2500,
        "proteinCount":90,
        "carbohydrateCount":150,
        "lipidCount":120
    }
}
function Dashboard() {
    return (
        <div className="main">
            <h1 id="hello">Bonjour <span className='red'>{user.userInfos.firstName}</span></h1>
            <p id='congratulations-message'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    
    )
}

export default Dashboard;