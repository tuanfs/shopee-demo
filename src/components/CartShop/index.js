import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ShopOutlined } from "@ant-design/icons";
import styles from "./CartShop.module.scss";
import CartItem from "components/CartItem";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { resetStatus } from "features/cartSlice";
import { Checkbox, Col, Divider, Row } from "antd";
CartShop.propTypes = {
  cartList: PropTypes.array,
  nameShop: PropTypes.string,
};
CartShop.defaultProps = {
  cartList: [],
  nameShop: "",
};
function CartShop(props) {
  const { cartList, supplier } = props;
  const [cartItem, setCartItem] = useState(cartList);
  const shop = {
    shop1: "Adidas",
    shop2: "Torano",
    shop3: "Minh Hải",
    shop4: "Hải Long",
    shop5: " Hoa Phượng",
    shop6: "Hải Anh",
  };
  const dispatch = useDispatch();
  const findIndex = (cart, id) => {
    let result = -1;
    cart.forEach((cartItem, index) => {
      if (cartItem.id === id) {
        result = index;
      }
    });
    return result;
  };
  const handleOnDelete = (id) => {
    const index = findIndex(cartItem, id);
    if (index !== -1) {
      const cartItemNew = [...cartItem];
      cartItemNew.splice(index, 1);
      setCartItem(cartItemNew);
    }
    dispatch(resetStatus());
  };
  return (
    <div className={styles.shop}>
      <div className={styles.shopName}>
        <Row>
          <Col span={24}>
            <Checkbox>
              <ShopOutlined />{" "}
              <span className={styles.text}>{shop[supplier]}</span>
            </Checkbox>
          </Col>
        </Row>
      </div>
      <Divider />
      <div className={styles.itemList}>
        {cartItem.map((item, index) => (
          <CartItem
            key={index}
            cart={item}
            totalITem
            onDelete={handleOnDelete}
          />
        ))}
      </div>
      <Divider />
      <div className={styles.bottomShop}>
        <i className={clsx("fas fa-truck", styles.icon)}></i>
        <span className={styles.text}>
          Giảm ₫25.000 phí vận chuyển đơn tối thiểu ₫50.000;{" "}
        </span>
        <span className={styles.text}>
          Giảm ₫70.000 phí vận chuyển đơn tối thiểu ₫300.000;{" "}
        </span>
        <a className={styles.link}>Tìm hiểu thêm</a>
      </div>
    </div>
  );
}

export default CartShop;
