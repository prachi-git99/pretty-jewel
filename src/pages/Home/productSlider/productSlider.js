import React from "react";
import "./productSlider.css";
import Product from "../../../components/common_components/product/product";
import SectionHeading from "../../../components/common_components/sectionHeading/sectionHeading";
import Banner3 from "../../../assets/images/banner/bnr-3.jpg";
import Slider from "react-slick";

const ProductSlider = ({ title, list }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 1000,
    centerMode: true,
  };
  return (
    <section className="homeProducts productRow pt-0">
      <div className="container-fluid">
        <SectionHeading title={title} list={list} />
        <div className="row">
          <div className="col-md-3 ">
            <img src={Banner3} alt="Banner img" className="w-100 banner3" />
          </div>
          <div className="col-md-9">
            <Slider {...settings} className="productSlider">
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
              <div className="item">
                <Product />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductSlider;
