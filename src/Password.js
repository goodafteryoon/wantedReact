import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./css/LoginModal.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import {
  loginOpen,
  joinOpen,
  modalClose,
  searchOpen,
  searchClose,
  passwordOpen,
} from "./modules/modal";

import { logIN } from "./modules/login";

function Password() {
  const [pw, setPw] = useState("");
  let storage = window.localStorage;

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const nextBtn = () => {
    if (pw === storage.getItem("PW")) {
      dispatch(logIN());
      dispatch(modalClose());
    } else {
      dispatch(passwordOpen());
    }
  };

  const dispatch = useDispatch();

  return (
    <>
      <div id="signUpModal">
        <div className="modalContainer">
          <div className="modalHeader">
            <button
              className="modalCloseButton"
              id="signUpCloseButton"
              type="button"
            >
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => dispatch(modalClose())}
              ></FontAwesomeIcon>
            </button>
            <h1>이메일로 로그인</h1>
          </div>
          <div className="modalBody">
            <div className="inputContainer">
              <div className="inputWrap">
                <label>비밀번호</label>
                <div className="inputBody">
                  <input
                    className="userEmail"
                    type="password"
                    id="password"
                    value={pw}
                    onChange={handlePw}
                  />
                </div>
                <div className="modalError" id="emailError">
                  {<div>비밀번호가 일치하지 않습니다.</div>}
                </div>
              </div>
              <div>
                <button
                  className="mailLoginBtn"
                  id="mailLogin"
                  type="submit"
                  onClick={nextBtn}
                >
                  다음
                </button>
                <div className="modalOr">비밀번호 초기화/변경</div>
              </div>
            </div>
          </div>
        </div>
        <div className="modalBg"></div>
      </div>
    </>
  );
}

export default Password;
