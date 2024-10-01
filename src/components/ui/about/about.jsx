import styles from './about.module.css';

export const AboutUI = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.name}>Привет, меня зовут Юлия, я фуршетный мастер</h2>
        <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nobis facere est eos accusantium aliquid tempore vero. Libero nesciunt atque enim ut, dolores illum quae distinctio consectetur officia iste pariatur.</p>
        <div className={styles.image} />
      </div>
    </>
  )
}