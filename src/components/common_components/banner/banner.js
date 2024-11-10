import React from "react";
import Banner0 from "../../../assets/images/banner/bnr-0.jpg";
import Banner1 from "../../../assets/images/banner/bnr-1.jpg";
import Banner2 from "../../../assets/images/banner/bnr-2.jpg";
import "./banner.css";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <div className="bannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              <img
                src={Banner0}
                className="w-100 transition"
                alt="Banner Img"
              />
              <div className="bnnr-info">
                <h2 className="mb-4">Bridal collection</h2>
                <Button className="bg-theme">Shop now</Button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img
                src={Banner1}
                className="w-100 transition"
                alt="Banner Img"
              />
              <div className="bnnr-info">
                <h2 className="mb-4">Office wears</h2>
                <Button className="bg-theme">Shop now</Button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img
                src={Banner2}
                className="w-100 transition"
                alt="Banner Img"
              />
              <div className="bnnr-info">
                <h2 className="mb-4">Engagement rings</h2>
                <Button className="bg-theme">Shop now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
