import styles from './quote.module.css';

export const QuoteUI = (quotes) => {
  return (
    <>
      <span className={styles.line}></span>
      <div className={styles.quote}>{quotes.text}</div>
      <span className={styles.line}></span>
    </>
  )
}