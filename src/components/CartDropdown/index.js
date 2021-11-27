import React, { useEffect, useState } from "react";
import styles from "./CartDropdown.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

function CartDropdown(props) {
  const { cartByUser } = props;
  const renderItemCart = (cartByUser) => {
    const result = cartByUser.filter(
      (cart, index) => index > cartByUser.length - 6
    );
    console.log(result);
    return result.map((cart, index) => (
      <Link
        key={index}
        to={`/product-detail/${cart.productId}`}
        className={styles.itemLink}
      >
        <div className={styles.item}>
          <div className={styles.imgWrap}>
            <img className={styles.img} src={cart.img} />
          </div>
          <div className={styles.name}>
            <span className={styles.text}>{cart.name}</span>
          </div>
          <div className={styles.price}>
            <span className={styles.text}>₫{cart.price}</span>
          </div>
        </div>
      </Link>
    ));
  };
  return (
    <>
      <div className={styles.cartItem}>
        {cartByUser.length === 0 ? (
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              src="https://shoptito.com/public/images/empty-cart.png"
            />
          </div>
        ) : (
          <div className={styles.cart}>
            <h3 className={styles.heading}>Sản phẩm mới thêm</h3>
            <div className={styles.itemList}>{renderItemCart(cartByUser)}</div>
            <div className={styles.itemBottom}>
              <div className={styles.add}>
                <span className={styles.text}>Thêm Hàng Vào Giỏ</span>
              </div>
              <div className={styles.watchCart}>
                <Link
                  to="/cart"
                  className={clsx(styles.watchBtn, "btn primary")}
                >
                  Xem Giỏ Hàng
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDropdown;
