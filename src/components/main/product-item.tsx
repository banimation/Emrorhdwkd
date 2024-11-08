import classNames from "classnames"
import styles from "./product-item.module.css"
import Link from "next/link"

export interface Product {
	id: number
	name: string
	originalPriceInKrw: number
	discountedPriceInKrw: number | null
	imagePath: string
}

export interface ProductItemProps {
	data: Product
}
export default function ProductItem(props: ProductItemProps) {
  const { discountedPriceInKrw } = props.data
  
	return (
		<li className={styles.productItem} data-id={props.data.id}>
      <Link href={`/product/${props.data.id}`} className={styles.productLink}>
        <img className={styles.productImg} src={props.data.imagePath} alt="product image" />
      </Link>
      <Link href={`/product/${props.data.id}`} className={styles.productLink} title={props.data.name}>
        <div className={classNames(styles.productName, styles.text)}>
          {props.data.name}
        </div>
      </Link>
      <div className={classNames(
        styles.originalPrice,
        styles.text,
        discountedPriceInKrw == null
          ? styles.actualPrice
          : styles.discount,
      )}>
        {formatPrice(props.data.originalPriceInKrw)}
      </div>
      {discountedPriceInKrw != null && (
        <div className={classNames(styles.actualPrice, styles.text)}>{formatPrice(discountedPriceInKrw)}</div>
      )}
		</li>
	)
}

const priceFormatter = new Intl.NumberFormat('ko', { style: 'currency', currency: 'KRW' })
const formatPrice = (priceInKrw: number) =>
  priceFormatter.format(priceInKrw)
