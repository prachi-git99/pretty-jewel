import React from "react";
import HomeSlider from "../Home/slider/slider";
import CategorySlider from "../../components/common_components/categorySlider/categorySlider";
import Banner from "../../components/common_components/banner/banner";
import HomeProducts from "./homeProducts/homeProducts";
import ProductSlider from "./productSlider/productSlider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CategorySlider />
      <Banner />
      <HomeProducts
        title={"Popular Products"}
        list={["All", "Gold", "Silver", "Women's", "Men's"]}
      />
      <ProductSlider
        title={"Daily Best Sells"}
        list={["Featured", "Popular", "Newly added"]}
      />
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
