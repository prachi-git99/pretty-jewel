import React from "react";
import "./categorySlider.css";
import Slider from "react-slick";

const CategorySlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };
  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="title">Featured Categories</h2>
          <Slider {...settings} className="cat_slider_main">
            <div className="cat_item">
              <div className="cat_info">
                <img
                  src="https://www.giva.co/cdn/shop/collections/pink_necklaces_pend_copy.jpg"
                  alt="catImg"
                />
                <h5>Pandents</h5>
              </div>
            </div>
            {/* //................... */}
            <div className="cat_item">
              <div className="cat_info">
                <img
                  src="https://www.giva.co/cdn/shop/collections/sets_pink.webp"
                  alt="catImg"
                />
                <h5>Necklace</h5>
              </div>
            </div>
            {/* //................... */}
            <div className="cat_item">
              <div className="cat_info">
                <img
                  src="https://www.giva.co/cdn/shop/collections/pink_rings_c356f6b3-6547-4e39-9b08-dfdf5ecfc2b0.jpg"
                  alt="catImg"
                />
                <h5>Rings</h5>
              </div>
            </div>
            {/* //................... */}
            <div className="cat_item">
              <div className="cat_info">
                <img
                  src="https://www.giva.co/cdn/shop/collections/pink_br-min.png"
                  alt="catImg"
                />
                <h5>Bracelets</h5>
              </div>
            </div>
            {/* //................... */}
            <div className="cat_item">
              <div className="cat_info">
                <img
                  src="https://www.giva.co/cdn/shop/collections/Nose_pin_250_x_250.jpg"
                  alt="catImg"
                />
                <h5>Nose Pins</h5>
              </div>
            </div>
            {/* //................... */}
            <div className="cat_item">
              <div className="cat_info">
                <img
                  src="https://www.giva.co/cdn/shop/collections/earrings_pink-min.png"
                  alt="catImg"
                />
                <h5>Earrings</h5>
              </div>
            </div>
            {/* //................... */}
            <div className="cat_item">
              <div className="cat_info">
                <img
                  src="https://www.giva.co/cdn/shop/collections/Chains-min.jpg"
                  alt="catImg"
                />
                <h5>Chains</h5>
              </div>
            </div>
            {/* //................... */}
            <div className="cat_item">
              <div className="cat_info">
                <img
                  src="https://www.giva.co/cdn/shop/collections/Frame_2609057-min.jpg"
                  alt="catImg"
                />
                <h5>Men's</h5>
              </div>
            </div>
            {/* //................... */}
            <div className="cat_item">
              <div className="cat_info">
                <img
                  src="https://www.giva.co/cdn/shop/collections/Mangalsutras_3.jpg"
                  alt="catImg"
                />
                <h5>Mangalsutra</h5>
              </div>
            </div>
            {/* //................... */}
            <div className="cat_item">
              <div className="cat_info">
                <img
                  src="https://www.giva.co/cdn/shop/collections/toe-rings.jpg"
                  alt="catImg"
                />
                <h5>Toe rings</h5>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default CategorySlider;
