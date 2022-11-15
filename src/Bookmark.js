import React from "react";
import Header from "./Header";
import JobCard from "./JobCard";

import JobCardListJson from "./json/JobCardList.json";
import { useDispatch, useSelector } from "react-redux";
// 북마크 페이지 북마크 스테이트를 구독하고 있는것이다.
function Bookmark() {
  // useSelector 는 리덕스 저장소(state)에 어떤 값을 조회할때 쓰는 것.
  // 역할을 바로 찾아보면서 쓰기
  // dispathc 액션을 리듀서로 넘겨주는 애
  // 셀렉터는 state를 불러올수 있는애
  const bookmarkList = useSelector((state) => state.bookmark.bookmarkList);

  const bookmarkData = () => {
    return JobCardListJson.jobCardList.filter((data) =>
      bookmarkList.includes(data.id)
    );
  };

  // 이름 중복 상관없음 익스포트 아니니까 .
  function JobCardList() {
    return (
      <>
        {bookmarkData().map((jobCard) => (
          <JobCard
            id={jobCard.id}
            src={jobCard.src}
            position={jobCard.position}
            company={jobCard.company}
            response={jobCard.response}
            location={jobCard.location}
            country={jobCard.country}
            reward={jobCard.reward}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="main">
        <div className="bookmarkWrpper">
          <div className="bookmarkTitle">
            <h2>북마크</h2>
          </div>
          <div className="jobCardContainer">
            <JobCardList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookmark;
