import styles from "../page.module.css"
import classNames from "classnames"

export default function Main() {
  return (
    <div className={classNames(styles.rowItems, styles.main)}>
      <img src="/logo.png" alt="logo" className={styles.logo} />
      <h1>뜨개고장</h1>
    </div>
  )
}
