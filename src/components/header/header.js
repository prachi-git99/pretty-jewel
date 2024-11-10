import React, { useEffect, useState } from "react";
import "./header.css";
import "../header/header.css";
import Logo from "../../assets/images/logo_icon.png";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../common_components/selectDropdown/select";
import axios from "axios";

import { ClickAwayListener } from "@mui/base/ClickAwayListener";

//header icons
import IconCompare from "../../assets/images/compare.png";
import IconWishlist from "../../assets/images/wishlist.png";
import IconCart from "../../assets/images/shopping-cart.png";
import IconUser from "../../assets/images/user.png";
// icons
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

import Nav from "../header/nav/nav";

const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const [categories, setCategories] = useState([
    // "All Jewellery",
    "Earrings",
    "Pendants",
    "Finger Rings",
    "Mangalsutra",
    "Chains",
    "Nose Pin",
    "Necklace Set",
    "Bangles & Bracelets",
    "Gold Coins",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios
        .get(url)
        .then((res) => {
          if (res !== null) {
            res.data.data.map((item, index) => {
              countryList.push(res.data.data[index].country);
            });
          }
        })
        .catch((err) => {});
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="headerWrapper">
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2 ">
                <img src={Logo} alt="Pretty jewel logo" />
              </div>

              {/* HEADER SEARCH START */}
              <div className="col-sm-5 search-section">
                <div className="header-search d-flex align-items-center">
                  <Select data={categories} placeholder="All Jewellery" />

                  <div className="search">
                    <input type="text" placeholder="Search for items..." />
                    <SearchIcon className="searchIcon cursor" />
                  </div>
                </div>
              </div>
              {/* HEADER SEARCH END */}

              <div className="col-sm-5 d-flex align-items-center search-section">
                <div className="ml-auto d-flex align-items-center">
                  {/* HEADER LOCATION SELECT START */}
                  <div className="selectCountry">
                    <Select data={countryList} placeholder="Select Location" />
                  </div>
                  {/* HEADER LOCATION SELECT END */}
                  {/* HEADER ICONS  START */}
                  <ClickAwayListener
                    onClickAway={() => setIsOpenDropdown(false)}
                  >
                    <ul className="list list-inline mb-0 headerTabs">
                      <li className="list-inline-item">
                        <span>
                          <img
                            src={IconCompare}
                            className="headerIcon"
                            alt="compareIcon"
                          />
                          <span className="badge bg-success rounded-circle">
                            13
                          </span>
                          Compare
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span>
                          <img
                            src={IconWishlist}
                            className="headerIcon"
                            alt="wishlist icon"
                          />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          Wishlist
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span>
                          <img
                            src={IconCart}
                            className="headerIcon"
                            alt="cart icon"
                          />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          Cart
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span
                          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                        >
                          <img
                            src={IconUser}
                            className="headerIcon"
                            alt="user icon"
                          />
                          User
                        </span>
                        {isOpenDropdown ? (
                          <ul className="dropdownMenu">
                            <li>
                              <Button className="align-items-center">
                                <AccountCircleOutlinedIcon />
                                <span>My Account</span>
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <LocationOnOutlinedIcon />
                                <span>Order Tracking</span>
                              </Button>
                            </li>

                            <li>
                              <Button>
                                <FavoriteBorderIcon />
                                <span>My Wishlist</span>
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <SettingsOutlinedIcon />
                                <span>Settings</span>
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <ExitToAppOutlinedIcon />
                                <span>Signout</span>
                              </Button>
                            </li>
                          </ul>
                        ) : null}
                      </li>
                    </ul>
                  </ClickAwayListener>
                  {/* HEADER ICONS  END */}
                </div>
              </div>
            </div>
          </div>
        </header>
        <Nav />
      </div>
    </>
  );
};

export default Header;
