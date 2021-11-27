import React, { useState } from "react";
import styles from "./PaginationPage.module.scss";
import { Pagination } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import clsx from "clsx";

function PaginationPage(props) {
  const { page, pageSize, onChange } = props;
  const itemRender = (current, type, originalElement) => {
    if (type === "page") {
      const active = page === current ? "active" : "";
      return (
        <button
          className={clsx(styles.button, {
            [styles.active]: active,
          })}
        >
          {current}
        </button>
      );
    }
    if (type === "prev") {
      return (
        <button className={styles.button}>
          <LeftOutlined />
        </button>
      );
    }
    if (type === "next") {
      return (
        <button className={styles.button}>
          <RightOutlined />
        </button>
      );
    }
    return originalElement;
  };
  return (
    <div className={styles.paginationPage}>
      <div className={styles.ttest}>
        <Pagination
          onChange={(page, pageSize) => onChange(page, pageSize)}
          defaultCurrent={1}
          total={50}
          current={page}
          pageSize={pageSize}
          hideOnSinglePage={false}
          showSizeChanger={false}
          itemRender={itemRender}
          className={"pagination-list"}
        />
      </div>
    </div>
  );
}

export default PaginationPage;
