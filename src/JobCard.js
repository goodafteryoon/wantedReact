import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JobCard.css";

function JobCard({
  img,
  position,
  company,
  response,
  location,
  country,
  reward,
}) {
  return (
    <div className="jobCardItem">
      <Link to="/wd">
        <div className="cardHeader">
          <img alt="" src={img} />
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
        <div className="cardReward">{reward}</div>
      </Link>
    </div>
  );
}

export default JobCard;
