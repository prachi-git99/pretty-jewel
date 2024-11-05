import React from "react";
import "./nav.css";
import Button from "@mui/material/Button";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Link } from "react-router-dom";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Nav = () => {
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row position-relative">
          {/* BUTTON SECTION STARTS */}
          <div className="col-sm-3 part1 d-flex align-items-center ">
            <Button className="bg-theme text-white catagoryTab">
              <GridViewOutlinedIcon />
              <span> &nbsp;Browse all categories</span>
              <ExpandMoreOutlinedIcon />
            </Button>
          </div>
          {/* BUTTON SECTION ENDS */}

          {/* NAVIGATION SECTION STARTS */}

          <div className="col-sm-7 part2 position-static">
            <nav>
              <ul>
                <li className="list-inline-item">
                  <Button>
                    <Link>Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>About</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Shop</Link>
                  </Button>
                </li>
                <li className="list-inline-item position-static">
                  <Button>
                    <Link>Mega Menu</Link>
                    <ExpandMoreIcon className="downBtn" />
                  </Button>
                  <div className="megaDropdown megamenu">
                    <div className="row">
                      <div className="col text-theme">
                        <h4>Gold Jewellery</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Chains</Link>
                          </li>
                          <li>
                            <Link to="">Necklace</Link>
                          </li>
                          <li>
                            <Link to="">Bangles & Bracelets</Link>
                          </li>
                          <li>
                            <Link to="">Nose pins & Studs</Link>
                          </li>
                          <li>
                            <Link to="">Rings</Link>
                          </li>
                          <li>
                            <Link to="">Earrings</Link>
                          </li>
                          <li>
                            <Link to="">Pendant</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col text-theme">
                        <h4>925 Silver Jewellery</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Chains</Link>
                          </li>
                          <li>
                            <Link to="">Necklace</Link>
                          </li>
                          <li>
                            <Link to="">Bracelets</Link>
                          </li>
                          <li>
                            <Link to="">Rings</Link>
                          </li>
                          <li>
                            <Link to="">Earrings</Link>
                          </li>
                          <li>
                            <Link to="">Pendant</Link>
                          </li>
                          <li>
                            <Link to="">Anklet</Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col text-theme">
                        <h4>Category</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Women</Link>
                          </li>
                          <li>
                            <Link to="">Men</Link>
                          </li>
                          <li>
                            <Link to="">Kids</Link>
                          </li>
                          <li>
                            <Link to="">Pintresty</Link>
                          </li>
                          <li>
                            <Link to="">Wedding</Link>
                          </li>
                          <li>
                            <Link to="">Temple</Link>
                          </li>
                          <li>
                            <Link to="">Bridal set</Link>
                          </li>
                          <li>
                            <Link to="">Couple</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <img
                          className="banner-0"
                          src="https://img.freepik.com/free-photo/shiny-metal-jewelry-collection-gift-elegance-generated-by-ai_188544-37359.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Blog</Link>
                  </Button>
                </li>

                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          {/* NAVIGATION SECTION ENDS */}
          {/* HELP SECTION STARTS */}

          <div className="col-sm-2 part3 d-flex justify-content-end align-items-center ">
            <div className="phNo d-flex align-items-center ml-auto ">
              <HeadsetOutlinedIcon />
              <div className="info ml-3">
                <h4 className="text-theme mb-0">1800-990</h4>
                <p className="mb-0">24/7 Support Center</p>
              </div>
            </div>
          </div>
          {/* HELP SECTION STARTS */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
