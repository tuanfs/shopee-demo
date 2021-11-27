import React, { useRef, useState, useEffect } from "react";
import styles from "./SignUp.module.scss";
import clsx from "clsx";
import { Button, Col, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "context/auth/AuthContext";
function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (email === "" || password === "") {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [email, password]);

  const { signup } = useAuth();

  async function handleSignup() {
    if (password !== passwordConfirm) {
      return setError("Mật khẩu nhập lại chưa đúng.Vui lòng thử lại");
    }
    try {
      setError("");
      await signup(email, password);

      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      setMessage("Bạn đã tạo tài khoản thành công ");
    } catch {
      setMessage("");
      setError("Tạo tài khoản thất bại. Vui lòng thử lại");
    }
  }
  console.log(email);
  return (
    <div className={styles.signup}>
      <div className={styles.heading}>
        <span className={styles.title}>Đăng ký</span>
      </div>
      <div className={styles.notify}>
        {(error ? <span className={styles.error}>{error}</span> : "") ||
          (message ? <span className={styles.message}>{message}</span> : "")}
      </div>
      <Form name="basic" initialValues={{ remember: true }} autoComplete="off">
        <Form.Item className={styles.item} name="email">
          <Input
            required
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item className={styles.item} name="password">
          <Input.Password
            placeholder="Mật khẩu"
            className={styles.input}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item className={styles.item} name="passwordConfirm">
          <Input.Password
            placeholder="Nhập lại mật khẩu"
            className={styles.input}
            required
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.signupBtn}
            onClick={handleSignup}
            disabled={disabledBtn}
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
      <div className={styles.separate}>
        <span className={styles.text}>Hoặc</span>
      </div>
      <div className={styles.body}>
        <Row gutter={[8]}>
          <Col span={8}>
            <a className={clsx(styles.link, styles.facebook)}>
              <i className={clsx(styles.icon, "fab fa-facebook")}></i>
              <span className={styles.text}>Facebook</span>
            </a>
          </Col>
          <Col span={8}>
            <a className={clsx(styles.link, styles.goolge)}>
              <i className={clsx(styles.icon, "fab fa-google")}></i>
              <span className={styles.text}>Google</span>
            </a>
          </Col>
          <Col span={8}>
            <a className={clsx(styles.link, styles.apple)}>
              <i className={clsx(styles.icon, "fab fa-apple")}></i>
              <span className={styles.text}>Apple</span>
            </a>
          </Col>
        </Row>
      </div>
      <div className={styles.bottom}>
        <div className={styles.policy}>
          <div className={styles.policyInto}>
            <span className={styles.text}>
              {" "}
              Bằng việc đăng ký, bạn đã đồng ý với Shoppe về
            </span>
            <a className={styles.link}> Điều khoản dịch vụ</a> {"&"}
            <a className={styles.link}> Chính sách bảo mật</a>
          </div>
        </div>
        <div className={styles.linkLogin}>
          <span className={styles.text}>
            Bạn đã có tài khoản ?{" "}
            <Link className={styles.link} to="/login">
              Đăng nhập
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
