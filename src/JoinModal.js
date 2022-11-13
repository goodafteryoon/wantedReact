import React, { useState, useEffect } from "react";
import "./css/JoinModal.css";
import "./css/LoginModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered, faXmark } from "@fortawesome/free-solid-svg-icons";

function JoinModal({ joinOpen, setJoinOpen, emails, setEmail }) {
  const [mobile, setMobile] = useState("");
  const [mobileValid, setMobileValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  // 인증번호 타이머 부분
  const [code, setCode] = useState("");
  const [codeValid, setCodeValid] = useState(false);

  // 비밀번호 정규식 부분
  const [pw, setPw] = useState("");
  const [pwValid, setPwValid] = useState(false);
  const [pwNotAllow, setPwNotAllow] = useState(true);

  useEffect(() => {
    if (pwValid) {
      setPwNotAllow(false);
      return;
    }
    setPwNotAllow(true);
  }, [pwValid]);

  const handelPw = (e) => {
    setPw(e.target.vlaue);
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (pwRegex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  // 비밀번호 확인 부분
  const [pwConfirm, setPwConfirm] = useState("");
  const [pwConfirmValid, setPwConfirmValid] = useState("");
  const [pwConfirmNotAllow, setPwConfirmNotAllow] = useState(false);

  const handlePwConfirm = (e) => {
    setPwConfirm(e.target.value);
    if (e.target.value === pw) {
      setPwConfirmValid(true);
    } else {
      setPwConfirmValid(false);
    }
  };

  useEffect(() => {
    if (pwConfirmValid) {
      setPwConfirmNotAllow(false);
      return;
    }
    setPwConfirmNotAllow(true);
  }, [pwConfirmValid]);

  // 동의사항 체크 부분
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);

  // 동의 사항 체크 부분
  const handleChk1 = (e) => {
    if (checked1) {
      setChecked1(false);
    } else if (!checked1) {
      setChecked1(true);
    }
  };

  const handleChk2 = (e) => {
    if (checked2 === true) {
      setChecked2(false);
    } else if (checked2 === false) {
      setChecked2(true);
    }
  };

  const handleChkAll = (e) => {
    if (checked1 && checked2) {
      // 선택 1,2 둘다 체크 안돼있을때 누르면 모두 true로
      setChecked1(false);
      setChecked2(false);
      setCheckedAll(false);
    } else if (checked1 || checked2) {
      // 선택 1 또는 2 둘 중 하나 체크 돼있을 때 누르면 모두 true로
      setChecked1(true);
      setChecked2(true);
      setCheckedAll(true);
    } else {
      // 그게 아니면(모두 체크 안돼있을때면) 모두 true로
      setChecked1(true);
      setChecked2(true);
      setCheckedAll(true);
    }
  };

  const reverseChkAll = () => {
    if (checked1 && checked2) {
      // 선택 1,2 가 체크 돼있을땐 all도 체크 되게 해줌.
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  };

  useEffect(() => {
    reverseChkAll();
  }, [checked1, checked2]); // 아래 생기는 밑줄은 무시해도 된다.

  // end 동의사항 체크 부분

  // 전화번호 입력 양식 정규식 표현
  const handleMobile = (e) => {
    setMobile(e.target.value);
    const regex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    if (regex.test(e.target.value)) {
      setMobileValid(true);
    } else {
      setMobileValid(false);
    }
  };

  useEffect(() => {
    // 비밀번호가 유효한지 추척해서 버튼 활성화
    if (mobileValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [mobileValid]);

  return (
    <>
      {joinOpen && (
        <div className="joinModal" id="joinModal">
          <div className="modalContainer">
            <div className="modalHeader">
              회원가입
              <button
                className="modalCloseButton"
                onClick={() => setJoinOpen(false)}
                id="joinCloseButton"
                type="button"
              >
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
              </button>
            </div>
            <div className="modalBody" id="joinModalBody">
              <div className="inputContainer">
                <form name="inputForm">
                  <div className="inputWrap">
                    <label>이메일</label>
                    <div className="inputBody">
                      <input
                        className="emailLogin"
                        type="mail"
                        value={emails}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="inputWrap">
                    <label>이름</label>
                    <div className="inputBody">
                      <input
                        name="name"
                        type="text"
                        placeholder="이름을 입력해 주세요."
                      />
                    </div>
                    <div className="modalError" id="nameError"></div>
                  </div>
                  <div className="inputWrap">
                    <label>휴대폰 번호</label>
                    <div className="inputBody">
                      <div className="mobileInputSelect">
                        <span id="selected">South Korea +82</span>
                        <span>&gt;</span>
                      </div>
                      <div className="mobileInput">
                        <input
                          name="mobileNumber"
                          className="joinInput"
                          placeholder="(예시) 01012345678"
                          value={mobile}
                          onChange={handleMobile}
                        />
                        <button
                          id="mobileCodeButton"
                          className="KoreaOnly"
                          type="button"
                          disabled={notAllow}
                        >
                          인증번호 받기
                        </button>
                      </div>
                      <div className="modalError" id="mobileError">
                        {!mobileValid && mobile.length > 0 && (
                          <div>올바른 전화번호을 입력해주세요.</div>
                        )}
                      </div>
                      <div className="mobileCode KoreaOnly">
                        <input
                          name="mobileCode"
                          className="joinInput"
                          placeholder="인증번호를 입력해 주세요."
                          disabled={notAllow}
                        />
                        <div className="modalError">
                          {!codeValid && code.length > 0 && (
                            <div>올바른 인증번호를 입력해주세요.</div>
                          )}
                        </div>
                        <button type="button" id="mobileCodeSubmit" disabled>
                          확인
                        </button>
                      </div>
                    </div>
                    <div id="codeGuide" className="inputGuide"></div>
                    <div className="modalError" id="mobileInputError"></div>
                  </div>
                  <div className="inputWrap">
                    <label>비밀번호</label>
                    <div className="inputBody">
                      <input
                        name="password"
                        className="joinInput"
                        type="password"
                        placeholder="비밀번호를 입력해 주세요."
                        vlaue={pw}
                        onChange={handelPw}
                      />
                    </div>
                    <div className="modalError" id="pwError">
                      {!pwValid && <div>올바르지 않는 비밀번호입니다.</div>}
                    </div>
                  </div>
                  <div className="inputWrap">
                    <div className="inputBody">
                      <input
                        name="passwordAgain"
                        className="joinInput"
                        type="password"
                        vlaue={pwConfirm}
                        onChange={handlePwConfirm}
                        disabled={pwNotAllow}
                        placeholder="비밀번호를 다시 한번 입력해 주세요."
                      />
                      <div className="inputGuide">
                        영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여
                        8자 이상 16자 이하로 입력해 주세요.
                      </div>
                    </div>
                    <div className="modalError" id="pwAgainError">
                      {!pwConfirmValid && pwConfirm.length > 0 && (
                        <div>비밀번호가 같지 않습니다.</div>
                      )}
                    </div>
                  </div>
                </form>
                <form name="checkForm">
                  <div className="agreeWrap">
                    <div className="allCheckWrap">
                      <div className="labelStyle">
                        <input
                          className="joinCheckAll"
                          type="checkbox"
                          name="agreeAll"
                          checked={checkedAll}
                          onChange={handleChkAll}
                        />
                        전체 동의
                      </div>
                    </div>
                    <div className="checkWrap">
                      <div className="labelStyle">
                        <input
                          type="checkbox"
                          checked={checked1}
                          onChange={handleChk1}
                        />
                        개인정보 이용 및 수집 동의 (필수)
                        <a
                          href="https://help.wanted.co.kr/hc/ko/articles/360040540111"
                          target="_blank"
                          className="agreeLink"
                        >
                          자세히
                        </a>
                      </div>
                    </div>
                    <div className="checkWrap">
                      <div className="labelStyle">
                        <input
                          type="checkbox"
                          checked={checked2}
                          onChange={handleChk2}
                        />
                        이벤트 등 알림 정보 받기
                        <a
                          href="https://help.wanted.co.kr/hc/ko/articles/360040540111"
                          target="_blank"
                          className="agreeLink"
                        >
                          자세히
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modalFooter">
              <div className="modalFooterWrap">
                <button type="submit" id="modalSignUpBtn" disabled>
                  회원가입하기
                </button>
              </div>
            </div>
          </div>
          {/* <div className="modalBg" id="joinBg"></div> */}
        </div>
      )}
    </>
  );
}

export default JoinModal;
