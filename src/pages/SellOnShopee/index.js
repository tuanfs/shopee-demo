import React from "react";
import BannerVendor from "components/BannerVendor";
import Header from "components/Header";

index.propTypes = {};

function index(props) {
  return (
    <div>
      <Header />
      <BannerVendor />
    </div>
  );
}

export default index;
