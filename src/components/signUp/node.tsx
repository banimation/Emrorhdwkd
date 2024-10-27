"use client";

import classNames from "classnames";
import { useState } from "react";

export default function Node(props: {icon: string, title: string, desc: string}) {
  const [isOpen, setState] = useState(false)
  return (
    <div className={classNames("node", isOpen ? "open" : "close")} onClick={() => {
      setState(true)
    }}>
      <div className="icon">{props.icon}</div>
      <div className={classNames("desc", "desc-1", isOpen ? "show-desc" : "hidden-desc")}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}