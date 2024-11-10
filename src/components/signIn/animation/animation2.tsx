import styles from "./animation2.module.css"

export default function Animation2() {
  return (
    <div className={styles.container}>
      <div className={styles.emotes}>
        <span className={styles.lock}>🔒</span>
        <span className={styles.tool}>🔨</span>
      </div>
      <div className={styles.text}>
        <h3>계정이 없으시다고요? 쉽고 빠르게 만들 수 있습니다!</h3>
      </div>
    </div>
  )
}
// 404