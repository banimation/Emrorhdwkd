"use client"

import "./step0.css"
import Node from "./node"
import { step } from "../../page"
import Button from "../utils/button/button"
import classNames from "classnames"
import { useSignals } from "@preact/signals-react/runtime"


export default function Step0() {
  const numOfStep = 0
  useSignals()
  return (
    <div className={classNames("step-container", "step0-container")} style={{'--page': step.value}}>
      <Node
        icon="👋"
        title="안녕하세요!"
        desc="저희 사이트에 방문해주셔서 감사합니다🙋‍♀️"
				index={0}
      />
      <Node
        icon="📖"
        title="다양한 서비스"
        desc="계정을 생성하고 '관심', '추천'등 다양한 서비스를 경험 해보세요!✨"
				index={1}
      />
      <Node
        icon="🎫"
        title="절약 정신"
        desc="계정을 생성하고 포인트를 모아 비용을 절약해보시는건 어떠세요?😁"
				index={2}
      />
      <Node
        icon="🚩"
        title="출발"
        desc={"\"시작하기\" 버튼을 눌러 안내에 따라 계정생성을 진행해주세요! 행운을 빌어요!🏁"} // 오엥 {여기다 써야하는구나}
				index={3}
      />
      <Button label="시작하기" onClick={() => {step.value = numOfStep+1;console.log(step.value)}} className={"button"}></Button>
    </div>
  )
}
