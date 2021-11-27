import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./FlashSale.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Row, Col, Button, Tooltip } from "antd";
import axios from "axios";
import Slider from "react-slick";
import settings from "commons/settingSlick";
import banner5 from "assets/images/banner/banner_5.jpg";
import banner6 from "assets/images/banner/banner_6.jpg";
import banner7 from "assets/images/banner/banner_7.jpg";

FlashSale.propTypes = {};

function FlashSale(props) {
  const sliderRef = useRef();
  console.log();
  const [data, setData] = useState([
    {
      id: null,
      itemCode: null,
      price: null,
      img: "",
    },
  ]);
  useEffect(() => {
    const fetchList = async () => {
      const response = await axios
        .get("http://localhost:3000/flashSale")
        .catch((error) => {
          console.error(error);
        });
      setData(response.data);
    };
    fetchList();
  }, []);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const prev = () => {
    sliderRef.current.slickPrev();
  };
  const renderListSale = () => {
    return data.map((item, index) => (
      <a key={index}>
        <div className={styles.item}>
          <div className={styles.top}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div
              className={styles.bgr}
              style={{ backgroundImage: `url(${item.bgr})` }}
            ></div>
          </div>
          <div className={styles.bottom}>
            <span className={styles.price}>
              <span className={styles.lable}>₫ </span> {item.price}
            </span>
            <div className={styles.sold}>
              <p className={styles.quantity}>Đã bán {item.sold}</p>
            </div>
            <div
              className={styles.progress}
              style={{ width: `${item.sold}px` }}
            ></div>
          </div>
          <div className="discount">
            <p className="discount-percent">{item.percent}%</p>
            <span className="discount-lable">Giảm</span>
          </div>
        </div>
      </a>
    ));
  };
  return (
    <>
      <div className={styles.flashSale}>
        <div className={styles.heading}>
          <div className={styles.left}>
            <h3 className={styles.title}>Flash Sale</h3>
          </div>
          <div className={styles.right}>
            <a className={styles.link}>
              Xem tất cả <RightOutlined />
            </a>
          </div>
        </div>
        <div className={styles.body}>
          <Slider ref={sliderRef} {...settings}>
            {renderListSale()}
          </Slider>
        </div>
        <Tooltip className={styles.prev}>
          <Button
            shape="circle"
            icon={<LeftOutlined className={styles.icon} />}
            onClick={prev}
          />
        </Tooltip>
        <Tooltip className={styles.next}>
          <Button
            shape="circle"
            icon={<RightOutlined className={styles.icon} />}
            onClick={next}
          />
        </Tooltip>
      </div>
      <div className={styles.banner}>
        <Row>
          <Col span={8}>
            <img alt="banner" className={styles.img} src={banner5} />
          </Col>
          <Col span={8}>
            <img alt="banner" className={styles.img} src={banner6} />
          </Col>
          <Col span={8}>
            <img alt="banner" className={styles.img} src={banner7} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FlashSale;
