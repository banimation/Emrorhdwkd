"use client"

import classNames from "classnames"
import { useState, useEffect, useRef } from "react"

export default function Node(props: {icon: string, title: string, desc: string, index: number}) {
  const [descHeight, setDescHeight] = useState(0)
  const descRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    setDescHeight(descRef.current!.getBoundingClientRect().height)
  }, [])
  
  return (
    <div
      className={classNames("node", descRef.current && "ready")}
      style={{
        '--desc-height': `${descHeight}px`,
        '--index': props.index,
      }}
    >
      <div className="icon">{props.icon}</div>
      <div ref={descRef} className="desc">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}