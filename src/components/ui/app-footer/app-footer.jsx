import styles from "./app-footer.module.css";

export const AppFooterUI = () => {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.adressContainer}>
          <div className={styles.delivery}>Доставка</div>
        </div>
        <div className={styles.contactsContainer}>Контакты
          <div>Телефон</div>
          <div>Email</div>
        </div>

        <div className={styles.socialsContainer}>
          <a href="#">WhatsApp</a>
          <a href="#">Telegram</a>
        </div>
      </footer>
    </>
  );
};
