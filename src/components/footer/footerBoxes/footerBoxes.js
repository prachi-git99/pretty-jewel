import Icon5 from "../../../assets/images/return.png";
import React from "react";
import "./footerBoxes.css";
import Icon1 from "../../../assets/images/sale.png";
import Icon2 from "../../../assets/images/free-delivery.png";
import Icon3 from "../../../assets/images/hot-deal.png";
import Icon4 from "../../../assets/images/assortment.png";

const FooterBoxes = () => {
  return (
    <div className="footerBoxes">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box d-flex align-items-center w-100">
              <span>
                <img src={Icon1} alt="icon" />
              </span>
              <div className="info">
                <h5>Best prices & offers</h5>
                <p>Orders ₹500 or more</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="box d-flex align-items-center w-100">
              <span>
                <img src={Icon2} alt="icon" />
              </span>
              <div className="info">
                <h5>Free delivery</h5>
                <p>24/7 amazing services</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="box d-flex align-items-center w-100">
              <span>
                <img src={Icon3} alt="icon" />
              </span>
              <div className="info">
                <h5>Great daily deal</h5>
                <p>When you sign up</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="box d-flex align-items-center w-100">
              <span>
                <img src={Icon4} alt="icon" />
              </span>
              <div className="info">
                <h5>Wide assortment</h5>
                <p>Mega discount</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="box d-flex align-items-center w-100">
              <span>
                <img src={Icon5} alt="icon" />
              </span>
              <div className="info">
                <h5>Easy return</h5>
                <p>Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBoxes;
