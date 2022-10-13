import '../assets/css/style.scss';
import { Link } from "react-router-dom";


function Error() {
  return (
    <div className={"error"}>
      <h1>Oups, une erreur s'est produite</h1>
      <p>Veuillez rééssayer dans quelques instants</p>
      <Link to={'/'} >
           <button className={"link-button"}>Revenir à la page d'accueil</button>
        </Link>
    </div>

  )
}

export default Error;