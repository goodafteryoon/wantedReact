import React from "react";
import Header from "./Header";
import "../src/css/Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCircleInfo,
  faCube,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

function Resume(props) {
  return (
    <>
      <Header />
      <div className="main">
        <div className="resumeMainWrapper">
          <aside className="asideBtnWrapper">
            <picture>
              <source
                srcset="https://static.wanted.co.kr/career_connect/banner-back-pc-common.webp"
                type="image/webp"
              />
              <img
                src="https://static.wanted.co.kr/career_connect/banner-back-pc-common.png"
                alt="career-connect-icon"
              />
            </picture>
            <button className="carrerConnectBannerBtn">
              <div className="carrerConnectBannerBtnTitle">
                <p>이력서 작성이 쉬워진다! 1분 만에 채워지는 경력정보</p>
                <strong>내 경력 불러오기</strong>
                <picture>
                  <source
                    srcset="https://static.wanted.co.kr/career_connect/trio.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://static.wanted.co.kr/career_connect/trio.png"
                    alt="career-connect-icon"
                  />
                </picture>
              </div>
            </button>
          </aside>
          <div className="resumeHeader">
            <h4>최근 문서</h4>
            <a href="#">
              <span>원티드 이력서 소개&nbsp;</span>
              <FontAwesomeIcon icon={faCircleInfo} />
            </a>
          </div>
          <div className="resumeListWrapper">
            <div className="resumeListItem">
              <div className="resumeListAddItem">
                <div className="resumeListAddItemIconWrite">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </div>
                <p>새 이력서 작성</p>
              </div>
            </div>
            <div className="resumeListItem">
              <div className="resumeListAddItem">
                <div className="resumeListAddItemIconUpload">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </div>
                <p>파일 업로드</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
