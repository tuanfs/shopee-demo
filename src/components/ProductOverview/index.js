import React, { useState } from "react";
import clsx from "clsx";
import styles from "./ProductOverview.module.scss";
import ModalImg from "components/ModalImg";
import { Col, Row } from "antd";
import Slider from "@ant-design/react-slick";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addAsyncCart } from "features/cartSlice";
import { useAuth } from "context/auth/AuthContext";
import { notification } from "antd";

ProductOverview.propTypes = {
  productItem: PropTypes.object,
};

function ProductOverview(props) {
  const { productItem } = props;
  const { name, id, img, imglist, price, like, discount, warehouse, supplier } =
    productItem;
  const [showModal, setShowModal] = useState(false);
  const [imgMain, setImgMain] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  let email;
  if (currentUser) {
    email = currentUser.email;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleOnClick = () => {
    dispatch(
      addAsyncCart({
        id: null,
        user: email,
        shop: supplier,
        productId: id,
        name,
        img,
        price,
        discount,
        warehouse,
        quantity,
      })
    );
    openNotification("topRight");
  };
  const openNotification = (placement) => {
    notification.info({
      message: `Bạn đã đặt hàng thành công`,
      description: "",
      placement,
      duration: 3,
    });
  };
  return (
    <div className={clsx(styles.productItem, "container")}>
      <Row>
        <Col span="10">
          <div className={styles.left}>
            <div
              onClick={() => setShowModal(true)}
              className={styles.mainImg}
              style={{ backgroundImage: `url(${imgMain || img})` }}
            ></div>
            <div className={styles.subImg}>
              <Slider {...settings}>
                {imglist
                  ? imglist.map((item, index) => (
                      <div
                        onMouseOver={() => setImgMain(item)}
                        key={index}
                        className={styles.itemImg}
                      >
                        <img
                          className={styles.img}
                          src={item}
                          alt="Ảnh sản phẩm"
                        />
                      </div>
                    ))
                  : ""}
                {imglist
                  ? imglist.map((item, index) => (
                      <div
                        onMouseOver={() => setImgMain(item)}
                        key={index}
                        className={styles.itemImg}
                      ></div>
                    ))
                  : ""}
                {imglist
                  ? imglist.map((item, index) => (
                      <div
                        onMouseOver={() => setImgMain(item)}
                        key={index}
                        className={styles.itemImg}
                      >
                        <img
                          className={styles.img}
                          src={item}
                          alt="Ảnh sản phẩm"
                        />
                      </div>
                    ))
                  : ""}
              </Slider>
            </div>
            <div className={styles.leftBottom}>
              <div className={styles.share}>
                <span className={styles.label}>Chia sẻ:</span>
                <li className={styles.iconList}>
                  <i
                    className={clsx(
                      "fab fa-facebook",
                      styles.iconFb,
                      styles.icon
                    )}
                  ></i>
                  <i
                    className={clsx(
                      styles.iconMes,
                      styles.icon,
                      "fab fa-facebook-messenger"
                    )}
                  ></i>
                  <i
                    className={clsx(
                      styles.iconTw,
                      styles.icon,
                      "fab fa-twitter-square"
                    )}
                  ></i>
                </li>
              </div>
              <div className={styles.liked}>
                <i className={clsx("far fa-heart", styles.icon)}></i>
                <span className={styles.label}>Đã thích (1,3k)</span>
              </div>
            </div>
          </div>
        </Col>
        <Col span="14">
          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.heading}>
                <div className={styles.like}>
                  {like !== 0 ? (
                    <span className={styles.label}>
                      {like === 1 ? "Yêu thích" : " Yêu thích+"}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <h3 className={styles.name}>{name}</h3>
              </div>
              <div className={styles.rating}>
                <Row>
                  <Col span="6">
                    <div className={clsx(styles.rate, "separate-footer")}>
                      <span className={styles.link}>4.9</span>
                      <i className={clsx("fas fa-star", styles.icon)}></i>
                      <i className={clsx("fas fa-star", styles.icon)}></i>
                      <i className={clsx("fas fa-star", styles.icon)}></i>
                      <i className={clsx("fas fa-star", styles.icon)}></i>
                      <i className={clsx("fas fa-star", styles.icon)}></i>
                    </div>
                  </Col>
                  <Col span="6">
                    {" "}
                    <div className={clsx(styles.evaluate, "separate-footer")}>
                      <span className={styles.link}>
                        <span className={styles.text}>3,3k</span>
                        Đánh giá
                      </span>
                    </div>
                  </Col>
                  <Col span="6">
                    {" "}
                    <div className={styles.sold}>
                      <span className={styles.text}>
                        10k <span className={styles.textSub}>Đã bán</span>
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className={styles.price}>
              <div className={styles.priceTop}>
                <div className={styles.priceOld}>
                  <span className={styles.text}>
                    ₫{Math.ceil((price / (100 - discount)) * 100)}
                  </span>
                </div>
                <div className={styles.priceNew}>
                  <span className={styles.label}>₫</span>
                  <span className={styles.text}>{price}</span>
                </div>
                <div className={styles.percent}>
                  <span className={styles.text}>{discount}%GIẢM</span>
                </div>
              </div>
              <div className={styles.priceInfo}>
                <span className={styles.title}>Gì cũng rẻ</span>
                <span className={styles.text}>
                  Giá tốt nhất so với các sản phẩm cùng loại trên Shopee
                </span>
              </div>
            </div>
            <div className={clsx(styles.codeDiscount, styles.itemBody)}>
              <span className={styles.label}>Mã Giảm Giá Của Shop</span>
              <li className={styles.itemList}>
                <span className={styles.item}>Giảm ₫3k</span>
                <span className={styles.item}>Giảm ₫3k</span>
                <span className={styles.item}>Giảm ₫3k</span>
                <span className={styles.item}>Giảm ₫3k</span>
                <span className={styles.item}>Giảm ₫3k</span>
              </li>
            </div>
            <div className={clsx(styles.delivery, styles.itemBody)}>
              <span className={styles.label}>Vận Chuyển</span>
              <div className={styles.deliveryRight}>
                <div className={styles.deliveryFree}>
                  <div>
                    <img
                      className={styles.img}
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1cdd37339544d858f4d0ade5723cd477.png"
                      alt="Miễn phí vận chuyển"
                    />
                  </div>
                  <div className={styles.info}>
                    <span className={styles.title}>Miễn phí vận chuyển</span>
                    <span className={styles.text}>
                      Miễn phí vận chuyển cho đơn hàng trên ₫150.000
                    </span>
                  </div>
                </div>
                <div className={styles.deliveryTo}>
                  <div className={styles.deliveryIcon}>
                    <i className={clsx("fas fa-truck-moving", styles.icon)}></i>
                  </div>
                  <div className={styles.to}>
                    <div className={styles.toPlace}>
                      <span className={styles.title}>Vận chuyển tới</span>
                      <span className={styles.text}>
                        Phường Lạch Tray, Quận Ngô Quyền , Hải Phòng
                      </span>
                    </div>
                    <div className={styles.cost}>
                      <span className={styles.title}>Phí vận chuyển</span>
                      <span className={styles.text}>₫13000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={clsx(styles.color, styles.itemBody)}>
              <span className={styles.label}>Màu sắc</span>
              <li className={styles.colorList}>
                <span className={clsx(styles.disabled, styles.item)}>
                  Mẫu 1
                </span>
                <span className={styles.item}>Mẫu 2</span>
                <span className={styles.item}>Mẫu 3</span>
                <span className={clsx(styles.disabled, styles.item)}>
                  Mẫu 4
                </span>
                <span className={styles.item}>Mẫu 5</span>
              </li>
            </div>
            <div className={styles.itemBody}>
              <span className={styles.label}>Số lượng</span>
              <div className={styles.quantity}>
                <div className="quantityBtn">
                  <button
                    disabled={quantity <= 0}
                    onClick={() => setQuantity(quantity - 1)}
                    className="minus"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <input
                    className="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button
                    className="plus"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <span className={styles.available}>
                  {warehouse} sản phẩm có sẵn
                </span>
              </div>
            </div>
            <div className={styles.btn}>
              <button
                onClick={handleOnClick}
                className={clsx(styles.addCard, "btn ")}
              >
                <span className={styles.text}>Thêm vào giỏ hàng</span>
              </button>
              <button className={clsx(styles.buy, "btn primary")}>
                <span className={styles.text}>Mua Ngay</span>
              </button>
            </div>
            <div className={styles.ensure}>
              <span className={styles.title}>Shopee Đảm Bảo</span>
              <span className={styles.text}>3 Ngày Trả Hàng / Hoàn Tiền</span>
            </div>
          </div>
        </Col>
      </Row>
      {
        <ModalImg
          showModal={showModal}
          imgList={imglist}
          onCancel={handleCancel}
          img={img}
          name={name}
        />
      }
    </div>
  );
}

export default ProductOverview;
