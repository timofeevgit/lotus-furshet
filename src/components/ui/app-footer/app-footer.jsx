import styles from "./app-footer.module.css";

export const AppFooterUI = () => {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.adressContainer}>
          <div className={styles.delivery}>Доставка по СПБ и Лен. области</div>
        </div>
        <div className={styles.contactsContainer}>Контакты
          <a href="tel:+79218608488" className={styles.contacts}>Сделать заказ: +7 921 860 84 88</a>
          <a href="mailto:dimadimajob@yandex.ru">dimadimajob@yandex.ru</a>
        </div>

        <div className={styles.socialsContainer}>
          <a href="https://wa.me/c/79112474329" target='_blank' className={styles.social}></a>
        </div>
      </footer>
    </>
  );
};
