import React from "react";
import "./footer.css";
import Logo from "../../assets/images/logo_icon.png";
import FooterBoxes from "./footerBoxes/footerBoxes";
import { Link } from "react-router-dom";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import SliderTextField from "../common_components/sliderTextField/sliderTextField";
import PlaystoreImg from "../../assets/images/playstore.png";
import PaymentImg1 from "../../assets/images/payment upi.png";
import PaymentImg2 from "../../assets/images/payment card.png";
import GithubImg from "../../assets/images/github.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <FooterBoxes />
      <footer>
        <div className="container-fluid">
          <div className="row">
            {/* FOOTER PART 1 */}
            <div className="col-md-3 part1">
              <Link to="/">
                <img src={Logo} alt="Logo img" />{" "}
              </Link>
              <br />
              <br />
              <p>Awesome deals on all jewellery</p>
              <br />
              <p>
                <RoomOutlinedIcon />
                <strong>Address:</strong> 35/234 naglapadi, Dayalbagh, Agra, U.P
                - 282005 India
              </p>
              <p>
                <CallOutlinedIcon />
                <strong>Call us:</strong> (+91)98762-84567
              </p>
              <p>
                <EmailOutlinedIcon />
                <strong>Email:</strong> sales@ambeyJewellers.com
              </p>
              <p>
                <WatchLaterOutlinedIcon />
                <strong>Hours:</strong> 10:00-18:00, Mon-Sat
              </p>
              <SliderTextField data={"Subscribe"} />
            </div>

            {/* FOOTER PART 2 */}
            <div className="col-md-6 part2 ">
              <div className="row">
                <div className="col">
                  <h3>Company</h3>

                  <ul>
                    <li>
                      <Link to="/">About Us</Link>
                    </li>

                    <li>
                      <Link to="/">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">Support</Link>
                    </li>
                    <li>
                      <Link to="/">Career</Link>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <h3>Account</h3>
                  <ul>
                    <li>
                      <Link to="/">View Cart</Link>
                    </li>
                    <li>
                      <Link to="/">My wishlist</Link>
                    </li>
                    <li>
                      <Link to="/">Track my order</Link>
                    </li>
                    <li>
                      <Link to="/">Help ticket</Link>
                    </li>
                    <li>
                      <Link to="/">Shipping details</Link>
                    </li>
                    <li>
                      <Link to="/">Compare products</Link>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <h3>Help</h3>

                  <ul>
                    <li>
                      <Link to="/">FAQ's</Link>
                    </li>
                    <li>
                      <Link to="/">Delivery Info</Link>
                    </li>
                    <li>
                      <Link to="/">Warranty Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Refund Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Request for Return / Exchange</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <h3>Benefits</h3>

                  <ul>
                    <li>
                      <Link to="/">Lifetime Buy-Back Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Lifetime Warranty Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Discounts & Offers</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FOOTER PART 3 */}
            <div className="col-md-3 part3">
              <h3>Install App</h3>
              <p>From Google play store</p>
              <img src={PlaystoreImg} alt="playstore download img" />
              <br />
              <br />
              <p>Secure payment gateway</p>
              <div>
                <img src={PaymentImg1} alt="playstore download img" />
                <img src={PaymentImg2} alt="playstore download img" />
              </div>
            </div>
          </div>

          <br />
          <hr />

          <p className="credit">
            © 2024, Designed and developed by
            <Link to="https://www.linkedin.com/in/prachive"> Prachi Verma</Link>
          </p>
          <div className="socialIcon">
            <Link to="https://www.linkedin.com/in/prachiv">
              <LinkedInIcon />
            </Link>
            <Link to="https://github.com/prachi-git99">
              <img
                src={GithubImg}
                alt="prachi verma github"
                style={{ height: "2em", width: "2em" }}
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
