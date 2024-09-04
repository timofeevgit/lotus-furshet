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
            <a href="#" className={styles.contacts}>Сделать заказ: 8 921 860 84 88</a>
            <a href="#" className={styles.social}>whatsapp / telegram</a>
          </div>
        </div>
      </header>
    </>
  )
}