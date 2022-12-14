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
import MainPageJson from "./json/MainPage.json";
import styled from "styled-components";

function CareerCardList() {
  function CareerCard({ src, imgAlt, title, content, icon, iconAlt, author }) {
    return (
      <div className="careerContentItem">
        <div className="careerCardThumbnail">
          <img src={src} alt={imgAlt} />
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
  return (
    <>
      {MainPageJson.careerCardList.map((card) => (
        <CareerCard
          key={card.id}
          id={card.id}
          src={card.src}
          imgAlt={card.imgAlt}
          title={card.title}
          content={card.content}
          icon={card.icon}
          iconAlt={card.iconAlt}
          author={card.author}
        />
      ))}
    </>
  );
}

function ArticleCardList({ src, imgAlt, title, tag }) {
  return (
    <>
      {MainPageJson.articleCardList.map((card) => (
        <div className="articleContentItem" key={card.id}>
          <div className="careerCardThumbnail">
            <img src={card.src} alt={card.imgAlt} />
          </div>
          <p className="careerCardTitle">{card.title}</p>
          <p className="cardHashtag">{card.tag}</p>
        </div>
      ))}
    </>
  );
}

function VodCardList({ img, imgAlt, author, title, subTitle }) {
  return (
    <>
      {MainPageJson.vodCardList.map((card) => (
        <div className="articleContentItem" key={card.id}>
          <div className="careerCardThumbnail">
            <img src={card.img} alt={card.imgAlt} />
          </div>
          <p className="careerCardName">{card.author}</p>
          <p className="careerCardTitle">{card.title}</p>
          <p className="card__sub">{card.subTitle}</p>
        </div>
      ))}
    </>
  );
}

function EventCardList({ img, kind, title, onOff, info }) {
  return (
    <>
      {MainPageJson.eventCardList.map((card) => (
        <div className="eventContentItem" key={card.id}>
          <div className="eventCardThumbnail">
            <img src={card.img} alt="" />
          </div>
          <div className="eventItem_content">
            <span className={card.onOff && "onOffKind"}>{card.onOff}</span>
            <span className="eventKind">{card.kind}</span>
            <p className="eventTitle">{card.title}</p>
            <p className="eventInfo">{card.info}</p>
          </div>
        </div>
      ))}
    </>
  );
}

function QuickBtn({ icon, name }) {
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

function InterestTagSlideBtn({ title }) {
  return (
    <>
      {MainPageJson.listButtonList.map((btn) => (
        <button className="list__button">
          <span className="list-button">{btn.title}</span>
        </button>
      ))}
    </>
  );
}

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 900;
`;

function MainPage() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="slideSection">
          <TopBannerSlide />
        </div>
        <div className="careerSection">
          <div className="careerWrapper">
            <div className="titleContainer">
              <SectionTitle>????????? ????????? ????????? ????????????</SectionTitle>
              <button className="questionButton" type="button">
                <FontAwesomeIcon icon={faCircleQuestion} opacity="0.4" />
              </button>
            </div>
            <div className="listContainer">
              <InterestTagSlideBtn />
            </div>
            <div className="contentContainer">
              <CareerCardList />
            </div>
            <div className="careerMoreContainer">
              <button className="careerMore">
                <span className="careerMore__button">??? ?????? ????????? ??????</span>
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
              <SectionTitle>3????????? ?????? Wanted+ ?????????</SectionTitle>
            </div>
            <div className="subtitleContainer">
              <span className="article_title">????????? ????????????</span>
              <span className="article_icon">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
            <div className="contentContainer">
              <ArticleCardList />
            </div>
          </div>
        </div>
        <div className="vodSection">
          <div className="vodWrapper">
            <div className="titleContainer">
              <SectionTitle>???????????? ?????? Wanted+ VOD</SectionTitle>
            </div>
            <div className="subtitleContainer">
              <span className="article_title">VOD ????????????</span>
              <span className="article_icon">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
            <div className="contentContainer">
              <VodCardList />
            </div>
          </div>
        </div>
        <div className="recommendSection">
          <div className="container">
            <button className="recommendBtn">
              <span>
                ??????/????????? ???????????? ?????? ???????????? ????????? ?????????. ???? &gt;
              </span>
            </button>
          </div>
        </div>
        <div className="eventSection">
          <div className="eventWrapper">
            <div className="titleContainer">
              <SectionTitle>????????? ????????? ?????? ?????? ?????????</SectionTitle>
            </div>
            <div className="subtitleContainer">
              <span className="article_title">????????? ????????????</span>
              <span className="article_icon">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
            <div className="contentContainer">
              <EventCardList />
            </div>
          </div>
        </div>
        <div className="subscribeSection">
          <div className="subscribeContainer">
            <div className="subscribeItem">
              <div className="subscribeTitleContainer">
                <span className="subscribeLogo">Wanted+</span>
                <span className="subscribeTitle">&nbsp;???????????? ?????? ??????</span>
                <p className="subscribeContent">
                  ???????????? ?????? ???????????? ?????????????????? 1.5??? ?????????!
                </p>
              </div>
              <button className="subscribeBtn">
                <span className="subscribeIcon">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span>&nbsp;??? ?????? 0??? ????????????</span>
              </button>
            </div>
            <div className="subscribeItem">
              <img src="image/pass.jpg" alt="???????????? ?????????" />
            </div>
          </div>
        </div>
        <div className="recruitMenuSection">
          <div className="quickMenuWrapper">
            <div className="quickTitle">
              <h2>?????? ????????? ?????? ?????????????</h2>
            </div>
            <div className="quickMenuContainer">
              <QuickBtn icon={faMagnifyingGlass} name="????????????" />
              <QuickBtn icon={faUser} name="??? ?????????" />
              <QuickBtn icon={faBuilding} name="?????????" />
              <QuickBtn icon={faSliders} name="????????? ??????" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
