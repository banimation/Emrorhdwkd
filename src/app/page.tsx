import styles from "./page.module.css"
import Nav from "@/components/navigationBar/page"
import Main from "@/components/main/page"

export default function Home() {
  return (
    <div className={styles.root}>
      <Nav />
      <Main />
    </div>
  )
}
