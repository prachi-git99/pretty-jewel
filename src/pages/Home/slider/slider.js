import React from "react";
import Slider from "react-slick";
import "./slider.css";
import Slider1 from "../../../assets/images/banner/b1.jpg";
import Slider2 from "../../../assets/images/banner/b0.jpg";
import Slider3 from "../../../assets/images/banner/sl-1.jpg";

const HomeSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };
  return (
    <section className="homeSlider">
      <div className="container-fluid">
        <Slider {...settings} className="homeSliderMain">
          <div className="sliderItem">
            <img src={Slider1} className="w-100 bannerImg" />
          </div>
          <div className="sliderItem">
            <img src={Slider2} className="w-100 bannerImg" />
          </div>
          <div className="sliderItem">
            <img src={Slider3} className="w-100 bannerImg" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
