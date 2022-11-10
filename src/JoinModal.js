import React, { useState, useEffect } from "react";
import "./css/JoinModal.css";
import "./css/LoginModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function JoinModal({ joinOpen, setJoinOpen }) {
  const [mobile, setMobile] = useState("");
  const [mobileValid, setMobileValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);

  // 동의 사항 체크 부분
  const handleChkAll = (e) => {
    if (!checked1 && !checked2) {
      // 선택 1,2 둘다 체크 안돼있을때 누르면 모두 true로
      setChecked1(true);
      setChecked2(true);
      setCheckedAll(true);
    } else if (checked1 && checked2) {
      // 선택 1, 2, 둘다 체크 돼있을때 누르면 모두 false로
      setChecked1(false);
      setChecked2(false);
      setCheckedAll(false);
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

  useEffect(() => {
    reverseChkAll();
  }, [checked1, checked2]);

  useEffect(() => {
    if (mobileValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [mobileValid]);

  const handleMobile = (e) => {
    setMobile(e.target.value);
    const regex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    if (regex.test(e.target.value)) {
      setMobileValid(true);
    } else {
      setMobileValid(false);
    }
  };

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
                        <select name="country">
                          <option value="+82">+82 South Korea</option>
                          <option value="+81">+81 Japan</option>
                          <option value="+886">+886 Taiwan</option>
                          <option value="+852">+852 Hong Kong</option>
                          <option value="+65">+65 Singapore</option>
                          <option value="+93">+93 Afghanistan</option>
                          <option value="+355">+355 Albania</option>
                          <option value="+213">+213 Algeria</option>
                          <option value="+244">+244 Angola</option>
                          <option value="+54">+54 Argentina</option>
                          <option value="+374">+374 Armenia</option>
                          <option value="+297">+297 Aruba</option>
                          <option value="+61">+61 Australia</option>
                          <option value="+43">+43 Austria</option>
                          <option value="+994">+994 Azerbaijan</option>
                          <option value="+973">+973 Bahrain</option>
                          <option value="+880">+880 Bangladesh</option>
                          <option value="+375">+375 Belarus</option>
                          <option value="+32">+32 Belgium</option>
                          <option value="+501">+501 Belize</option>
                          <option value="+229">+229 Benin</option>
                          <option value="+975">+975 Bhutan</option>
                          <option value="+591">+591 Bolivia</option>
                          <option value="+267">+267 Botswana</option>
                          <option value="+55">+55 Brazil</option>
                          <option value="+673">+673 Brunei</option>
                          <option value="+359">+359 Bulgaria</option>
                          <option value="+226">+226 Burkina Faso</option>
                          <option value="+855">+855 Cambodia</option>
                          <option value="+237">+237 Cameroon</option>
                          <option value=" +1"> +1 Canada</option>
                          <option value="+56">+56 Chile</option>
                          <option value="+86">+86 China</option>
                          <option value="+61">+61 Christmas Island</option>
                          <option value="+61">+61 Cocos Islands</option>
                          <option value="+57">+57 Colombia</option>
                          <option value="+269">+269 Comoros</option>
                          <option value="+506">+506 Costa Rica</option>
                          <option value="+385">+385 Croatia</option>
                          <option value="+53">+53 Cuba</option>
                          <option value="+599">+599 Curacao</option>
                          <option value="+357">+357 Cyprus</option>
                          <option value="+420">+420 Czech Republic</option>
                          <option value="+45">+45 Denmark</option>
                          <option value="+253">+253 Djibouti</option>
                          <option value="+593">+593 Ecuador</option>
                          <option value="+20">+20 Egypt</option>
                          <option value="+503">+503 El Salvador</option>
                          <option value="+240">+240 Equatorial Guinea</option>
                          <option value="+372">+372 Estonia</option>
                          <option value="+251">+251 Ethiopia</option>
                          <option value="+298">+298 Faroe Islands</option>
                          <option value="+679">+679 Fiji</option>
                          <option value="+358">+358 Finland</option>
                          <option value="+33">+33 France</option>
                          <option value="+689">+689 French Polynesia</option>
                          <option value="+220">+220 Gambia</option>
                          <option value="+995">+995 Georgia</option>
                          <option value="+49">+49 Germany</option>
                          <option value="+233">+233 Ghana</option>
                          <option value="+30">+30 Greece</option>
                          <option value="+299">+299 Greenland</option>
                          <option value="+502">+502 Guatemala</option>
                          <option value="+224">+224 Guinea</option>
                          <option value="+592">+592 Guyana</option>
                          <option value="+509">+509 Haiti</option>
                          <option value="+504">+504 Honduras</option>
                          <option value="+36">+36 Hungary</option>
                          <option value="+354">+354 Iceland</option>
                          <option value="+91">+91 India</option>
                          <option value="+62">+62 Indonesia</option>
                          <option value="+98">+98 Iran</option>
                          <option value="+964">+964 Iraq</option>
                          <option value="+353">+353 Ireland</option>
                          <option value="+972">+972 Israel</option>
                          <option value="+39">+39 Italy</option>
                          <option value="+962">+962 Jordan</option>
                          <option value="+7">+7 Kazakhstan</option>
                          <option value="+254">+254 Kenya</option>
                          <option value="+383">+383 Kosovo</option>
                          <option value="+965">+965 Kuwait</option>
                          <option value="+996">+996 Kyrgyzstan</option>
                          <option value="+856">+856 Laos</option>
                          <option value="+371">+371 Latvia</option>
                          <option value="+961">+961 Lebanon</option>
                          <option value="+218">+218 Libya</option>
                          <option value="+423">+423 Liechtenstein</option>
                          <option value="+370">+370 Lithuania</option>
                          <option value="+352">+352 Luxembourg</option>
                          <option value="+853">+853 Macau</option>
                          <option value="+389">+389 Macedonia</option>
                          <option value="+261">+261 Madagascar</option>
                          <option value="+265">+265 Malawi</option>
                          <option value="+60">+60 Malaysia</option>
                          <option value="+960">+960 Maldives</option>
                          <option value="+223">+223 Mali</option>
                          <option value="+356">+356 Malta</option>
                          <option value="+692">+692 Marshall Islands</option>
                          <option value="+222">+222 Mauritania</option>
                          <option value="+230">+230 Mauritius</option>
                          <option value="+52">+52 Mexico</option>
                          <option value="+373">+373 Moldova</option>
                          <option value="+976">+976 Mongolia</option>
                          <option value="+382">+382 Montenegro</option>
                          <option value="+212">+212 Morocco</option>
                          <option value="+258">+258 Mozambique</option>
                          <option value="+95">+95 Myanmar</option>
                          <option value="+264">+264 Namibia</option>
                          <option value="+977">+977 Nepal</option>
                          <option value="+31">+31 Netherlands</option>
                          <option value="+687">+687 New Caledonia</option>
                          <option value="+64">+64 New Zealand</option>
                          <option value="+505">+505 Nicaragua</option>
                          <option value="+227">+227 Niger</option>
                          <option value="+234">+234 Nigeria</option>
                          <option value="+47">+47 Norway</option>
                          <option value="+968">+968 Oman</option>
                          <option value="+92">+92 Pakistan</option>
                          <option value="+680">+680 Palau</option>
                          <option value="+970">+970 Palestine</option>
                          <option value="+507">+507 Panama</option>
                          <option value="+675">+675 Papua New Guinea</option>
                          <option value="+595">+595 Paraguay</option>
                          <option value="+51">+51 Peru</option>
                          <option value="+63">+63 Philippines</option>
                          <option value="+48">+48 Poland</option>
                          <option value="+351">+351 Portugal</option>
                          <option value="+974">+974 Qatar</option>
                          <option value="+262">+262 Reunion</option>
                          <option value="+40">+40 Romania</option>
                          <option value="+7">+7 Russia</option>
                          <option value="+250">+250 Rwanda</option>
                          <option value="+685">+685 Samoa</option>
                          <option value="+966">+966 Saudi Arabia</option>
                          <option value="+221">+221 Senegal</option>
                          <option value="+381">+381 Serbia</option>
                          <option value="+248">+248 Seychelles</option>
                          <option value="+232">+232 Sierra Leone</option>
                          <option value="+421">+421 Slovakia</option>
                          <option value="+386">+386 Slovenia</option>
                          <option value="+677">+677 Solomon Islands</option>
                          <option value="+252">+252 Somalia</option>
                          <option value="+27">+27 South Africa</option>
                          <option value="+211">+211 South Sudan</option>
                          <option value="+34">+34 Spain</option>
                          <option value="+94">+94 Sri Lanka</option>
                          <option value="+249">+249 Sudan</option>
                          <option value="+597">+597 Suriname</option>
                          <option value="+46">+46 Sweden</option>
                          <option value="+41">+41 Switzerland</option>
                          <option value="+963">+963 Syria</option>
                          <option value="+992">+992 Tajikistan</option>
                          <option value="+255">+255 Tanzania</option>
                          <option value="+66">+66 Thailand</option>
                          <option value="+228">+228 Togo</option>
                          <option value="+676">+676 Tonga</option>
                          <option value="+216">+216 Tunisia</option>
                          <option value="+90">+90 Turkey</option>
                          <option value="+993">+993 Turkmenistan</option>
                          <option value="+256">+256 Uganda</option>
                          <option value="+380">+380 Ukraine</option>
                          <option value="+971">
                            +971 United Arab Emirates
                          </option>
                          <option value="+44">+44 United Kingdom</option>
                          <option value="+1">+1 United States</option>
                          <option value="+598">+598 Uruguay</option>
                          <option value="+998">+998 Uzbekistan</option>
                          <option value="+678">+678 Vanuatu</option>
                          <option value="+58">+58 Venezuela</option>
                          <option value="+84">+84 Vietnam</option>
                          <option value="+967">+967 Yemen</option>
                          <option value="+260">+260 Zambia</option>
                          <option value="+263">+263 Zimbabwe</option>
                        </select>
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
                          disabled
                        />
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
                      />
                      <div className="inputGuide">
                        영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여
                        8자 이상 16자 이하로 입력해 주세요.
                      </div>
                    </div>
                    <div className="modalError" id="pwError"></div>
                  </div>
                  <div className="inputWrap">
                    <label>비밀번호 확인</label>
                    <div className="inputBody">
                      <input
                        name="passwordAgain"
                        className="joinInput"
                        type="password"
                        placeholder="비밀번호를 다시 한번 입력해 주세요."
                      />
                    </div>
                    <div className="modalError" id="pwAgainError"></div>
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
