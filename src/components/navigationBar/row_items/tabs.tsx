"use client"
import React from "react"
import classNames from "classnames"
import Link from "next/link"
import { signal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

type Tab = typeof items[number]
const items = [
  "추천",
  "랭킹",
  "SALE"
] as const

export const selectedTab = signal<Tab>("추천")


export default function Tabs() {
  useSignals
  ()
  return (
    <nav>
      <ul className="row_items tabs">
        {items.map(item =>
          <li
            key={item}
            className={classNames(
              "tab",
              item === selectedTab.value && "selectedTab",
            )}
          >
            <button onClick={() => selectedTab.value = item}>
              {item}
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}