import React from "react";
import "./product.css";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Tooltip from "@mui/material/Tooltip";

const Product = () => {
  return (
    <div className="productThumb">
      <Link>
        <div className="imgWrapper">
          <img
            src="https://www.palmonas.com/cdn/shop/products/06_db652e51-63d2-4064-95c1-bd2600448d9a.jpg?"
            alt="product img"
            className="w-100"
          />
          <div className="overlay transition">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <Tooltip title="Add to Wishlist">
                  <FavoriteBorderIcon />
                </Tooltip>
              </li>
              <li className="list-inline-item">
                <Tooltip title="Compare">
                  <CompareArrowsIcon />
                </Tooltip>
              </li>
              <li className="list-inline-item">
                <Tooltip title="Quick View">
                  <RemoveRedEyeOutlinedIcon />
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </Link>
      <div className="info">
        <span className="d-block category">Gold Chain</span>
        <h4 className="productTitle">
          <Link>Plain Chain Two Layer Necklace</Link>
        </h4>
        <Rating name="read-only" defaultValue={3.5} precision={0.5} readOnly />
        <div className="d-flex align-items-center mt-2">
          <div className="d-flex align-items-center">
            <span className="price text-theme">₹2345.67</span>
            <span className="oldPrice">₹8549.67</span>
          </div>
          <Button className="bg-theme ms-auto transition">
            <ShoppingCartOutlinedIcon className="btnIcon" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Product;
