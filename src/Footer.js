import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerWrapper">
          <div className="footerNavContainer">
            <div className="footerNavItemWrapper">
              <div className="footerNavItem">
                <img src="image/logo.jpg" alt="슬라이드 이미지" />
              </div>
              <div className="footerNavItem">기업소개</div>
              <div className="footerNavItem">이용약관</div>
              <div className="footerNavItem">개인정보 처리방침</div>
              <div className="footerNavItem">고객센터</div>
            </div>
            <div className="footerNavItemWrapper">
              <div className="footerNavItem">
                <span className="snsIcon">
                  <img src="image/sns1.jpg" alt="슬라이드 이미지" />
                </span>
                <span className="snsIcon">
                  <img src="image/sns2.jpg" alt="슬라이드 이미지" />
                </span>
                <span className="snsIcon">
                  <img src="image/sns3.jpg" alt="슬라이드 이미지" />
                </span>
                <span className="snsIcon">
                  <img src="image/sns4.jpg" alt="슬라이드 이미지" />
                </span>
                <span className="snsIcon">
                  <img src="image/sns5.jpg" alt="슬라이드 이미지" />
                </span>
                <span className="snsIcon">
                  <img src="image/sns6.jpg" alt="슬라이드 이미지" />
                </span>
                <span className="snsIcon">
                  <img src="image/sns7.jpg" alt="슬라이드 이미지" />
                </span>
                <span className="snsIcon">
                  <img src="image/sns8.jpg" alt="슬라이드 이미지" />
                </span>
              </div>
            </div>
          </div>
          <div className="footerTxtContainer">
            <div className="footerTxtItem">
              <p>
                (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
                롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
                <br />
                유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
                (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
                02-539-7118
                <br />© Wantedlab, Inc.
              </p>
            </div>
            <div className="footerTxtItem">
              <select className="footerTxtSelect" width="250px">
                <option value="KR">한국 (한국어)</option>
              </select>
              <i className="icon-arrow_bottom_fill"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
