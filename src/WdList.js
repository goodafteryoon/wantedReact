import React from "react";
import "./css/WdList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faChevronRight,
  faChevronDown,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import JobCard from "./JobCard";
import JobCardListJson from "./json/JobCardList.json";

function WdList() {
  function TagBtn({ title, img }) {
    return (
      <div className="tagButton">
        <button type="button">
          {title}
          <img src={img} alt={title} />
        </button>
      </div>
    );
  }

  function JobCardList() {
    return (
      <>
        {JobCardListJson.jobCardList.map((jobCard) => (
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
        <div className="jobSearchSection">
          <div className="filterContainer">
            <div className="container">
              <div className="buttonWrapper">
                <button type="button">
                  <span className="jobGroup">전체</span>
                  <span className="moreButton">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </button>
              </div>
              <div className="inputWrapper">
                <span className="input">직군을 선택해주세요.</span>
              </div>
            </div>
            <div className="container">
              <div className="selectWrapper">
                <div className="localSelect">
                  <button type="button">
                    <span className="local">
                      지역<span className="localSup">1</span>
                    </span>
                    <span className="korea">한국</span>
                    <span>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  </button>
                </div>
                <div className="yearSelect">
                  <button type="button">
                    <span className="year">경력</span>
                    <span className="whole">전체</span>
                    <span>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  </button>
                </div>
                <div className="skillSelect">
                  <button type="button">
                    <span className="skill">기술스택</span>
                    <span>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  </button>
                </div>
              </div>
              <div className="categoryWrapper">
                <div className="categorySelect">
                  <button type="button">
                    <span className="category">응답률순</span>
                    <span>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="container">
              <TagBtn
                title="연봉이 최고의 복지"
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
              />
              <TagBtn
                title="퇴사율 10% 이하"
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
              />
              <TagBtn
                title="급성장 중"
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
              />
              <TagBtn
                title="병역특례"
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
              />
              <TagBtn
                title="50인 이하"
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F3a965d18-c524-11ec-901c-acde48001122.png&amp;w=50&amp;q=75"
              />
              <TagBtn
                title="50인 이상"
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&amp;w=50&amp;q=75"
              />
              <TagBtn
                title="업력 5년 이상"
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&amp;w=50&amp;q=75"
              />
              <TagBtn
                title="유연근무"
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F827f6146-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
              />
            </div>
          </div>
        </div>
        <div className="jobListSection">
          <div className="bookmarkContainer">
            <button type="button">
              <span className="bookmarkIcon">
                <FontAwesomeIcon icon={faBookmark} />
              </span>
              <span className="bookmarkTitle">북마크 모아보기</span>
              <span className="bookmarkIcon">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </button>
          </div>
          <div className="jobCardContainer">
            <JobCardList />
          </div>
        </div>
      </div>
    </>
  );
}

export default WdList;
