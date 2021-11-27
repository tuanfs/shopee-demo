import React from "react";
import GeneralLog from "components/GeneralLog";
import SignUp from "components/SignUp";

function index(props) {
  return (
    <div>
      <GeneralLog element={<SignUp />} title={"Đăng Ký"} />
    </div>
  );
}

export default index;
