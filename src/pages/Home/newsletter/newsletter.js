import React from "react";
import SliderTextField from "../../../components/common_components/sliderTextField/sliderTextField";
import "./newsletter.css";
import Banner4 from "../../../assets/images/banner/bnr-4.jpg";

const Newsletter = () => {
  return (
    <section className="newsLetter">
      <div className="container-fluid">
        <img src={Banner4} alt="Banner img" className="w-100" />

        <div className="info">
          <h2 className="mb-4 text-theme">
            AM-PM Collection: A Day in the
            <br />
            Life with Everyday Jewellery
          </h2>
          <p>Sign up for daily newslatter</p>
          <SliderTextField data={"Subscribe"} />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
