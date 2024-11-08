"use client"

import styles from "./step1.module.css"
import classNames from "classnames"
import { step } from "../../page"
import { useSignals } from "@preact/signals-react/runtime"
import Button from "@/components/utils/button/button"
import buttonStyles from "../button.module.css"
import TextInput from "../utils/text-input/textInput"
import { useRef } from "react"
import { signal } from "@preact/signals-react"

export const id = signal<string>("")

// 내가엄ㅊ어난사실을 알려주도록하지.
// 스텝들엔 모두 공통점이있다
// 다음시간에 계속...

export default function Step1() {
  const numOfStep = 1
  const ref = useRef<HTMLInputElement>(null)
  useSignals()
  return (
    <div className={classNames(styles.container)} style={{'--page': step.value}}>
      <div>
        <h1>STEP 1</h1>
        <h2>사용할 아이디를 입력해 주세요✍</h2>
      </div>
      
      <TextInput placeholder="아이디 입력창" ref={ref}></TextInput>

      <div className={buttonStyles.buttons}>
        <Button label="뒤로" onClick={() => {step.value = numOfStep-1;}} className={buttonStyles.pre_button}></Button>
        <Button label="다음" onClick={() => {
          step.value = numOfStep + 1
          id.value = ref.current!.value
        }} className={buttonStyles.next_button}></Button>
      </div>
      
    </div>
  )
}
