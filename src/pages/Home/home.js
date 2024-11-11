import React from "react";
import HomeSlider from "../Home/slider/slider";
import CategorySlider from "../../components/common_components/categorySlider/categorySlider";
import Banner from "./banner/banner";
import HomeProducts from "./homeProducts/homeProducts";
import ProductSlider from "./productSlider/productSlider";
import Newsletter from "./newsletter/newsletter";
import Footer from "../../components/footer/footer";

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
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
