import React from "react";
import { Link } from "react-router-dom";
import "./css/JobCard.css";

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
  function Money(numbers) {
    const number = numbers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${number}원`;
  }
  return (
    <div className="jobCardItem">
      <Link to={`/wd/${id}`}>
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
        <div className="cardReward">{"채용보상금 " + Money(reward)}</div>
      </Link>
    </div>
  );
}

export default JobCard;
