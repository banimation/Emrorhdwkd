"use client"
import styles from "./page.module.css"
import Main from "./row_items/main"
import Top from "./row_items/top"

export default function Nav() {
  return (
    <div className={styles.container}>
      <Top></Top>
      <Main></Main>
    </div>
  )
}
