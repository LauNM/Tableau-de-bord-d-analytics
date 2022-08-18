import "./style.scss";

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

export default InfoCard;