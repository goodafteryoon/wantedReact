import React from "react";
import "./css/MainPage.css";
import Header from "./Header";
import Footer from "./Footer";
import TopBannerSlide from "./TopBannerSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronDown,
  faChevronRight,
  faCheck,
  faMagnifyingGlass,
  faBuilding,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

function CareerCard({ img, imgAlt, title, content, icon, iconAlt, author }) {
  return (
    <div className="careerContentItem">
      <div className="careerCardThumbnail">
        <img src={img} alt={imgAlt} />
      </div>
      <p className="careerCardTitle">{title}</p>
      <p className="CareerCardContent">{content}</p>
      <div className="CareerCardInfo">
        <img src={icon} alt={iconAlt} />
        <p>{author}</p>
      </div>
    </div>
  );
}

function ArticleCard({ img, imgAlt, title, tag }) {
  return (
    <div className="articleContentItem">
      <div className="careerCardThumbnail">
        <img src={img} alt={imgAlt} />
      </div>
      <p className="careerCardTitle">{title}</p>
      <p className="cardHashtag">{tag}</p>
    </div>
  );
}

function VodCard({ img, imgAlt, author, title, subTitle }) {
  return (
    <div className="articleContentItem">
      <div className="careerCardThumbnail">
        <img src={img} alt={imgAlt} />
      </div>
      <p className="careerCardName">{author}</p>
      <p className="careerCardTitle">{title}</p>
      <p className="card__sub">{subTitle}</p>
    </div>
  );
}

function EventCard({ img, kind, title, onOff, info }) {
  return (
    <div className="eventContentItem">
      <div className="eventCardThumbnail">
        <img src={img} alt="" />
      </div>
      <div className="eventItem_content">
        <span className="onOffKind">{onOff}</span>
        <span className="eventKind">{kind}</span>
        <p className="eventTitle">{title}</p>
        <p className="eventInfo">{info}</p>
      </div>
    </div>
  );
}

