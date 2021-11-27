import React from "react";
import styles from "./ContainerBanner.module.scss";
import banner1 from "assets/images/banner/banner_1.jpg";
import banner2 from "assets/images/banner/banner_2.png";
import banner3 from "assets/images/banner/banner_3.png";
import banner4 from "assets/images/banner/banner_4.png";
import { Row, Col, Carousel } from "antd";

function ContainerBanner(props) {
  return (
    <div className={styles.banner}>
      <Row gutter={8}>
        <Col span={16}>
          <Carousel autoplay dots={false}>
            <img alt="banner" src={banner1} />
            <img alt="banner" src={banner2} />
            <img alt="banner" src={banner3} />
            <img alt="banner" src={banner4} />
          </Carousel>
        </Col>
        <Col span={8}>
          <div className={styles.right}>
            <img alt="banner" className={styles.img} src={banner3} />
            <img alt="banner" className={styles.img} src={banner4} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContainerBanner;
