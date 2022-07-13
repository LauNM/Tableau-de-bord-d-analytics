import "./style.css";
import { ReactComponent as Logo} from "../../assets/images/logo.svg";

function TopNavBar() {
  return (
    <div className={'navbar'}>
      <Logo className={'logo'}/>
      <ul className={'navbar-items'}>
        <li>
          Accueil
        </li>
        <li>
          Profil
        </li>
        <li>
          Réglage
        </li>
        <li>
          Communauté
        </li>
      </ul>
    </div>
  )
}

export default TopNavBar;