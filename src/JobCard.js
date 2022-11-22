import React from "react";
import { Link } from "react-router-dom";
import "./css/JobCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
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
  // 유즈 셀렉터 : 보여주는 것, 디스패치 : 실행시키는 것으로 생각하고 만들자
  const dispatch = useDispatch(); // 사용할 dispatch 함수를 명시 리듀서를 쓸 수 있게 해주는 것
  const bookmarkList = useSelector((state) => state.bookmark.bookmarkList);
  function Money(numbers) {
    const number = numbers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${number}원`;
  }
  //
  const onClick = () => {
    if (bookmarkList.includes(id)) {
      dispatch({ type: "bookmark/REMOVE_BOOKMARK", id: id }); // action.type, action.id
    } else {
      dispatch({ type: "bookmark/ADD_BOOKMARK", id: id });
    }
  };
  return (
    <div className="jobCardItem">
      <button onClick={onClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
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
