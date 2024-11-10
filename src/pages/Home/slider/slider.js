import React from "react";
import Slider from "react-slick";
import "./slider.css";
import Slider1 from "../../../assets/images/banner/sl-2.jpg";
import Slider2 from "../../../assets/images/banner/sl-0.jpg";
import Slider3 from "../../../assets/images/banner/sl-1.jpg";
import Button from "@mui/material/Button";

import SliderTextField from "../../../components/common_components/sliderTextField/sliderTextField";

const HomeSlider = () => {
  var settings = {
    dots: true,
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
          <div className="sliderItem ">
            <img src={Slider1} className="w-100 bannerImg" alt="banner-0" />
            <div className="sliderInfo slider1">
              <h2 className="mb-4">
                Don't miss amazing
                <br /> jewellery deals
              </h2>
              <p>Sign up for daily newslatter</p>
              <SliderTextField data={"Subscribe"} />
            </div>
          </div>
          <div className="sliderItem ">
            <img src={Slider2} className="w-100 bannerImg" alt="banner-1" />
            <div className="sliderInfo slider2 ">
              <h2 className="mb-4">
                Big Discount on
                <br />
                Gold jewellery
              </h2>
              <p>Save up to 30% off on your frist order</p>
              <SliderTextField data={"Enquire now"} />
            </div>
          </div>
          <div className="sliderItem ">
            <img src={Slider3} className="w-100 bannerImg" alt="banner-2" />
            <div className="sliderInfo slider3">
              <h2 className="mb-4">
                Gold & Silver
                <br /> jewellery deals
              </h2>
              <h4>50% off on making charges</h4>
              <Button className="bg-theme">Order now</Button>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
