import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Category.module.scss";
import { Col, Row } from "antd";

function Category(props) {
  const [data, setData] = useState([
    {
      id: 1,
      codeCategory: "",
      title: "",
      img: "",
    },
  ]);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios
        .get("http://localhost:3000/category")
        .catch((error) => {
          console.error(error);
        });
      setData(response.data);
    };
    fetchProduct();
  }, []);
  const renderCategory = () => {
    return data.map((data, index) => (
      <Col key={index} span={3}>
        <div className={styles.item}>
          <a href="#" className={styles.link}>
            <div>
              <img className={styles.img} src={data.img} alt="category" />
            </div>
            <span className={styles.label}>{data.title}</span>
          </a>
        </div>
      </Col>
    ));
  };

  return (
    <div className={styles.category}>
      <Row>{renderCategory()}</Row>
    </div>
  );
}

export default Category;
