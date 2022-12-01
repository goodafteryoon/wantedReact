import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./css/LoginModal.css";
import JoinModal from "./JoinModal";
import { useSelector, useDispatch } from "react-redux";
import {
  loginOpen,
  joinOpen,
  modalClose,
  searchOpen,
  searchClose,
  passwordOpen,
} from "./modules/modal";
import Password from "./Password";

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { authService } from "fbase";

// join 모달을 노출하는 signUpModal 컴포넌트
function LoginModal() {
  // 회원가입 모달창 노출 여부 state (리덕스 들어가면서 현재는 주석 처리)
  // const [joinOpen, setJoinOpen] = useState(false);
  // 유즈셀렉터 : 보여주는 것
  const modalOpen = useSelector((state) => state.modal.modalOpen);
  const dispatch = useDispatch();
  // 로그인 로직
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  let [savedLoginId, setSavedLoginId] = useState("");

  useEffect(() => {
    if (emailValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
      setSavedLoginId(e.target.value);
    } else {
      setEmailValid(false);
    }
  };

  let storage = window.localStorage;

  const emailKeep = () => {
    if (savedLoginId === storage.getItem("ID")) {
      dispatch(passwordOpen()); // 실행시키는 거
    } else {
      dispatch(joinOpen());
      storage.setItem("ID", savedLoginId);
    }
  };

  // 소셜 로그인
  const onSocialClick = async (event) => {
    const name = event.target.name;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(authService, provider);
  };

  return (
    <>
      {modalOpen === 1 && (
        <div id="signUpModal">
          <div className="modalContainer">
            <div className="modalHeader">
              <img
                src="/image/wanted_BI_logotype.png"
                height="17px"
                width="74.38px"
                alt="logo"
              />
              <button
                className="modalCloseButton"
                onClick={() => dispatch(modalClose())}
                id="signUpCloseButton"
                type="button"
              >
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
              </button>
            </div>
            <div className="modalBody">
              <div className="modalTypo">
                <h1>
                  직장인을 위한
                  <br />
                  커리어 플랫폼, 원티드!
                </h1>
                <h2>
                  커리어 성장과 행복을 위한 여정
                  <br />
                  지금 원티드에서 시작하세요.
                </h2>
              </div>
              <div className="inputContainer">
                <div className="inputWrap">
                  <label>이메일</label>
                  <div className="inputBody">
                    <input
                      className="userEmail"
                      type="mail"
                      id="email"
                      placeholder="이메일을 입력해 주세요."
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                  <div className="modalError" id="emailError">
                    {!emailValid && email.length > 0 && (
                      <div>올바른 이메일을 입력해주세요.</div>
                    )}
                  </div>
                </div>
                <div className="socialContainer">
                  <button
                    className="mailLoginBtn"
                    id="mailLogin"
                    type="submit"
                    onClick={emailKeep}
                    disabled={notAllow}
                  >
                    이메일로 계속하기
                  </button>
                  <div className="modalOr">or</div>
                  <div className="snsLoginTypo">다음 계정으로 계속하기</div>
                  <div className="snsWrap">
                    <div className="modalSns">
                      <button>
                        <img
                          src="/image/kakao.png"
                          alt="카카오"
                          width="50"
                          height="50"
                        />
                      </button>
                      <div className="modalSnsTitle">Kakao</div>
                    </div>
                    <div className="modalSns">
                      <button id>
                        <img
                          src="/image/facebook.png"
                          alt="페북"
                          width="50"
                          height="50"
                        />
                      </button>
                      <div className="modalSnsTitle">Facebook</div>
                    </div>
                    <div className="modalSns">
                      <button>
                        <img
                          src="/image/google.png"
                          alt="구글"
                          width="50"
                          height="50"
                          onClick={onSocialClick}
                          name="google"
                        />
                      </button>
                      <div className="modalSnsTitle">Google</div>
                    </div>
                    <div className="modalSns">
                      <button onClick={onSocialClick} name="github">
                        <img
                          src="/image/apple.jpeg"
                          alt="애플"
                          width="50"
                          height="50"
                        />
                      </button>
                      <div className="modalSnsTitle">Apple</div>
                    </div>
                  </div>
                </div>
                <p className="modalInfo">
                  걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
                  <br />
                  회원가입 시{" "}
                  <a
                    href="https://help.wanted.co.kr/hc/ko/articles/360035484292"
                    target="_blank"
                  >
                    개인정보 처리방침
                  </a>
                  과{" "}
                  <a
                    href="https://help.wanted.co.kr/hc/ko/articles/360035844551"
                    target="_blank"
                  >
                    이용약관
                  </a>
                  을 확인하였으며, 동의합니다.
                </p>
              </div>
            </div>
          </div>
          <div
            className="modalBg"
            id="signUpBg"
            onClick={() => dispatch(modalClose())}

            // 디스패치 실행시키는 것
          ></div>
        </div>
      )}
      {modalOpen === 2 && <JoinModal emails={email} setEmail={setEmail} />}
      {modalOpen === 3 && <Password />}
    </>
  );
}

export default LoginModal;
