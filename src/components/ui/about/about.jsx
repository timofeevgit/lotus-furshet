import styles from "./about.module.css";

export const AboutUI = () => {
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.name}>
          Привет! Меня зовут Юлия, я фуршетный мастер.
        </h2>

        <p className={styles.paragraph}>
          Для вашего праздника я создам произведение искусства из отборных
          ингридиентов. Все продукты исключительной свежести, готовятся за 8
          часов до вашего мероприятия. Вы можете заказать фуршет на любое число
          гостей и любой праздник: день рождения, корпоратив, свадьба или просто
          приятная встреча с близкими. Я доставлю закуски по вашему адресу в
          пределах Санкт-Петербурга и Лен. области. Чтобы не пришлось думать о
          красоте и подаче, вы можете дополнительно заказть сервировку и
          оформление по вашему вкусу. Узнать подробности по меню, сделать заказ
          или задать вопрос можно мне в WhatsApp или Telegram.
        </p>
        <a href="tel:+79112474329" className={styles.contacts}>
          +7 911 247 43 29
        </a>
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
        <div className={styles.image} />
      </section>
    </>
  );
};
