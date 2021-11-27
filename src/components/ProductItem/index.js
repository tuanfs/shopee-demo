import { Col, Row } from "antd";
import React from "react";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";

function ProductItem(props) {
  const { productList } = props;
  const renderItem = () => {
    if (productList) {
      return productList.map((item, index) => (
        <Col key={index} span={4}>
          <div className={styles.item}>
            <Link to={`/product-detail/${item.id}`}>
              <div className={styles.top}>
                <div
                  className={styles.img}
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                ></div>
                {item.like === 1 && (
                  <div className={styles.like}>
                    <span className={styles.text}>Yêu thích</span>
                  </div>
                )}

                <div className="discount">
                  <p className="discount-percent">{item.discount}%</p>
                  <span className="discount-lable">Giảm</span>
                </div>
              </div>
              <div className={styles.body}>
                <h4 className={styles.name}>{item.name}</h4>
                <div className={styles.timeDiscount}>
                  <span className={styles.text}>Giảm 10k</span>
                </div>
                <div className={styles.bottom}>
                  <span className={styles.price}>₫ {item.price}</span>
                  <span className={styles.sold}>Đã bán {item.sold}</span>
                </div>
              </div>
            </Link>
            <div className={styles.semilar}>
              <span className={styles.link}>Tìm sản phẩm tương tự</span>
            </div>
          </div>
        </Col>
      ));
    }
    return <div></div>;
  };
  return <Row gutter={[16, 24]}>{renderItem()}</Row>;
}

export default ProductItem;
