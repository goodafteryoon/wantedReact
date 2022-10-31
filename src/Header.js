import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import SignUpModal from "./SignUpModal";

// 모달을 노출하는 헤더 컴포넌트
function Header() {
  // 모달창 노출 여부 state

  const [signUpOpen, setSignUpOpen] = useState(false);
  const navigate = useNavigate();

  const goToMain = () => {
    alert("메인 페이지로 이동합니다.");
    navigate("/");
  };

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
            <div className="headerNavTitle" onClick={goToMain}>
              <img
                src="image/wanted_BI_logotype.png"
                height="17px"
                width="74.38px"
                alt="원티드 로고"
              />
            </div>
          </div>
          <div className="headerNavItem">
            <div className="headerNavList">
              <Link to="/wdlist">채용</Link>
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
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="headerAsideList">
              <button
                onClick={() => setSignUpOpen(true)}
                type="button"
                className="signUpButton"
                id="signUpBtn"
              >
                회원가입/로그인
              </button>
            </div>
            <div className="headerAsideList">|</div>
            <div className="headerAsideList">
              <a className="headerDashboardBtn" href="">
                기업 서비스
              </a>
            </div>
          </div>
        </div>
      </div>
      <SignUpModal signUpOpens={signUpOpen} setSignUpOpens={setSignUpOpen} />
    </>
  );
}

export default Header;
