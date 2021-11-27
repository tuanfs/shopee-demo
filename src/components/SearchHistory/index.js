import React from "react";
import clsx from "clsx";
import styles from "./SearchHistory.module.scss";
import { ShopOutlined } from "@ant-design/icons";
import historyImage from "assets/images/header-image/history_tab.png";
const historyList = [
  {
    id: 1,
    title: "Kem nẻ",
  },
  {
    id: 2,
    title: "Áo khoác nam",
  },
  {
    id: 3,
    title: "Áo khoác nữ",
  },
  {
    id: 4,
    title: "Áo chống nắng",
  },
  {
    id: 5,
    title: "Dép nam",
  },
  {
    id: 6,
    title: "Dép nữ",
  },
];

SeachHistory.propTypes = {};
function SeachHistory(props) {
  const { value } = props;
  const renderHistoryList = () => {
    return historyList.map((item, index) => (
      <li key={index} className={styles.item}>
        <a className={styles.link}>{item.title}</a>
      </li>
    ));
  };
  return (
    <div
      className={clsx(styles.history, {
        [styles.show]: value,
      })}
    >
      <div className={styles.heading}>
        {value === "" ? (
          <div className={styles.headingItem}>
            <span>Chính hãng giảm sâu</span>
            <img className={styles.img} src={historyImage} />
          </div>
        ) : (
          <div className={styles.headingItem}>
            <span>
              <ShopOutlined />
              <span className={styles.lable}>Tìm shop {`"${value}"`}</span>
            </span>
          </div>
        )}
      </div>
      <ul className={styles.list}>{renderHistoryList()}</ul>
    </div>
  );
}

export default SeachHistory;
