import React from "react";
import GeneralLog from "components/GeneralLog";
import Login from "components/Login";

function index(props) {
  return (
    <div>
      <GeneralLog element={<Login />} title={"Đăng Nhập"} />
    </div>
  );
}

export default index;
