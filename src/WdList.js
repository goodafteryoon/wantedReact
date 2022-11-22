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
import WdListJson from "./json/WdList.json";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTagBtn = styled.div`
  font-size: 13px;
  font-weight: 400;
  background: ${(props) => props.background || "rgb(242, 251, 245)"};
  height: 32px;
  padding: 8px 14px;
  border-radius: 20px;
  line-height: 16px;
  align-items: center;
  margin-right: 8px;
  img {
    width: 16px;
    height: 16px;
    margin-left: 5px;
    vertical-align: middle;
  }
`;

function WdList() {
  // props 를 () 소괄호 파라미터로 넣어서 props.~ 로 전달한 경우
  function TagBtn(props) {
    return (
      <StyledTagBtn background={props.background}>
        <button type="button">
          {props.title}
          <img src={props.img} alt={props.title} />
        </button>
      </StyledTagBtn>
    );
  }

  // props를 {} 중괄호 안에 바로 넣어서 전달한 경우
  // function TagBtn({ title, img }) {
  //   return (
  //     <div className="tagButton">
  //       <button type="button">
  //         {title}
  //         <img src={img} alt={title} />
  //       </button>
  //     </div>
  //   );
  // }

  function TagBtnList() {
    return (
      <>
        {WdListJson.tagBtnList.map((tagBtn) => (
          <TagBtn
            title={tagBtn.title}
            img={tagBtn.img}
            background={tagBtn.background}
          />
        ))}
      </>
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
              <TagBtnList />
            </div>
          </div>
        </div>
        <div className="jobListSection">
          <div className="bookmarkContainer">
            <button type="button">
              <span className="bookmarkIcon">
                <FontAwesomeIcon icon={faBookmark} />
              </span>
              <Link to="/bookmark">
                <span className="bookmarkTitle">북마크 모아보기</span>
              </Link>
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
