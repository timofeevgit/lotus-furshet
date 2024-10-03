import styles from "./menu-cards.module.css";
import React, { useState } from "react";
import Modal from "react-modal";
import classNames from "classnames";
import foodImagesMenu from "../../../images/menu-images/images";

export const MenuCardsUI = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setModalIsOpen(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.menuGrid}>
            {foodImagesMenu.map((item) => (
              <div key={item.id} className={styles.cardContainer}>
                <div className={classNames(styles.imgBody, styles.img)}>
                  <img src={item.src} alt={item.alt}  onClick={() => openModal(item.src)} />
                </div>
                <div className={styles.textContainer}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p>{item.calories}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={styles.modal}
      >
        <img src={selectedImage} alt="" style={{ width: "100%" }} />
      </Modal>

    </>
  );
};
