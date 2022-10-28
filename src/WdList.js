import React from "react";
import "./WdList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import {
  faCaretDown,
  faChevronRight,
  faChevronDown,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

function WdList() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="jobSearchSection">
          <div className="filterContainer">
            <div className="container">
              <div className="buttonWrapper">
                <button type="button">
                  <span className="jobGroup">전체</span>
                  <span className="moreButton">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </button>
              </div>
              <div className="inputWrapper">
                <span className="input">직군을 선택해주세요.</span>
              </div>
            </div>
            <div className="container">
              <div className="selectWrapper">
                <div className="localSelect">
                  <button type="button">
                    <span className="local">
                      지역<span className="localSup">1</span>
                    </span>
                    <span className="korea">한국</span>
                    <span>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  </button>
                </div>
                <div className="yearSelect">
                  <button type="button">
                    <span className="year">경력</span>
                    <span className="whole">전체</span>
                    <span>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  </button>
                </div>
                <div className="skillSelect">
                  <button type="button">
                    <span className="skill">기술스택</span>
                    <span>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  </button>
                </div>
              </div>
              <div className="categoryWrapper">
                <div className="categorySelect">
                  <button type="button">
                    <span className="category">응답률순</span>
                    <span>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="tagButton">
                <button type="button">
                  연봉이 최고의 복지
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                    alt="연봉이 최고의 복지"
                  />
                </button>
              </div>
              <div className="tagButton">
                <button type="button">
                  퇴사율 10% 이하
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                    alt="퇴사율 10% 이하"
                  />
                </button>
              </div>
              <div className="tagButton">
                <button type="button">
                  급성장 중
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                    alt="급성장 중"
                  />
                </button>
              </div>
              <div className="tagButton">
                <button type="button">
                  병역특례
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                    alt="병역특례"
                  />
                </button>
              </div>
              <div className="tagButton">
                <button type="button">
                  50인 이하
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F3a965d18-c524-11ec-901c-acde48001122.png&amp;w=50&amp;q=75"
                    alt="50인 이하️"
                  />
                </button>
              </div>
              <div className="tagButton">
                <button type="button">
                  50인 이상️
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&amp;w=50&amp;q=75"
                    alt="50인 이상️"
                  />
                </button>
              </div>
              <div className="tagButton">
                <button type="button">
                  업력 5년 이상
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&amp;w=50&amp;q=75"
                    alt="업력 5년 이상"
                  />
                </button>
              </div>
              <div className="tagButton">
                <button type="button">
                  유연근무
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F827f6146-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                    alt="유연근무"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="jobListSection">
          <div className="bookmarkContainer">
            <button type="button">
              <span className="bookmarkIcon">
                <FontAwesomeIcon icon={faBookmark} />
              </span>
              <span className="bookmarkTitle">북마크 모아보기</span>
              <span className="bookmarkIcon">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </button>
          </div>
          <div className="jobListContainer">
            <div className="jobListItem">
              <div className="cardHeader">
                <img
                  alt="이미지"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31699%2F0dxtcoprgjpv9hwf__400_400.jpg&w=400&q=75"
                />
              </div>
              <div className="cardPosition">IOS 개발자</div>
              <div className="cardCompany">밴플</div>
              <div className="cardReponse">
                <span>응답률 매우 높음</span>
              </div>
              <div className="cardLocation">
                서울
                <span className="addressDot">.</span>
                <span>한국</span>
              </div>
              <div className="cardReward">채용보상금 1,000,000원</div>
            </div>
            <div className="jobListItem">
              <div className="cardHeader">
                <img
                  alt="이미지"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F27937%2Fnjqi79exz46jdad1__400_400.png&w=400&q=75"
                />
              </div>
              <div className="cardPosition">컨텐츠 디자이너</div>
              <div className="cardCompany">보더리스</div>
              <div className="cardReponse">
                <span>응답률 매우 높음</span>
              </div>
              <div className="cardLocation">
                서울
                <span className="addressDot">.</span>
                <span>한국</span>
              </div>
              <div className="cardReward">채용보상금 1,000,000원</div>
            </div>
            <div className="jobListItem">
              <div className="cardHeader">
                <img
                  alt="이미지"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F7290%2Ft1rzkwgwdmhlgegi__400_400.png&w=400&q=75"
                />
              </div>
              <div className="cardPosition">온라인 MD</div>
              <div className="cardCompany">제로파운더스</div>
              <div className="cardReponse">
                <span>응답률 매우 높음</span>
              </div>
              <div className="cardLocation">
                서울
                <span className="addressDot">.</span>
                <span>한국</span>
              </div>
              <div className="cardReward">채용보상금 1,000,000원</div>
            </div>
            <div className="jobListItem">
              <div className="cardHeader">
                <img
                  alt="이미지"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F15001%2Frlevmevn1jkftss2__400_400.jpg&w=400&q=75"
                />
              </div>
              <div className="cardPosition">
                Multimedia SW개발(Camera, Audio 등)
              </div>
              <div className="cardCompany">썬더소프트코리아</div>
              <div className="cardReponse">
                <span>응답률 매우 높음</span>
              </div>
              <div className="cardLocation">
                서울
                <span className="addressDot">.</span>
                <span>한국</span>
              </div>
              <div className="cardReward">채용보상금 1,000,000원</div>
            </div>
            <div className="jobListItem">
              <div className="cardHeader">
                <img
                  alt="이미지"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23344%2Fd50lyj9narsi9akc__400_400.jpg&w=400&q=75"
                />
              </div>
              <div className="cardPosition">전시설계 및 시공</div>
              <div className="cardCompany">닷밀</div>
              <div className="cardReponse">
                <span>응답률 매우 높음</span>
              </div>
              <div className="cardLocation">
                서울
                <span className="addressDot">.</span>
                <span>한국</span>
              </div>
              <div className="cardReward">채용보상금 1,000,000원</div>
            </div>
            <div className="jobListItem">
              <div className="cardHeader">
                <img
                  alt="이미지"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F17566%2Fqurxokllrmngh8zh__400_400.jpg&w=400&q=75"
                />
              </div>
              <div className="cardPosition">PLㅣ프로젝트 리더</div>
              <div className="cardCompany">창업인</div>
              <div className="cardReponse">
                <span>응답률 매우 높음</span>
              </div>
              <div className="cardLocation">
                서울
                <span className="addressDot">.</span>
                <span>한국</span>
              </div>
              <div className="cardReward">채용보상금 1,000,000원</div>
            </div>
            <div className="jobListItem">
              <div className="cardHeader">
                <img
                  alt="이미지"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31595%2Fqupzkmpyk9i9bxm8__400_400.jpg&w=400&q=75"
                />
              </div>
              <div className="cardPosition">
                자율주행 Vehicle Control Simulation Engineer
              </div>
              <div className="cardCompany">라이드플럭스</div>
              <div className="cardReponse">
                <span>응답률 매우 높음</span>
              </div>
              <div className="cardLocation">
                서울
                <span className="addressDot">.</span>
                <span>한국</span>
              </div>
              <div className="cardReward">채용보상금 1,000,000원</div>
            </div>
            <div className="jobListItem">
              <div className="cardHeader">
                <img
                  alt="이미지"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F11515%2Fi9k8el8bmdbdcejq__400_400.jpg&w=400&q=75"
                />
              </div>
              <div className=" cardPosition">
                데이터 엔지니어 / Python specialist (신입가능)
              </div>
              <div className="cardCompany">수성엔지니어링</div>
              <div className="cardReponse">
                <span>응답률 매우 높음</span>
              </div>
              <div className="cardLocation">
                서울
                <span className="addressDot">.</span>
                <span>한국</span>
              </div>
              <div className="cardReward">채용보상금 1,000,000원</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WdList;
