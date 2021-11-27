import React from "react";
import styles from "./BannerVendor.module.scss";

function BannerVendor(props) {
  return (
    <div className="container">
      <div className={styles.banner}>
        <img
          alt="banner"
          className={styles.img}
          src="https://cf.shopee.vn/file/d2f5d169c17692a3b8ad987a6aa74469"
        />
      </div>
      <div className={styles.body}>
        <img
          alt="banner"
          src="https://cf.shopee.vn/file/05460912fb78d116e240c5373e7824a7"
        />
        <img
          alt="banner"
          src="https://cf.shopee.vn/file/02a1f0b500e1cf79e6830d6d491a426b"
        />
        <img
          alt="banner"
          src="https://cf.shopee.vn/file/44ef59ecbd03c09f2b94e1bf8020ba9b"
        />
        <img
          alt="banner"
          src="https://cf.shopee.vn/file/f08eaf91f0724dffd8fedcc3809589a8"
        />
      </div>
    </div>
  );
}

export default BannerVendor;
