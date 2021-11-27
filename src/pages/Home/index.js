import React from "react";
import ContainerBanner from "components/ContainerBanner";
import Payment from "components/Payment";
import Category from "components/Category";
import FlashSale from "components/FlashSale";
import FirstSearch from "components/FirstSearch";
import ProductSuggest from "components/ProductSuggest";
import Header from "components/Header";

function Home(props) {
  return (
    <div className="container">
      <Header headerHome={"header-home"} wrapperHeader={"wrapperHeader"} />
      <ContainerBanner />
      <Payment />
      <Category />
      <FlashSale />
      <FirstSearch />
      <ProductSuggest />
    </div>
  );
}

export default Home;
