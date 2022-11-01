// import Slick
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/SimpleSlider.css";

function SimpleSlider() {
  // 옵션
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slickPrev: "<button type='button' className='slick-prev'>N</button>", // 이전 화살표 모양 설정
    slickNext: "<button type='button' className='slick-next'>P</button>", // 다음 화살표 모양 설정
  };

  return (
    <Slider {...settings}>
      <div>
        <img className="slideImg" alt="slideImg1" src="/image/4slide1.jpg" />
      </div>
      <div>
        <img className="slideImg" alt="slideImg2" src="/image/4slide2.jpg" />
      </div>
      <div>
        <img className="slideImg" alt="slideImg3" src="/image/4slide3.jpg" />
      </div>
      <div>
        <img className="slideImg" alt="slideImg4" src="/image/4slide4.jpg" />
      </div>
    </Slider>
  );
}

export default SimpleSlider;
