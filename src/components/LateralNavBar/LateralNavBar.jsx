import "./style.css";
import { ReactComponent as Relax} from "../../assets/images/icon1.svg";
import { ReactComponent as Swim} from "../../assets/images/icon2.svg";
import { ReactComponent as Ride} from "../../assets/images/icon3.svg";
import { ReactComponent as BodyBuilding } from "../../assets/images/icon4.svg";
import { ReactComponent as Copyright } from "../../assets/images/Copiryght.svg";

function LateralNavBar() {
  return (
    <div className={'lateralNavbar'}>
      <div className={'section'}>
        <Relax />
        <Swim />
        <Ride />
        <BodyBuilding />
      </div>
      <div className={'copyright'}>
        <Copyright />
      </div>
    </div>
  )
}

export default LateralNavBar;