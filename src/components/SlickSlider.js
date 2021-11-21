import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import "./SimpleSlider.css";

const SlickSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="sp_slider_container">
      <Slider {...settings}>
        {[10, 20, 30, 40].map((item, index) => (
          <div key={index}>
            <h1>{item}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
