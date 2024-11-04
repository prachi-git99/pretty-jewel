import React, { useEffect, useState } from "react";
import "./header.css";
import "../header/header.css";
import Logo from "../../assets/images/logo_icon.png";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../common_components/selectDropdown/select";
import axios from "axios";
import IconCompare from "../../assets/images/compare.png";
import IconWishlist from "../../assets/images/wishlist.png";
import IconCart from "../../assets/images/shopping-cart.png";
import IconUser from "../../assets/images/user.png";

const Header = () => {
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

                <ul className="list list-inline mb-0 headerTabs">
                  {/* <li className="list-inline-item">
                    <span>
                      <img src={IconCompare} className="headerIcon" />
                      <span className="badge bg-success rounded-circle">3</span>
                      Compare
                    </span>
                  </li> */}
                  <li className="list-inline-item">
                    <span>
                      <img src={IconWishlist} className="headerIcon" />
                      <span className="badge bg-success rounded-circle">3</span>
                      Wishlist
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <img src={IconCart} className="headerIcon" />
                      <span className="badge bg-success rounded-circle">3</span>
                      Cart
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <img src={IconUser} className="headerIcon" />
                      User
                    </span>
                  </li>
                </ul>

                {/* HEADER ICONS  END */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
