import { useSignals } from "@preact/signals-react/runtime"
import styles from "./animation0.module.css"
import { useEffect } from "react"
export default function Animation0() {
  useSignals()
  return (
    <div className={styles.container}>
      <div className={styles.emotes}>
        <span className={styles.product}>🧸</span>
        <span className={styles.cart}>🛒</span>
      </div>
      <div className={styles.text}>
        <h3>로그인을 통해 장바구니 서비스를 경험해보세요!</h3>
      </div>
    </div>
  )
}
