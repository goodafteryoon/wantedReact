import React from "react";
import "./MainPage.css";
import Header from "./Header";
import Footer from "./Footer";
import TopBannerSlide from "./TopBannerSlide";

function MainPage() {
  return (
    <>
      <Header />
      <div className="main">
        <TopBannerSlide />
        <div className="careerSection">
          <div className="careerWrapper">
            <div className="titleContainer">
              <h2>나에게 필요한 커리어 인사이트</h2>
              <button className="question-button" type="button">
                <i className="fa-regular fa-circle-question" opacity="0.4"></i>
              </button>
            </div>
            <div className="listContainer">
              <button className="list__button">
                <span className="list-button">커리어고민</span>
              </button>
              <button className="list__button">
                <span className="list-button">인간관계</span>
              </button>
              <button className="list__button">
                <span className="list-button">취업/이직</span>
              </button>
              <button className="list__button">
                <span className="list-button">IT/기술</span>
              </button>
              <button className="list__button">
                <span className="list-button">라이프스타일</span>
              </button>
              <button className="list__button">
                <span className="list-button">조직문화</span>
              </button>
              <button className="list__button">
                <span className="list-button">리더십</span>
              </button>
              <button className="list__button">
                <span className="list-button">회사생활</span>
              </button>
              <button className="list__button">
                <span className="list-button">개발</span>
              </button>
            </div>
            <div className="contentContainer">
              <div className="careerContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F2nJ4%2Fimage%2FqSJHS37fAvWb7KXg_AkmPqZV8kE.jpg&amp;w=500&amp;q=75"
                    alt="이직 합격 후 '퇴사 통보' 언제, 어떻게 해야 좋을까"
                  />
                </div>
                <p className="careerCardTitle">
                  이직 합격 후 '퇴사 통보' 언제, 어떻게 해야 좋을까
                </p>
                <p className="CareerCardContent">
                  이직의 기나긴 여정이 마무리 되어가고, 이제 현회사에 퇴사사실을
                  알릴 절차만 남아있는 상태! 설마 퇴사통보도 하지 않고 나갈
                  생각을 하시진 않으시겠죠? 아무리 회사가 미워도 절차는 지키고
                  나가시는 것이 도리입니다. (무단 출근, 무통보 퇴사 이런 것들은
                  혹여나 괘씸죄로 현 회사에서 소송을 건다든가 말끔한 퇴사처리를
                  안 해주는 등 추후에도 문제가 생길 수 있
                </p>
                <div className="CareerCardInfo">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                    alt="brunch"
                  />
                  <p>퇴사유랑단</p>
                </div>
              </div>
              <div className="careerContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F4i7K%2Fimage%2FK5mUJd9QfnUnJ4f_fF_7f4s7U54.jpg&amp;w=500&amp;q=75"
                    alt="대학 입시도 목표 달성의 과정이다"
                  />
                </div>
                <p className="careerCardTitle">
                  대학 입시도 목표 달성의 과정이다
                </p>
                <p className="CareerCardContent">
                  고3인 조카가 이번에 수능 시험을 보았는데 "망쳤다", "재수를
                  하겠다"는 이야기만 계속한다고 한다. 사춘기를 워낙 혹독하게
                  보냈던 상황이라 가족들 입장에서는 크게 엇나가지 않는
                  것만으로도 감사해하고 있었고, 그러다 보니 어느 누구도 조카의
                  원래 성적이 어느 정도였는지, 도대체 이번에는 얼마나 망친
                  것인지를 정확하게 모르고 있었다. 아주 여유가 있진 않은{" "}
                </p>
                <div className="CareerCardInfo">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                    alt="brunch"
                  />
                  <p>백승엽</p>
                </div>
              </div>
              <div className="careerContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5KWBchI3g68%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLBnlkeFRj_YBc26WOWPVIVjae6kvA&amp;w=500&amp;q=75"
                    alt="개발자는 직군 별로 이런 일을 합니다 | 개발자 직무 분석, 채용 트렌드 + 개발의 역사를 곁들인.."
                  />
                </div>
                <p className="careerCardTitle">
                  개발자는 직군 별로 이런 일을 합니다 | 개발자 직무 분석, 채용
                  트렌드 + 개발의 역사를 곁들인..
                </p>
                <div className="CareerCardInfo">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&amp;w=60&amp;q=90"
                    alt="youtube"
                  />
                  <p>테헤란밸리</p>
                </div>
              </div>
              <div className="careerContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F35388040.jpg&amp;w=500&amp;q=75"
                    alt="나의 커리어는 어디로 가는가"
                  />
                </div>
                <p className="careerCardTitle">나의 커리어는 어디로 가는가</p>
                <p className="CareerCardContent">
                  커리어를 이대로 쌓아가도 괜찮을지 고민하는 직장인의 실제
                  사연을 통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을
                  극복하기 위한 방법에 대해 이야기합니다. 지금보다 더 행복하고
                  즐거운 직장생활을 위해, 그리고 나의 연봉과 커리어의 성장을
                  위해!
                </p>
                <div className="CareerCardInfo">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90"
                    alt="wanted"
                  />
                  <p>한국인성컨설팅&마인드클리닉 노주선</p>
                </div>
              </div>
              <div className="careerContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F4%2F64766774.jpg&amp;w=500&amp;q=75"
                    alt="이력서가 무엇인지 살펴보기 - 백승엽"
                  />
                </div>
                <p className="careerCardTitle">
                  서류전형, 실제로 그러할까? - 임휘진
                </p>
                <p className="CareerCardContent">
                  머리로는 이해했지만, 막상 활용하기에는 어려웠던 이력서 작성
                  노하우들...커리어를 고민하는 또 한 사람의 직장인으로서, 그리고
                  호기심 많은 데이터분석가로서, '잘 쓴' 이력서에서는 그
                  노하우들이 어떻게 구현되었는지 늘 궁금했습니다.오늘은 이력서
                  분석 콘텐츠의 두 번째 영상으로 서류전형의 비밀에 대해
                  살펴봤습니다.이 영상의 여러분의 서류 합격률을 높이는 데 도움이
                  되기를 바랍니다.
                </p>
                <div className="CareerCardInfo">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90"
                    alt="wanted"
                  />
                  <p>원티드랩 임휘진</p>
                </div>
              </div>
              <div className="careerContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F2VTq%2Fimage%2F9odPCNRsOBrbx0eaulkt8k9HIao.jpg&amp;w=500&amp;q=75"
                    alt="면접관이 자기소개를 해보란 세 가지 이유"
                  />
                </div>
                <p className="careerCardTitle">
                  면접관이 자기소개를 해보란 세 가지 이유
                </p>
                <p className="CareerCardContent">
                  "자기소개 준비해오셨을 텐데요. 간단하게 부탁드립니다."
                  "안녕하십니까. 저는 삼성전자 DS부문 영업마케팅 직무에 지원한
                  마크입니다. 저는..." 면접장에서 가장 먼저 하는 질문 1순위,
                  그리고 면접관이 가장 많이 하는 질문 1순위, 다름 아닌
                  자기소개다. 언제부터였을까. 자기소개는 오래전부터 면접관들에게
                  사랑받는 질문이다. &lt;취업 바이블&gt;&nbsp;매거진을 발행
                </p>
                <div className="CareerCardInfo">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                    alt="brunch"
                  />
                  <p>마크</p>
                </div>
              </div>
              <div className="careerContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F4Oxh%2Fimage%2FUSeHqLvKrfacJ2aulG02G5hUMW0.png&amp;w=500&amp;q=75"
                    alt="직무의 미래는 어떻게 될까요?"
                  />
                </div>
                <p className="careerCardTitle">직무의 미래는 어떻게 될까요?</p>
                <p className="CareerCardContent">
                  기획, 인사, 마케팅, 연구개발, 생산 관리 등의 직무는
                  비즈니스에서 오랫동안 있었습니다. 그러나 4차 산업혁명 시대가
                  도래한 뒤, 기존에 있었던 직무들의 역량과 역할이 재정의 되고
                  있습니다. HR 직무로 예를 들어보겠습니다. 아래를 참고해보세요.
                  2015년 HR 직무에 필요한 역량으로는 1. 복합적 문제해결 2.
                  대인관계 역량 3. 인적자원 관리 역량
                </p>
                <div className="CareerCardInfo">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                    alt="brunch"
                  />
                  <p>취준생LAB</p>
                </div>
              </div>
              <div className="careerContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220703%2F14%2F28331386.jpg&amp;w=500&amp;q=75"
                    alt="Talk : 면접을부탁해 - 마케팅직군"
                  />
                </div>
                <p className="careerCardTitle">
                  Talk : 면접을부탁해 - 마케팅직군
                </p>
                <p className="CareerCardContent">
                  수많은 지원자들 사이에서 꼭 함께 하고 싶다는 생각이 들었던
                  지원자에게는 어떤 특징이 있었는지를 공유합니다.
                </p>
                <div className="CareerCardInfo">
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90"
                    alt="wanted"
                  />
                  <p>원티드랩 서민웅</p>
                </div>
              </div>
            </div>
            <div className="careerMoreContainer">
              <button className="careerMore">
                <span className="careerMore__button">더 많은 콘텐츠 보기</span>
                <span className="careerMore__icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="articleSection">
          <div className="articleWrapper">
            <div className="titleContainer">
              <h2>3분만에 읽는 Wanted+ 아티클</h2>
            </div>
            <div className="subtitleContainer">
              <span className="article_title">아티클 전체보기</span>
              <span className="article_icon">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </div>
            <div className="contentContainer">
              <div className="articleContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="image/article1.jpg"
                    alt="회사에서도 SNS처럼 만나면 되잖아!"
                    className="Thumbnail_Thumbnail__image__NlEX0 undefined"
                    loading="lazy"
                  />
                </div>
                <p className="careerCardTitle">
                  회사에서도 SNS처럼 만나면 되잖아!
                </p>
                <p className="cardHashtag">#HR</p>
              </div>
              <div className="articleContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="image/article2.jpg"
                    alt="회사에서도 SNS처럼 만나면 되잖아!"
                    className="Thumbnail_Thumbnail__image__NlEX0 undefined"
                    loading="lazy"
                  />
                </div>
                <p className="careerCardTitle">
                  스타트업에서는 어떤 방식으로 시니어를 채용해야 할까?
                </p>
                <p className="cardHashtag">#HR #조직문화 #경영/전략</p>
              </div>
              <div className="articleContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="image/article3.jpg"
                    alt="회사에서도 SNS처럼 만나면 되잖아!"
                    className="Thumbnail_Thumbnail__image__NlEX0 undefined"
                    loading="lazy"
                  />
                </div>
                <p className="careerCardTitle">
                  신선한 가을 날씨에 어울릴 아티클 추천 리스트
                </p>
                <p className="cardHashtag">#마케팅/광고 #커리어고민 #시리즈</p>
              </div>
              <div className="articleContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="image/article4.jpg"
                    alt="회사에서도 SNS처럼 만나면 되잖아!"
                    className="Thumbnail_Thumbnail__image__NlEX0 undefined"
                    loading="lazy"
                  />
                </div>
                <p className="careerCardTitle">
                  애써 모신 시니어, 우리 조직엔 안맞는 사람?
                </p>
                <p className="cardHashtag">#HR #조직문화 #리더십</p>
              </div>
            </div>
          </div>
        </div>
        <div className="vodSection">
          <div className="vodWrapper">
            <div className="titleContainer">
              <h2>직장인을 위한 Wanted+ VOD</h2>
            </div>
            <div className="subtitleContainer">
              <span className="article_title">VOD 전체보기</span>
              <span className="article_icon">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </div>
            <div className="contentContainer">
              <div className="articleContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="image/vod1.jpg"
                    alt="회사에서도 SNS처럼 만나면 되잖아!"
                    className="Thumbnail_Thumbnail__image__NlEX0 undefined"
                    loading="lazy"
                  />
                </div>
                <p className="careerCardName">노무법인 예담HR컨설팅 장내석</p>
                <p className="careerCardTitle">회사를 구하는 인사</p>
                <p className="card__sub">회사를 구하는 인사 : Live Talk #27</p>
              </div>
              <div className="articleContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="image/vod2.jpg"
                    alt="회사에서도 SNS처럼 만나면 되잖아!"
                    className="Thumbnail_Thumbnail__image__NlEX0 undefined"
                    loading="lazy"
                  />
                </div>
                <p className="careerCardName">
                  피플펀드 권순관, 드림어스 제정민
                </p>
                <p className="careerCardTitle">신입 개발자의 취업 성공기</p>
                <p className="card__sub">
                  신입 개발자의 취업 성공기 : Live Talk #50
                </p>
              </div>
              <div className="articleContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="image/vod3.JPG"
                    alt="회사에서도 SNS처럼 만나면 되잖아!"
                    className="Thumbnail_Thumbnail__image__NlEX0 undefined"
                    loading="lazy"
                  />
                </div>
                <p className="careerCardName">노무법인미담 김동미</p>
                <p className="careerCardTitle">
                  선택적 근로시간제의 모든 것 (주 52시간제 정착 시리즈3)
                </p>
                <p className="card__sub">선택적 근로 시간제의 모든 것</p>
              </div>
              <div className="articleContentItem">
                <div className="careerCardThumbnail">
                  <img
                    src="image/vod4.JPG"
                    alt="회사에서도 SNS처럼 만나면 되잖아!"
                    className="Thumbnail_Thumbnail__image__NlEX0 undefined"
                    loading="lazy"
                  />
                </div>
                <p className="careerCardName">전) 원티드 최보민</p>
                <p className="careerCardTitle">포트폴리오를 부탁해</p>
                <p className="card__sub">
                  [무료] 포트폴리오를 부탁해 by 원티드
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="recommendSection">
          <div className="container">
            <button className="recommendBtn">
              <span>
                직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요. 👀 &gt;
              </span>
            </button>
          </div>
        </div>
        <div className="eventSection">
          <div className="eventWrapper">
            <div className="titleContainer">
              <h2>커리어 성장을 위한 맞춤 이벤트</h2>
            </div>
            <div className="subtitleContainer">
              <span className="article_title">이벤트 전체보기</span>
              <span className="article_icon">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </div>
            <div className="contentContainer">
              <div className="eventContentItem">
                <div className="eventCardThumbnail">
                  <img src="image/event1.JPG" />
                </div>
                <div className="eventItem_content">
                  <span className="eventKind">교육</span>
                  <p className="eventTitle">스타트업 Lead를 위한 그룹코칭</p>
                  <p className="eventInfo">2022.12.08 (목)</p>
                </div>
              </div>
              <div className="eventContentItem">
                <div className="eventCardThumbnail">
                  <img src="image/event2.JPG" />
                </div>
                <div className="eventItem_content">
                  <span className="onOffKind">온라인</span>
                  <span className="eventKind">교육</span>
                  <p className="eventTitle">프리온보딩 백엔드 코스</p>
                  <p className="eventInfo">2022.12.08 (목)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribeSection">
          <div className="subscribeContainer">
            <div className="subscribeItem">
              <div className="subscribeTitleContainer">
                <span className="subscribeLogo">Wanted +</span>
                <span className="subscribeTitle">구독해야 하는 이유</span>
                <p className="subscribeContent">
                  구독자의 서류 합격률이 비구독자보다 1.5배 높아요!
                </p>
              </div>
              <button className="subscribeBtn">
                <span className="subscribeIcon">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>첫 구독 0원 시작하기</span>
              </button>
            </div>
            <div className="subscribeItem">
              <img src="image/pass.jpg" alt="슬라이드 이미지" />
            </div>
          </div>
        </div>
        <div className="recruitMenuSection">
          <div className="quickMenuWrapper">
            <div className="quickTitle">
              <h2>채용 정보를 찾고 계셨나요?</h2>
            </div>
            <div className="quickMenuContainer">
              <div className="quickItem">
                <div className="quickIcon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="quickMenu">
                  채용공고
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </div>
              <div className="quickItem">
                <div className="quickIcon">
                  <i className="fa-regular fa-user"></i>
                </div>
                <div className="quickMenu">
                  내 프로필
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </div>
              <div className="quickItem">
                <div className="quickIcon">
                  <i className="fa-regular fa-building"></i>
                </div>
                <div className="quickMenu">
                  매치업
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </div>
              <div className="quickItem">
                <div className="quickIcon">
                  <i className="fa-solid fa-sliders"></i>
                </div>
                <div className="quickMenu">
                  직군별 연봉
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
