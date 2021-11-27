import React from "react";
import styles from "./MenuNav.module.scss";
import {
  BellOutlined,
  CheckOutlined,
  GlobalOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import qrCode from "assets/images/app-image/qr_code.png";
import googleApp from "assets/images/app-image/googleplay.png";
import appstoreApp from "assets/images/app-image/appstore.png";
import { Link } from "react-router-dom";
import { useAuth } from "context/auth/AuthContext";
import clsx from "clsx";

function MenuNav(props) {
  const { currentUser, signout } = useAuth();
  const handleClick = () => {
    signout();
  };
  return (
    <div className={clsx(styles.menuNav, "container")}>
      <div className={styles.left}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link
              to="/sell-on-shopee"
              className={`${styles.link} separate`}
              href=""
            >
              Kênh người bán
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={`${styles.link} separate`} to="/sell-on-shopee">
              Trở thành Người bán Shopee
            </Link>
          </li>
          <li className={styles.item}>
            <a className={`${styles.link} separate qr-link`} href="">
              Tải ứng dụng
            </a>
            <div className={clsx(styles.qrCode, styles.dropdown)}>
              <div className={styles.image}>
                <a>
                  <img src={qrCode} />
                </a>
              </div>
              <div className={styles.appList}>
                <a className={styles.app} href="">
                  <img src={googleApp} />
                </a>
                <a className={styles.app} href="">
                  <img src={appstoreApp} />
                </a>
                <a className={styles.app} href=""></a>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <a className={`${styles.link} ${styles.linkText}`} href="">
              <span className={`${styles.label}`}> Kết nối</span>
              <i className={`fab fa-facebook-f mr-8 ${styles.icon}`}></i>
              <i className={`fab fa-instagram ${styles.icon}`}></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="">
              <BellOutlined className={styles.icon} />
              <span className={styles.label}>Thông báo</span>
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="">
              <QuestionCircleOutlined className={styles.icon} />
              <span className={styles.label}>Hỗ trợ</span>
            </a>
          </li>
          {currentUser ? (
            <>
              <li className={styles.item}>
                <Link to="/signup" className={`${styles.link} separate`}>
                  <GlobalOutlined className={styles.icon} /> Tiếng việt
                  <CheckOutlined className={clsx("ml-4", styles.icon)} />
                </Link>
                <div className={clsx(styles.language, styles.dropdown)}>
                  <span className={styles.lable}>English</span>
                  <span className={styles.lable}>Tiếng việt</span>
                </div>
              </li>
              <li className={styles.item}>
                <Link to="/login" className={styles.link} href="">
                  <UserOutlined className={styles.icon} />
                  {currentUser.email || ""}
                </Link>
                <div className={clsx(styles.dropdown, styles.user)}>
                  <Link to="/profile" className={styles.userLink}>
                    Tài khoản của tôi
                  </Link>
                  <Link to="/cart" className={styles.userLink}>
                    Đơn mua
                  </Link>
                  <Link to="/" className={styles.userLink}>
                    <span onClick={handleClick}>Đăng xuất</span>
                  </Link>
                </div>
              </li>
            </>
          ) : (
            <>
              <li className={styles.item}>
                <Link to="/signup" className={`${styles.link} separate`}>
                  Đăng ký
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="/login" className={styles.link} href="">
                  Đăng nhập
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MenuNav;
