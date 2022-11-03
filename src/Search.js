import React from "react";
import Header from "./Header";
import JobCard from "./JobCard";
import JobCardListJson from "./json/JobCardList.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faChevronRight,
  faChevronDown,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import "./css/Search.css";

function Search() {
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
      <div className="searchInputKeyword">
        <button type="button" className="searchInputKeywordTitle">
          프론트
        </button>
      </div>
      <div className="searchInputResultWrapper">
        <div className="searchInputResultSection">
          <div className="searchInputResultHeader">
            <h2>연관직무</h2>
            <span>1</span>
          </div>
          <div className="categoryTagBar">
            <a className="categoryTagItem">프론트엔드 개발자</a>
          </div>
        </div>
        <div className="searchInputResultSection">
          <div className="searchInputResultHeader">
            <h2>회사</h2>
            <span>5</span>
          </div>
          <div className="companyListContainer">
            <a className="companyListItem">
              <div className="companyLogoGroup">
                <div className="companyItemSmallLogo">
                  <img src="https://static.wanted.co.kr/images/wdes/0_5.57a3e694.png" />
                </div>
                <div className="companyItemSmallTxt">
                  <h5>캐롯아이</h5>
                  <h6>IT, 컨텐츠</h6>
                </div>
              </div>
              <button className="companyFollow">팔로우</button>
            </a>
            <a className="companyListItem">
              <div className="companyLogoGroup">
                <div className="companyItemSmallLogo">
                  <img src="https://static.wanted.co.kr/images/wdes/0_5.57a3e694.png" />
                </div>
                <div className="companyItemSmallTxt">
                  <h5>캐롯아이</h5>
                  <h6>IT, 컨텐츠</h6>
                </div>
              </div>
              <button className="companyFollow">팔로우</button>
            </a>
            <a className="companyListItem">
              <div className="companyLogoGroup">
                <div className="companyItemSmallLogo">
                  <img src="https://static.wanted.co.kr/images/wdes/0_5.57a3e694.png" />
                </div>
                <div className="companyItemSmallTxt">
                  <h5>캐롯아이</h5>
                  <h6>IT, 컨텐츠</h6>
                </div>
              </div>
              <button className="companyFollow">팔로우</button>
            </a>
            <a className="companyListItem">
              <div className="companyLogoGroup">
                <div className="companyItemSmallLogo">
                  <img src="https://static.wanted.co.kr/images/wdes/0_5.57a3e694.png" />
                </div>
                <div className="companyItemSmallTxt">
                  <h5>캐롯아이</h5>
                  <h6>IT, 컨텐츠</h6>
                </div>
              </div>
              <button className="companyFollow">팔로우</button>
            </a>
            <a className="companyListItem">
              <div className="companyLogoGroup">
                <div className="companyItemSmallLogo">
                  <img src="https://static.wanted.co.kr/images/wdes/0_5.57a3e694.png" />
                </div>
                <div className="companyItemSmallTxt">
                  <h5>캐롯아이</h5>
                  <h6>IT, 컨텐츠</h6>
                </div>
              </div>
              <button className="companyFollow">팔로우</button>
            </a>
          </div>
        </div>
        <div className="searchInputResultSection">
          <div className="searchInputResultHeader">
            <h2>포지션</h2>
            <span>662</span>
          </div>
          <div className="searchInputJobList">
            <div className="searchSelectContainer">
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
            <hr className="filterWdlistDevider" />
            <div className="searchTagContainer">
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
            <div className="jobCardContainer">
              <JobCardList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
