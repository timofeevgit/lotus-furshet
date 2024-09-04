import styles from "./carousel.module.css";
import classNames from "classnames";

export const CarouselUI = () => {
  return (
    <>
      <div className={classNames(styles.item, styles.item1)}>Item 1</div>
      <div className={classNames(styles.item, styles.item2)}>Item 2</div>
      <div className={classNames(styles.item, styles.item3)}>Item 3</div>
    </>
  );
};
