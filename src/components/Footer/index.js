import React from "react";
import styles from "./Footer.module.scss";
import { Col, Row } from "antd";
import clsx from "clsx";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={clsx("container")}>
        <div className={styles.bottom}>
          <Row justify="center">
            <Col span={4}>
              <div className={styles.top}>
                <span className={clsx(styles.title, "separate-footer")}>
                  CHÍNH SÁCH BẢO MẬT
                </span>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.top}>
                <span className={clsx(styles.title, "separate-footer")}>
                  QUY CHẾ HOẠT ĐỘNG
                </span>
              </div>
            </Col>
            <Col span={4}>
              <div className={styles.top}>
                <span className={clsx(styles.title, "separate-footer")}>
                  CHÍNH SÁCH VẬN CHUYỂN
                </span>
              </div>
            </Col>
            <Col span={5}>
              <div className={styles.top}>
                <span className={clsx(styles.title)}>
                  CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
                </span>
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={24}>
              <span className={styles.text}>
                Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu
                Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt
                Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
              </span>
              <span className={styles.text}>
                Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại
                liên hệ: 024 73081221 (ext 4678)
              </span>
              <span className={styles.text}>
                Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch {"&"} Đầu tư TP Hà
                Nội cấp lần đầu ngày 10/02/2015
              </span>
              <span className={styles.text}>
                © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
