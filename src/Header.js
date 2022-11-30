import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import "./css/Header.css";
import LoginModal from "./LoginModal";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import {
  loginOpen,
  joinOpen,
  modalClose,
  searchOpen,
  searchClose,
} from "./modules/modal";
import HeaderLogin from "./HeaderLogin";

// 모달을 노출하는 헤더 컴포넌트
function Header() {
  // 헤더랑 헤더 로그인 형제 자매 관계
  // 모달창 노출 여부 state (리덕스 들어가면서 현재는 지움)
  // 회원가입 모달창 띄우기
  const modalOpen = useSelector((state) => state.modal.modalOpen);
  const searchFilter = useSelector((state) => state.modal.searchFilter);

  const login = useSelector((state) => state.login.login);
  const dispatch = useDispatch();

  return (
    <>
      {login === false && (
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
              <div className="headerNavTitle">
                <Link to={"/"}>
                  <img
                    src="/image/wanted_BI_logotype.png"
                    height="17px"
                    width="74.38px"
                    alt="원티드 로고"
                  />
                </Link>
              </div>
              <button
                onClick={() => dispatch(loginOpen())}
                type="button"
                className="mediaVersignUpBtn"
                id="mediaVersignUpBtn"
              >
                회원가입하기
              </button>
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
                <a href="https://www.wanted.co.kr/cv/intro">이력서 </a>
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
                <a href="https://www.wanted.co.kr/aiscore/resume">
                  AI 합격예측
                </a>
                <span className="headerNavSup">Beta</span>
              </div>
            </div>
            <div className="headerNavItem">
              <div className="headerAsideList">
                <button onClick={() => dispatch(searchOpen())}>
                  {/*서치 온 클릭 있던 버튼 자리*/}
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
              <button className="mediaVerAsideBtn">
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
              <div className="headerAsideList">
                <button
                  onClick={() => dispatch(loginOpen())}
                  type="button"
                  className="signUpButton"
                  id="signUpBtn"
                >
                  회원가입/로그인
                </button>
              </div>
              <div className="headerAsideList">|</div>
              <div className="headerAsideList">
                <a className="headerDashboardBtn" href=" ">
                  기업 서비스
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalOpen >= 1 ? <LoginModal /> : null}
      {searchFilter && <SearchBar />}
      {login === true && <HeaderLogin />}
    </>
  );
}

export default Header;
