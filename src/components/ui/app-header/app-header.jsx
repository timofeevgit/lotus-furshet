import styles from "./app-header.module.css";

export const AppHeaderUI = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.brandContainer}>
          <div className={styles.brandLogo}></div>
          <div className={styles.brandName}>Lotus Furshet</div>
          <p className={styles.brandInfo}>Кейтеринг, фуршеты, мероприятия</p>
        </div>
        <div className={styles.navigationContainer}>
          <button className={styles.menuButton}>МЕНЮ</button>
          <div className={styles.contactsContainer}>
            <a href="tel:+79218608488" className={styles.contacts}>
              Сделать заказ: +7 921 860 84 88
            </a>
            <div className={styles.delivery}>
              Доставка по СПБ и Лен. области
            </div>
            <div className={styles.socialsContainer}>
              <a
                href="https://wa.me/c/79112474329"
                target="_blank"
                className={styles.socialWhatsapp}
              ></a>
              <a
                href="https://t.me/Chili_YS"
                target="_blank"
                className={styles.socialTelegram}
              ></a>
              <a
                href="https://www.instagram.com/lotos_furshet.spb?igsh=ZGx2cjhnNTlub2Qz"
                target="_blank"
                className={styles.socialInstagram}
              ></a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
