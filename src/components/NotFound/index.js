import React from "react";
import { Result } from "antd";
import clsx from "clsx";
import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";
function NotFound(props) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Xin lỗi, không tìm thấy trang"
      extra={
        <button
          onClick={handleOnClick}
          className={clsx(styles.btn, "btn primary")}
        >
          Quay Lại Trang Chủ
        </button>
      }
    />
  );
}

export default NotFound;
