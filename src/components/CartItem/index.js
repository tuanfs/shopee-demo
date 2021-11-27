import React, { useEffect, useState } from "react";
import { Col, Row, Checkbox, Divider } from "antd";
import styles from "./CartItem.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";
import { deleteAsyncCart } from "features/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
CartItem.propTypes = {
  cartList: PropTypes.array,
};
CartItem.defaultProps = {
  cartList: [],
};

function CartItem(props) {
  const { cart, onDelete } = props;
  const { img, price, id, discount, name, warehouse, quantity, productId } =
    cart;
  const [valueQuantity, setValueQuantity] = useState(quantity);
  const dispatch = useDispatch(1);
  const handleOnClick = async (id) => {
    const response = await dispatch(deleteAsyncCart(id));
    const status = response.payload;
    if (status === 200) {
      onDelete(id);
    }
  };
  return (
    <div className={clsx("item-cart", styles.item)}>
      <Row>
        <Col span={1}>
          <div className={styles.itemCheckbox}>
            <Checkbox />
          </div>
        </Col>
        <Col span={2}>
          <a className={styles.left}>
            <img src={img} className={styles.img} />
          </a>
        </Col>
        <Col span={6}>
          <div className={styles.itemName}>
            <div className={styles.right}>
              <Link to={`/product-detail/${productId}`} className={styles.name}>
                {name}
              </Link>
              <div
                className={styles.bgr}
                style={{
                  backgroundImage:
                    "url" +
                    "(" +
                    "https://cf.shopee.vn/file/c2449a8bc44eaa3dd66dfa54f61a13c5" +
                    ")" +
                    "",
                }}
              ></div>
            </div>
          </div>
        </Col>
        <Col span={3}>
          <span className={styles.classify}>Phân loại : Trái cây</span>
        </Col>
        <Col span={4}>
          <div className={styles.unitPrice}>
            <div className={styles.price}>
              <span className={styles.priceOld}>
                ₫{Math.ceil((price / (100 - discount)) * 100)}
              </span>
              <span className={styles.priceNew}>₫{price}</span>
            </div>
            <div className={styles.discount}>
              <span className={styles.percent}>Giảm Giá {discount}%</span>
              <span className={styles.label}>Đã Cập Nhật</span>
            </div>
          </div>
        </Col>
        <Col span={3}>
          <div className={styles.quantity}>
            <div className={clsx("quantityBtn", styles.quantityBtn)}>
              <button
                disabled={valueQuantity <= 0}
                onClick={() => setValueQuantity(valueQuantity - 1)}
                className="minus"
              >
                <i className="fas fa-minus"></i>
              </button>
              <input
                className="number"
                value={valueQuantity}
                onChange={(e) => setValueQuantity(e.target.value)}
              />
              <button
                onClick={() => setValueQuantity(valueQuantity + 1)}
                className="plus"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <span className={styles.inventory}>Còn {warehouse} sản phẩm</span>
          </div>
        </Col>
        <Col span={2}>
          <div className={styles.total}>
            <span className={styles.price}>₫{price * valueQuantity}</span>
          </div>
        </Col>
        <Col span={3}>
          <div className={styles.activity}>
            <button onClick={() => handleOnClick(id)} className={styles.delete}>
              Xóa
            </button>
            <a className={styles.search}>Tìm sản phẩm tương tự</a>
          </div>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default CartItem;
