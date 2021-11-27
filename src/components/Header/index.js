import React from "react";
import styles from "./Header.module.scss";
import MenuNav from "../MenuNav";
import HeaderBody from "../HeaderBody";
import clsx from "clsx";
import "antd/dist/antd.css";

function Header(props) {
  const { headerHome, wrapperHeader } = props;
  return (
    <div
      className={clsx({
        [styles.wrapperHeader]: wrapperHeader,
      })}
    >
      <div
        className={clsx(styles.header, {
          [styles.headerHome]: headerHome,
        })}
      >
        <MenuNav />
        <HeaderBody />
      </div>
    </div>
  );
}

export default Header;
