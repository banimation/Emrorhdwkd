import styles from "./product-list.module.css"
import ProductItem, { type Product } from "./product-item"
import type { Suspensed } from "@/util/suspense"

export interface ProductListProps {
	items: Suspensed<Product[]>
}
export default function ProductList(props: ProductListProps) {
  const items = props.items.value
  
	return (
		<ul className={styles.productList}>
			{items.map(item => <ProductItem data={item} key={item.id} />)}
		</ul>
	)
}
