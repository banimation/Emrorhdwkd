import classNames from "classnames"
import styles from "../page.module.css"
import Link from "next/link"

export default function Top() {
  return (
    <div className={classNames(styles.rowItems, styles.top)}>
      <div>관심</div>
      <div>고객센터</div>
      <div><Link href="/signIn">로그인</Link></div>
    </div>
  )
}