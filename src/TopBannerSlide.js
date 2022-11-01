import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/TopBannerSlide.css";

function TopBannerSlide() {
  // 옵션
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    centerMode: true,
    variableWidth: true,
    slickPrev: "<button type='button' className='slick-prev'>N</button>", // 이전 화살표 모양 설정
    slickNext: "<button type='button' className='slick-next'>P</button>", // 다음 화살표 모양 설정
  };

  return (
    <Slider {...settings}>
      <div className="slide-image">
        <a href="#">
          <img src="image/slide1.jpg" alt="잡페어2022" />
        </a>
        <div className="information">
          <h2>[FREE] GDSC Job Fair Live</h2>
          <h3>국내 최고 스타트업 채용소식을 볼 수 있는 기회!</h3>
          <span className="blue-button" type="button">
            <a>바로가기 &gt;</a>
          </span>
        </div>
      </div>
      <div className="slide-image">
        <a href="#">
          <img src="image/slide2.jpg" alt="슬라이드 이미지" />
        </a>
        <div className="information">
          <h2>기업이 원하는 프론트 개발자 되기</h2>
          <h3>프리온보딩 프론트엔드 코스</h3>
          <span className="blue-button" type="button">
            <a>바로가기 &gt;</a>
          </span>
        </div>
      </div>
      <div className="slide-image">
        <a href="#">
          <img src="image/slide3.jpg" alt="슬라이드 이미지" />
        </a>
        <div className="information">
          <h2>10월 원티드살롱</h2>
          <h3>HR담당자를 위한 네트워킹</h3>
          <span className="blue-button" type="button">
            <a>바로가기 &gt;</a>
          </span>
        </div>
      </div>
      <div className="slide-image">
        <a href="#">
          <img src="image/slide4.jpg" alt="슬라이드 이미지" />
        </a>
        <div className="information">
          <h2>우리 회사를 소개합니다.</h2>
          <h3>'회사'에 대한 정보, 원티드가 찾아드릴게요!</h3>
          <span className="blue-button" type="button">
            <a>바로가기 &gt;</a>
          </span>
        </div>
      </div>
      <div className="slide-image">
        <a href="#">
          <img src="image/slide5.jpg" alt="슬라이드 이미지" />
        </a>
        <div className="information">
          <h2>단 4주! 백엔드 신입딱지 떼기</h2>
          <h3>프리온보딩 백엔드 코스</h3>
          <span className="blue-button" type="button">
            <a>바로가기 &gt;</a>
          </span>
        </div>
      </div>
      <div className="slide-image">
        <a href="#">
          <img src="image/slide6.jpg" alt="슬라이드 이미지" />
        </a>
        <div className="information">
          <h2>롯데헬스케어에 세로들어와!</h2>
          <h3>적극 채용 중인 포지션을 영상으로 확인하세요!</h3>
          <span className="blue-button" type="button">
            <a>바로가기 &gt;</a>
          </span>
        </div>
      </div>
      <div className="slide-image">
        <a href="#">
          <img src="image/slide7.jpg" alt="슬라이드 이미지" />
        </a>
        <div className="information">
          <h2>원티드긱스 &lt;개발자의 달&gt;</h2>
          <h3>프리랜서 개발자를 위한 이벤트</h3>
          <span className="blue-button" type="button">
            <a>바로가기 &gt;</a>
          </span>
        </div>
      </div>
    </Slider>
  );
}

export default TopBannerSlide;
