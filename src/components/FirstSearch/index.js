import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import styles from "./FirstSearch.module.scss";
import axios from "axios";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};
const firstSearchList = [
  {
    id: 1,
    title: "Dây Xạc Iphone",
    img: "https://cf.shopee.vn/file/fa717776991e7ddde792172181b7daab_tn",
    quantity: 55,
  },
  {
    id: 2,
    title: "Bút Mực Gel",
    img: "https://cf.shopee.vn/file/ea3c6a73cbd32bddb8323c14b837b4de_tn",
    quantity: 52,
  },
  {
    id: 3,
    title: "Áo Gió Nam",
    img: "https://cf.shopee.vn/file/9d3a65388de22c00d579498232c43ab1_tn",
    quantity: 47,
  },
  {
    id: 4,
    title: "Tất Nữ Cổ Ngắn",
    img: "https://cf.shopee.vn/file/8feabd79343d18e53f0175b661b78de2_tn",
    quantity: 55,
  },
  {
    id: 5,
    title: "Áo Hoodie",
    img: "https://cf.shopee.vn/file/19b3d98a8c472dea870c96271df7cde8_tn",
    quantity: 61,
  },
  {
    id: 6,
    title: "Khẩu Trang Kháng Khuẩn",
    img: "https://cf.shopee.vn/file/51fc8c9af820a668dab6de71b7dcea2f_tn",
    quantity: 55,
  },
  {
    id: 7,
    title: "Bút Kẻ Mắt Chống Nước",
    img: "https://cf.shopee.vn/file/f1e13b6bd536a8c52f2a96458e6bb868_tn",
    quantity: 55,
  },
  {
    id: 8,
    title: "Ốp Lưng Iphone",
    img: "https://cf.shopee.vn/file/6d1416daa515aaf1a3c1b6c5fc47e07b_tn",
    quantity: 56,
  },
  {
    id: 9,
    title: "Bông Tẩy Trang",
    img: "https://cf.shopee.vn/file/f03a91132ed1fd13bd36e704f4a52b6e_tn",
    quantity: 33,
  },
];
function FirstSearch(props) {
  const renderList = () => {
    return firstSearchList.map((item, index) => (
      <a key={index} href="">
        <div className={styles.item}>
          <div className={styles.top}>
            <img src={item.img} className={styles.img} alt="first-search" />
            <div className={styles.quantity}>
              <p className={styles.lable}>Bán {item.quantity}k+ / tháng</p>
            </div>
          </div>
          <div className={styles.body}>
            <h4 className={styles.title}>{item.title}</h4>
          </div>
          <div className={styles.lableTop}>
            <p className={styles.text}>TOP</p>
          </div>
        </div>
      </a>
    ));
  };
  return (
    <div className={styles.firstSearch}>
      <div className={styles.heading}>
        <h3 className={styles.title}>Tìm Kiếm Hàng Đầu</h3>
      </div>
      <Slider {...settings}>{renderList()}</Slider>
    </div>
  );
}

export default FirstSearch;
