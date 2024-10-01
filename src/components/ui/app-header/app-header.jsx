import styles from './app-header.module.css';

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
            <a href="tel:+79218608488" className={styles.contacts}>Сделать заказ: +7 921 860 84 88</a>
            <div className={styles.delivery}>Доставка по СПБ и Лен. области</div>
            <a href="https://wa.me/c/79112474329" target='_blank' className={styles.social}></a>
          </div>
        </div>
      </header>
    </>
  )
}