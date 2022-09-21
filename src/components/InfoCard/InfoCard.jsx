import "./style.scss";
import PropTypes from 'prop-types';

function InfoCard ({text= "", category = "", children}) {
  return (
    <div className={"info-card wrapper light"}>
      <div className={"logo"}>
        {children}
      </div>
      <div className={"infos"}>
        <h2>
          {text}
        </h2>
        <p>
          {category}
        </p>
      </div>

    </div>
  )
}

InfoCard.propTypes = {
  text: PropTypes.string,
  category: PropTypes.string,
  children: PropTypes.element
}
export default InfoCard;