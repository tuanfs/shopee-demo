import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import clsx from "clsx";
import { Button, Col, Form, Input, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "context/auth/AuthContext";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disableBtn, setDisabledBtn] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  useEffect(() => {
    if (email === "" || password === "") {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [email, password]);
  async function handleSubmit() {
    try {
      setError("");
      await login(email, password);
      navigate("/");
    } catch {
      setError("Đăng nhập thất bại.Vui lòng thử lại");
    }
  }
  return (
    <div className={styles.login}>
      <div className={styles.heading}>
        <span className={styles.title}>Đăng Nhập</span>
        <div className={styles.loginQr}>
          <div className={styles.title}>
            <span className={styles.text}>Đăng nhập với mã QR</span>
          </div>
          <div className={styles.qr}>
            <svg width="40" height="40" fill="none" className="_3F92IZ">
              <g clipPath="url(#clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                  fill="#EE4D2D"
                ></path>
                <path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D"></path>
                <path
                  d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                  fill="#EE4D2D"
                ></path>
                <path fill="#fff" d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0h40v40H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.loginFailed}>
        {error ? <span className={styles.error}>{error}</span> : ""}
      </div>
      <Form name="basic" className={styles.formLogin}>
        <Form.Item
          className={styles.item}
          name={["user", "email"]}
          rules={[{ type: "email", message: "Please input your email!" }]}
        >
          <Input
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          className={styles.item}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Mật khẩu"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item className={styles.item}>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.loginBtn}
            onClick={handleSubmit}
            disabled={disableBtn}
          >
            ĐĂNG NHẬP
          </Button>
        </Form.Item>
      </Form>
      <div className={styles.reset}>
        <span className={styles.link}>Quên mật khẩu</span>
        <span className={styles.link}>Đăng nhập với SMS</span>
      </div>
      <div className={styles.separate}>
        <span className={styles.text}>Hoặc</span>
      </div>
      <div className={styles.body}>
        <Row gutter={[8]}>
          <Col span={8}>
            <span className={clsx(styles.link, styles.facebook)}>
              <i className={clsx(styles.icon, "fab fa-facebook")}></i>
              <span className={styles.text}>Facebook</span>
            </span>
          </Col>
          <Col span={8}>
            <span className={clsx(styles.link, styles.goolge)}>
              <i className={clsx(styles.icon, "fab fa-google")}></i>
              <span className={styles.text}>Google</span>
            </span>
          </Col>
          <Col span={8}>
            <span className={clsx(styles.link, styles.apple)}>
              <i className={clsx(styles.icon, "fab fa-apple")}></i>
              <span className={styles.text}>Apple</span>
            </span>
          </Col>
        </Row>
      </div>
      <div className={styles.bottom}>
        <div className={styles.linkSignUp}>
          <span className={styles.text}>
            Bạn mới biết đến shopee ?
            <Link className={styles.link} to="/signup">
              Đăng ký
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
