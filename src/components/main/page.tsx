import styles from "./page.module.css"
import ProductListTabs from "./product-list-tabs"

export default async function Main() {
  // useSignals()
  
  return (
    <div className={styles.container}>
      <ProductListTabs />
    </div>
  )
}
