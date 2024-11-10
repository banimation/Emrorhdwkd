import styles from "./animation1.module.css"

export default function Animation1() {
  return (
    <div className={styles.container}>
      <div className={styles.emotes}>
        <span className={styles.emtyHeart}>🖤</span>
        <span className={styles.heart}>🧡</span>
        <span className={styles.cursor}>👆</span>
      </div>
      <div className={styles.text}>
        <h3>원하는 상품을 찜해두세요!</h3>
      </div>
    </div>
  )
}