import styles from "./app-footer.module.css";

export const AppFooterUI = () => {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.adressContainer}>
          <div className={styles.delivery}>Доставка по СПБ и Лен. области</div>
        </div>
        <div className={styles.contactsContainer}>
          Контакты:
          <a href="tel:+79218608488" className={styles.contacts}>
            Сделать заказ: +7 911 247 43 29
          </a>
          <a href="mailto:chilikinays@ya.ru" className={styles.contacts}>
            chilikinays@ya.ru
          </a>
        </div>

        <div className={styles.socials}>
          <span>Социальные сети:</span>
          <div className={styles.socialsContainer}>
            <a
              href="https://wa.me/c/79112474329"
              target="_blank"
              rel="noreferrer"
              className={styles.socialWhatsapp}
            >
              {" "}
            </a>
            <a
              href="https://t.me/Chili_YS"
              target="_blank"
              rel="noreferrer"
              className={styles.socialTelegram}
            >
              {" "}
            </a>
            <a
              href="https://www.instagram.com/lotos_furshet.spb?igsh=ZGx2cjhnNTlub2Qz"
              target="_blank"
              rel="noreferrer"
              className={styles.socialInstagram}
            >
              {" "}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
