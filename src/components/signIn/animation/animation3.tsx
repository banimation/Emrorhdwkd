import styles from "./animation3.module.css"

export default function Animation3() {
  return (
    <div className={styles.container}>
      <div className={styles.emotes}>
        <span className={styles.light}>💡</span>
      </div>
      <div className={styles.text}>
        <h3>계정 만들고 다양한 혜택 받으세요!</h3>
      </div>
    </div>
  )
}