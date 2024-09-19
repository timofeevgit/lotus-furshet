import styles from "./menu-cards.module.css";
import React from "react";
import classNames from "classnames";
import foodImagesMenu from "../../../images/menu-images/images";

export const MenuCardsUI = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.menuGrid}>
            {foodImagesMenu.map((item) => (
              <div key={item.id}>
                <div className={classNames(styles.imgBody, styles.img)}>
                  <img src={item.src} alt={item.alt} />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p>{item.calories}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
