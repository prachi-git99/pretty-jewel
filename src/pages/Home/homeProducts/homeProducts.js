import React from "react";
import "./homeProducts.css";
import Product from "../../../components/common_components/product/product";
import SectionHeading from "../../../components/common_components/sectionHeading/sectionHeading";

const HomeProducts = ({ title, list }) => {
  return (
    <section className="homeProducts">
      <div className="container-fluid">
        <SectionHeading title={title} list={list} />

        <div className="productRow">
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
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeProducts;
