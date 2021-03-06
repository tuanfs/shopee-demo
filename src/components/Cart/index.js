import React, { useEffect, useState } from "react";
import { Checkbox, Col, Divider, Row } from "antd";
import styles from "./Cart.module.scss";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncCart,
  getAllCart,
  getCartByUser,
  getAllCartByUser,
  removeCartByUser,
} from "features/cartSlice";
import { getAllProducts, fetchAsyncProduct } from "features/productSlice";
import { useAuth } from "context/auth/AuthContext";
import CartShop from "components/CartShop";
import ProductItem from "components/ProductItem";

function Cart(props) {
  const cart = useSelector(getAllCart);
  const { currentUser } = useAuth();
  const [render, setRender] = useState(1);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  useEffect(() => {
    dispatch(fetchAsyncProduct());
  }, [dispatch]);
  const cartByUser = useSelector(getAllCartByUser);
  useEffect(() => {
    async function fetch() {
      setLoading(true);
      await dispatch(fetchAsyncCart());
      getCart();
    }
    function getCart() {
      if (cart && currentUser) {
        if (cart.length > 0) {
          dispatch(
            getCartByUser({
              cart,
              email: currentUser.email,
            })
          );
          setLoading(false);
        } else {
          setRender(3);
        }
      } else {
        setRender(render + 1);
      }
    }
    fetch();
    return () => {
      setRender(1);
      dispatch(removeCartByUser());
    };
  }, [dispatch, render, currentUser]);
  const renderShopCart = (cartByUser) => {
    const shopList = cartByUser.map((cart) => cart.shop);
    const shopListNew = [...new Set(shopList)];
    return shopListNew.map((name, index) => {
      const cartListNew = cartByUser.filter((item) => item.shop === name);
      return <CartShop key={index} cartList={cartListNew} supplier={name} />;
    });
  };
  const renderListProduct = (products) => {
    if (products) {
      const result = products.filter((product, index) => index < 6);
      return result;
    }
    return [];
  };
  return (
    <div className={clsx(styles.cart, "container")}>
      <div className={styles.title}>
        <img
          alt="???nh cart"
          className={styles.img}
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1cdd37339544d858f4d0ade5723cd477.png"
        />
        <h3 className={styles.text}>
          Nh???n v??o m???c M?? gi???m gi?? ??? cu???i trang ????? h?????ng mi???n ph?? v???n chuy???n b???n
          nh??
        </h3>
      </div>
      <div className={styles.header}>
        <Row>
          <Col span={10}>
            <Checkbox>S???n Ph???m</Checkbox>
          </Col>
          <Col span={5}>
            <li className={styles.item}>
              <span className={styles.text}>????n Gi??</span>
            </li>
          </Col>
          <Col span={3}>
            <li className={styles.item}>
              <span className={styles.text}>S??? L?????ng</span>
            </li>
          </Col>
          <Col span={3}>
            <li className={styles.item}>
              <span className={styles.text}>S??? Ti???n</span>
            </li>
          </Col>
          <Col span={3}>
            <li className={styles.item}>
              <span className={styles.text}>Thao T??c</span>
            </li>
          </Col>
        </Row>
      </div>
      <div className={styles.shopList}>
        {!loading && renderShopCart(cartByUser)}
      </div>
      <div className={styles.order}>
        <Row>
          <Col span={5} offset={14}>
            <div className={styles.voucher}>
              <span className={styles.text}>
                <i className={clsx("fas fa-tags", styles.icon)}></i>Shopee
                Voucher
              </span>
            </div>
          </Col>
          <Col span={5}>
            <span className={styles.link}>Ch???n Ho???c Nh???p m??</span>
          </Col>
        </Row>
        <Divider dashed />
        <div className={styles.orderItem}>
          <Row>
            <Col span={1}>
              <Checkbox />
            </Col>
            <Col span={3}>
              <span className={styles.link}>Ch???n T???t C??? </span>
            </Col>
            <Col span={1}>
              <span className={styles.link}>X??a</span>
            </Col>
            <Col span={6}>
              <span className={styles.link}>B??? s???n ph???m kh??ng ho???t ?????ng</span>
            </Col>
            <Col span={4}>
              <span
                className={clsx(styles.link, "primary-color", styles.payment)}
              >
                L??u v??o m???c ???? thanh to??n
              </span>
            </Col>
            <Col span={5}>
              <span className={styles.link}>L??u v??o m???c ???? thanh to??n</span>
            </Col>
            <Col span={4}>
              <span className={clsx(styles.link, "btn primary")}>Mua H??ng</span>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.suggest}>
        <div className={styles.heading}>
          <h3 className={styles.title}>C?? Th??? B???n C??ng Th??ch</h3>
        </div>
        {<ProductItem productList={renderListProduct(products)} />}
      </div>
    </div>
  );
}

export default Cart;