function QuickBtn(icon, name) {
  return (
    <div className="quickItem">
      <div className="quickIcon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="quickMenu">
        {name}
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
    </div>
  );
}

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
              <button className="questionButton" type="button">
                <FontAwesomeIcon icon={faCircleQuestion} opacity="0.4" />
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
              <CareerCard
                img="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F2nJ4%2Fimage%2FqSJHS37fAvWb7KXg_AkmPqZV8kE.jpg&amp;w=500&amp;q=75"
                imgAlt="이직 합격 후 '퇴사 통보' 언제, 어떻게 해야 좋을까"
                title=" 이직 합격 후 '퇴사 통보' 언제, 어떻게 해야 좋을까"
                content="  이직의 기나긴 여정이 마무리 되어가고, 이제 현회사에 퇴사사실을
                  알릴 절차만 남아있는 상태! 설마 퇴사통보도 하지 않고 나갈
                  생각을 하시진 않으시겠죠? 아무리 회사가 미워도 절차는 지키고
                  나가시는 것이 도리입니다. (무단 출근, 무통보 퇴사 이런 것들은
                  혹여나 괘씸죄로 현 회사에서 소송을 건다든가 말끔한 퇴사처리를
                  안 해주는 등 추후에도 문제가 생길 수 있"
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                iconAlt="brunch"
                author="퇴사유랑단"
              />
              <CareerCard
                img="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F4i7K%2Fimage%2FK5mUJd9QfnUnJ4f_fF_7f4s7U54.jpg&amp;w=500&amp;q=75"
                imgAlt="대학 입시도 목표 달성의 과정이다"
                title="대학 입시도 목표 달성의 과정이다"
                content='고3인 조카가 이번에 수능 시험을 보았는데 "망쳤다", "재수를
                  하겠다"는 이야기만 계속한다고 한다. 사춘기를 워낙 혹독하게
                  보냈던 상황이라 가족들 입장에서는 크게 엇나가지 않는
                  것만으로도 감사해하고 있었고, 그러다 보니 어느 누구도 조카의
                  원래 성적이 어느 정도였는지, 도대체 이번에는 얼마나 망친
                  것인지를 정확하게 모르고 있었다. 아주 여유가 있진 않은'
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                iconAlt="brunch"
                author="백승엽"
              />
              <CareerCard
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5KWBchI3g68%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLBnlkeFRj_YBc26WOWPVIVjae6kvA&amp;w=500&amp;q=75"
                imgAlt="개발자는 직군 별로 이런 일을 합니다 | 개발자 직무 분석, 채용 트렌드 + 개발의 역사를 곁들인.."
                title="개발자는 직군 별로 이런 일을 합니다 | 개발자 직무 분석,
                  채용 트렌드 + 개발의 역사를 곁들인.."
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&amp;w=60&amp;q=90"
                iconAlt="youtube"
                author="테헤란밸리"
              />
              <CareerCard
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F35388040.jpg&amp;w=500&amp;q=75"
                imgAlt="나의 커리어는 어디로 가는가"
                title="나의 커리어는 어디로 가는가"
                content="커리어를 이대로 쌓아가도 괜찮을지 고민하는 직장인의 실제
                  사연을 통해 ‘직장생활의 리얼리티’를 들여다보고, 현실을
                  극복하기 위한 방법에 대해 이야기합니다. 지금보다 더 행복하고
                  즐거운 직장생활을 위해, 그리고 나의 연봉과 커리어의 성장을
                  위해!"
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90"
                iconAlt="wanted"
                author="한국인성컨설팅&마인드클리닉 노주선"
              />

              <CareerCard
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F4%2F64766774.jpg&amp;w=500&amp;q=75"
                imgAlt="이력서가 무엇인지 살펴보기 - 백승엽"
                title="서류전형, 실제로 그러할까? - 임휘진"
                content=" 머리로는 이해했지만, 막상 활용하기에는 어려웠던 이력서 작성
                  노하우들...커리어를 고민하는 또 한 사람의 직장인으로서, 그리고
                  호기심 많은 데이터분석가로서, '잘 쓴' 이력서에서는 그
                  노하우들이 어떻게 구현되었는지 늘 궁금했습니다.오늘은 이력서
                  분석 콘텐츠의 두 번째 영상으로 서류전형의 비밀에 대해
                  살펴봤습니다.이 영상의 여러분의 서류 합격률을 높이는 데 도움이
                  되기를 바랍니다."
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90"
                iconAlt="wanted"
                author="원티드랩 임휘진"
              />
              <CareerCard
                img="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F2VTq%2Fimage%2F9odPCNRsOBrbx0eaulkt8k9HIao.jpg&amp;w=500&amp;q=75"
                imgAlt="면접관이 자기소개를 해보란 세 가지 이유"
                title="면접관이 자기소개를 해보란 세 가지 이유"
                content='"자기소개 준비해오셨을 텐데요. 간단하게 부탁드립니다."
                "안녕하십니까. 저는 삼성전자 DS부문 영업마케팅 직무에 지원한
                  마크입니다. 저는..." 면접장에서 가장 먼저 하는 질문 1순위,
                  그리고 면접관이 가장 많이 하는 질문 1순위, 다름 아닌
                  자기소개다. 언제부터였을까. 자기소개는 오래전부터 면접관들에게
                  사랑받는 질문이다. &lt;취업 바이블&gt;&nbsp;매거진을 발행'
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                iconAlt="brunch"
                author="마크"
              />
              <CareerCard
                img="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F4Oxh%2Fimage%2FUSeHqLvKrfacJ2aulG02G5hUMW0.png&amp;w=500&amp;q=75"
                imgAlt="직무의 미래는 어떻게 될까요?"
                title="직무의 미래는 어떻게 될까요?"
                content="
                  기획, 인사, 마케팅, 연구개발, 생산 관리 등의 직무는
                  비즈니스에서 오랫동안 있었습니다. 그러나 4차 산업혁명 시대가
                  도래한 뒤, 기존에 있었던 직무들의 역량과 역할이 재정의 되고
                  있습니다. HR 직무로 예를 들어보겠습니다. 아래를 참고해보세요.
                  2015년 HR 직무에 필요한 역량으로는 1. 복합적 문제해결 2.
                  대인관계 역량 3. 인적자원 관리 역량"
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90"
                iconAlt="brunch"
                author="취준생LAB"
              />
              <CareerCard
                img="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220703%2F14%2F28331386.jpg&amp;w=500&amp;q=75"
                imgAlt="Talk : 면접을부탁해 - 마케팅직군"
                title=" Talk : 면접을부탁해 - 마케팅직군"
                content="     수많은 지원자들 사이에서 꼭 함께 하고 싶다는 생각이 들었던
                  지원자에게는 어떤 특징이 있었는지를 공유합니다."
                icon="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90"
                iconAlt="wanted"
                author="원티드랩 서민웅"
              />
            </div>
            <div className="careerMoreContainer">
              <button className="careerMore">
                <span className="careerMore__button">더 많은 콘텐츠 보기</span>
                <span className="careerMore__icon">
                  <FontAwesomeIcon icon={faChevronDown} />
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
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
            <div className="contentContainer">
              <ArticleCard
                img="image/article1.jpg"
                imgAlt="회사에서도 SNS처럼 만나면 되잖아!"
                title="회사에서도 SNS처럼 만나면 되잖아!"
                tag="#HR"
              />
              <ArticleCard
                img="image/article2.jpg"
                imgAlt="회사에서도 SNS처럼 만나면 되잖아!"
                title="   스타트업에서는 어떤 방식으로 시니어를 채용해야 할까?"
                tag="#HR #조직문화 #경영/전략"
              />
              <ArticleCard
                img="image/article3.jpg"
                imgAlt="회사에서도 SNS처럼 만나면 되잖아!"
                title=" 신선한 가을 날씨에 어울릴 아티클 추천 리스트"
                tag="#마케팅/광고 #커리어고민 #시리즈"
              />
              <ArticleCard
                img="image/article4.jpg"
                imgAlt="회사에서도 SNS처럼 만나면 되잖아!"
                title=" 애써 모신 시니어, 우리 조직엔 안맞는 사람?"
                tag="#HR #조직문화 #리더십"
              />
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
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
            <div className="contentContainer">
              <VodCard
                img="image/vod1.jpg"
                imgAlt="회사에서도 SNS처럼 만나면 되잖아!"
                author="노무법인 예담HR컨설팅 장내석"
                title="회사를 구하는 인사"
                subTitle="회사를 구하는 인사 : Live Talk #27"
              />
              <VodCard
                img="image/vod2.jpg"
                imgAlt="회사에서도 SNS처럼 만나면 되잖아!"
                author=" 피플펀드 권순관, 드림어스 제정민"
                title="신입 개발자의 취업 성공기"
                subTitle=" 신입 개발자의 취업 성공기 : Live Talk #50"
              />
              <VodCard
                img="image/vod3.JPG"
                imgAlt="회사에서도 SNS처럼 만나면 되잖아!"
                author="노무법인미담 김동미"
                title="선택적 근로시간제의 모든 것 (주 52시간제 정착 시리즈3)"
                subTitle="선택적 근로 시간제의 모든 것"
              />
              <VodCard
                img="image/vod4.JPG"
                imgAlt="회사에서도 SNS처럼 만나면 되잖아!"
                author="전) 원티드 최보민"
                title="포트폴리오를 부탁해"
                subTitle=" [무료] 포트폴리오를 부탁해 by 원티드"
              />
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
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
            <div className="contentContainer">
              <EventCard
                img="image/event1.JPG"
                kind="교육"
                title="스타트업 Lead를 위한 그룹코칭"
                info="2022.12.08 (목)"
              />
              <EventCard
                img="image/event2.JPG"
                kind="교육"
                onOff="온라인"
                title="프리온보딩 백엔드 코스"
                info="2022.12.08 (목)"
              />
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
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span>&nbsp;첫 구독 0원 시작하기</span>
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
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className="quickMenu">
                  채용공고
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </div>
              </div>
              <div className="quickItem">
                <div className="quickIcon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="quickMenu">
                  내 프로필
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </div>
              </div>
              <div className="quickItem">
                <div className="quickIcon">
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <div className="quickMenu">
                  매치업
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </div>
              </div>
              <div className="quickItem">
                <div className="quickIcon">
                  <FontAwesomeIcon icon={faSliders} />
                </div>
                <div className="quickMenu">
                  직군별 연봉
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
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
