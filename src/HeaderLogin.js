import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import "./css/Header.css";
import "./css/HeaderLogin.css";
import Header from "./Header";

import LoginModal from "./LoginModal";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { logIN } from "./modules/login";
import {
  loginOpen,
  joinOpen,
  modalClose,
  searchOpen,
  searchClose,
} from "./modules/modal";
function HeaderLogin() {
  const [savedLoginId, setSavedLoginId] = useState();
  const [savedLoginPassword, setSavedLoginPassword] = useState();

  const dispatch = useDispatch();

  let storage = window.localStorage;

  const login = useSelector((state) => state.login.login);

  const logoutBtn = () => {
    storage.clear();
    setSavedLoginId(storage.getItem("ID"));
    setSavedLoginPassword(storage.getItem("PW"));
    dispatch(logIN());
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
              <button
                type="button"
                className="loginHeaderBtn"
                onClick={() => dispatch(searchOpen())}
              >
                {/*서치 온 클릭 있던 버튼 자리*/}
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <div className="headerAsideList">
              <button type="button" className="loginHeaderBtn">
                <FontAwesomeIcon icon={faBell} />
              </button>
            </div>
            <div className="headerAsideList">
              <button
                type="button"
                className="loginHeaderBtn"
                onClick={logoutBtn}
              >
                <FontAwesomeIcon icon={faCircleUser} opacity="0.4" />
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
    </>
  );
}

export default HeaderLogin;
