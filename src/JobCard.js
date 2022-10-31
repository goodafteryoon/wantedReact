import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JobCard.css";

function JobCard({
  id,
  src,
  position,
  company,
  response,
  location,
  country,
  reward,
}) {
  function Money(num) {
    const number = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return { number } + "원";
  }

  return (
    <div className="jobCardItem">
      <Link to={`/wdlist/${id}`} key={id}>
        <div className="cardHeader">
          <img alt="" src={src} />
        </div>
        <div className="cardPosition">{position}</div>
        <div className="cardCompany">{company}</div>
        <div className="cardReponse">
          <span>{response}</span>
        </div>
        <div className="cardLocation">
          {location}
          <span className="addressDot">.</span>
          <span>{country}</span>
        </div>
        <div className="cardReward">{Money(reward)}</div>
      </Link>
    </div>
  );
}

export default JobCard;
