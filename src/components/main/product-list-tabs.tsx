"use client"
import styles from "./product-list-tabs.module.css"
import React, { Suspense, useMemo } from "react"
import classNames from "classnames"
import { useSignal, useSignals } from "@preact/signals-react/runtime"
import ProductList from "./product-list"
import { Product } from "./product-item"
import { suspensed } from "@/util/suspense"

type Tab = typeof items[number]
const items = [
  "recommend",
  "ranking",
  "discount"
] as const

export default function ProductListTabs() {
  useSignals()
  
  const selectedTab = useSignal<Tab>("recommend")
  const productList = useMemo(
    () => suspensed(() => fetchProductList(selectedTab.value)),
    [selectedTab.value],
  )
  
  return (
    <div className={styles.container}>
      <nav className={classNames(styles.tabsContainer)}>
        <menu className={classNames(styles.rowItems, styles.tabs)}>
          {items.map(item =>
            <li
              key={item}
              className={classNames(
                styles.tab,
                item === selectedTab.value && styles.selectedTab,
              )}
            >
              <button onClick={() => selectedTab.value = item}>
                {({
                  recommend: "추천",
                  ranking: "랭킹",
                  discount: "SALE",
                } satisfies Record<Tab, string>)[item]}
              </button>
            </li>
          )}
        </menu>
      </nav>
      <Suspense fallback={<div>로딩중</div>}>
        <ProductList items={productList} />
      </Suspense>
    </div>
  )
}

export const fetchProductList = async (tab: Tab): Promise<Product[]> => {
  if (tab === 'recommend') {
    // 테스트용
    return [
      {
        id: 0,
        name: '아닌대1',
        originalPriceInKrw: 10000,
        discountedPriceInKrw: null,
        imagePath: '/dkslseo.png',
      },
      {
        id: 1,
        name: '아닌대2',
        originalPriceInKrw: 10000,
        discountedPriceInKrw: 1000,
        imagePath: '/dkslseo.png',
      },
      {
        id: 2,
        name: '아닌대3',
        originalPriceInKrw: 10000,
        discountedPriceInKrw: 1000,
        imagePath: '/dkslseo.png',
      },
      {
        id: 3,
        name: '아닌대12341234불빡',
        originalPriceInKrw: 10000,
        discountedPriceInKrw: 1000,
        imagePath: '/dkslseo.png',
      },
    ]
  } else if (tab === 'ranking') {
    // 테스트용
    return [
      {
        id: 0,
        name: '아닌대1',
        originalPriceInKrw: 10000,
        discountedPriceInKrw: null,
        imagePath: '/dkslseo.png',
      },
      {
        id: 1,
        name: '아닌대2',
        originalPriceInKrw: 10000,
        discountedPriceInKrw: 1000,
        imagePath: '/dkslseo.png',
      },
    ]
  } else {
    // 테스트용
    return [
      {
        id: 1,
        name: '아닌대2',
        originalPriceInKrw: 10000,
        discountedPriceInKrw: 1000,
        imagePath: '/dkslseo.png',
      },
      {
        id: 2,
        name: '아닌대3',
        originalPriceInKrw: 10000,
        discountedPriceInKrw: 1000,
        imagePath: '/dkslseo.png',
      },
      {
        id: 3,
        name: '아닌대12341234불빡',
        originalPriceInKrw: 10000,
        discountedPriceInKrw: 1000,
        imagePath: '/dkslseo.png',
      },
    ]
  }
}
