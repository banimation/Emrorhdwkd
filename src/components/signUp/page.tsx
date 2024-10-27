"use client";

import "./page.css"
import Node from "./node"
import { signal } from "@preact/signals-react";

export const step = signal<number>(0)

export default function SignUp() {
  return (
    <div className={"sign-up-container"}>
      {/* <div className={"line"}></div> */}
      <Node 
          icon={"👋"} 
          title={"안녕하세요!"} 
          desc={"저희 사이트에 방문해주셔서 감사드립니다🙋‍♀️"}
        ></Node>
        {/* <Node 
          icon={"📖"} 
          title={"이용약관 확인"} 
          desc={"이용약관 제 1조..."}
        ></Node> */}
    </div>
  )
}