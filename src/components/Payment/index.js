import React from "react";
import styles from "./Payment.module.scss";
import { Row, Col } from "antd";
import payment1 from "assets/images/payment/payment_1.png";
import payment2 from "assets/images/payment/payment_2.png";
import payment3 from "assets/images/payment/payment_3.png";
import payment4 from "assets/images/payment/payment_4.png";
import payment5 from "assets/images/payment/payment_5.png";
import payment6 from "assets/images/payment/payment_6.png";
import payment7 from "assets/images/payment/payment_7.png";
import payment8 from "assets/images/payment/payment_8.png";
import banner from "assets/images/payment/banner_payment.png";

const paymentList = [
  {
    id: 1,
    img: payment1,
    lable: "Hoàn xu 20% - Đơn từ 0Đ",
  },
  {
    id: 2,
    img: payment2,
    lable: "Gì cũng rẻ - Từ 1k",
  },
  {
    id: 3,
    img: payment3,
    lable: "Nạp thẻ ,Hóa Đơn & E - voucher",
  },
  {
    id: 4,
    img: payment4,
    lable: "Freeship Xtra đến 70k",
  },
  {
    id: 5,
    img: payment5,
    lable: "Hàng hiệu - 50%",
  },
  {
    id: 6,
    img: payment6,
    lable: "Hàng quốc tế",
  },
  {
    id: 7,
    img: payment7,
    lable: "Shopee Premium",
  },
  {
    id: 8,
    img: payment8,
    lable: "Shopee Premium",
  },
];
function Payment(props) {
  const renderPayList = () => {
    return paymentList.map((item, index) => (
      <Col key={index} span={3}>
        <span className={styles.link}>
          <img className={styles.img} src={item.img} alt="Banner" />
          <span className={styles.lable}>{item.lable}</span>
        </span>
      </Col>
    ));
  };
  return (
    <div>
      <Row className={styles.payment}>{renderPayList()}</Row>
      <div className={styles.banner}>
        <img className={styles.img} src={banner} alt="Banner" />
      </div>
    </div>
  );
}

export default Payment;
