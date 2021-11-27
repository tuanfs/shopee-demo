import { Modal } from "antd";
import React, { useState } from "react";
import styles from "./ModalImg.module.scss";
function ModalImg(props) {
  const { showModal, imgList, img, name, onCancel } = props;
  const [imgMain, setImgMain] = useState(img);
  return (
    <>
      <Modal
        visible={showModal}
        onCancel={onCancel}
        footer={false}
        closable={false}
        centered={true}
        width="840px"
      >
        <div className={styles.modalContent}>
          <div className={styles.left}>
            <img
              src={imgMain || img}
              className={styles.imgMain}
              alt="Ảnh sản phẩm"
            />
          </div>
          <div className={styles.right}>
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.listImg}>
              {imgList
                ? imgList.map((item, index) => (
                    <div
                      onClick={() => setImgMain(item)}
                      key={index}
                      className={styles.itemImg}
                    >
                      <img
                        className={styles.img}
                        src={item}
                        alt="Ảnh sản phẩm"
                      />
                    </div>
                  ))
                : ""}
              {imgList
                ? imgList.map((item, index) => (
                    <div
                      onClick={() => setImgMain(item)}
                      key={index}
                      className={styles.itemImg}
                    >
                      <img
                        className={styles.img}
                        src={item}
                        alt="Ảnh sản phẩm"
                      />
                    </div>
                  ))
                : ""}
              {imgList
                ? imgList.map((item, index) => (
                    <div
                      onClick={() => setImgMain(item)}
                      key={index}
                      className={styles.itemImg}
                    >
                      <img
                        className={styles.img}
                        src={item}
                        alt="Ảnh sản phẩm"
                      />
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalImg;
