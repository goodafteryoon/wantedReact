import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerWrapper">
          <div className="headerNavItem">
            <button type="button">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=undefined&amp;q=75"
                alt="hamberger menu"
                width="17px"
                height="14px"
                objectFit="contain"
              />
            </button>
            <a className="headerNavTitle" href="https://www.wanted.co.kr/">
              <img
                src="image/wanted_BI_logotype.png"
                height="17px"
                width="74.38px"
                alt="원티드 로고"
              />
            </a>
          </div>
          <div className="headerNavItem">
            <div className="headerNavList">
              <a href="https://www.wanted.co.kr/jobsfeed">채용</a>
            </div>
            <div className="headerNavList">
              <a href="https://www.wanted.co.kr/events">이벤트</a>
            </div>
            <div className="headerNavList">
              <a href="https://www.wanted.co.kr/salary">직군별 연봉</a>
            </div>
            <div className="headerNavList">
              <a href="https://www.wanted.co.kr/cv/intro">이력서</a>
            </div>
            <div className="headerNavList">
              <a href="https://www.wanted.co.kr/community">
                커뮤니티<span className="headerNavSup">New</span>
              </a>
            </div>
            <div className="headerNavList">
              <a href="https://www.wanted.co.kr/gigs/experts">프리랜서</a>
            </div>
            <div className="headerNavList">
              <a href="https://www.wanted.co.kr/aiscore/resume">AI 합격예측</a>
              <span className="headerNavSup">Beta</span>
            </div>
          </div>
          <div className="headerNavItem">
            <div className="headerAsideList">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </div>
            <div className="headerAsideList">
              <button type="button" className="signUpButton" id="signUpBtn">
                회원가입/로그인
              </button>
            </div>
            <div className="headerAsideList">|</div>
            <div className="headerAsideList">
              <a className="headerDashboardBtn" href="#">
                기업 서비스
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
