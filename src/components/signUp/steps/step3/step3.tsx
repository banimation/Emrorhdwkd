"use client"

import styles from "./step3.module.css"
import buttonStyles from "../button.module.css"

import classNames from "classnames"
import { step } from "../../page"
import TextInput from "../utils/text-input/textInput"
import Button from "@/components/utils/button/button"
import { useSignals } from "@preact/signals-react/runtime"
import { signal } from "@preact/signals-react"
import { useRef } from "react"
import { password } from "../step2/step2"

export const validPassword = signal<string>("")

export default function Step3() {
  const numOfStep = 3
  const ref = useRef<HTMLInputElement>(null)
  useSignals()
  return (
    <div className={classNames(styles.container)} style={{'--page': step.value}}>
      <div>
        <h1>STEP 3</h1>
        <h4>혹시나 잘못 입력하지는 않으셨나요?🙄</h4>
        <h2>입력하신 암호를 확인해 주세요!🔑</h2>
      </div>
      
      <TextInput placeholder="암호 확인 입력창" ref={ref}></TextInput>
      <div className={buttonStyles.buttons}>
        <Button label="뒤로" onClick={() => {step.value = numOfStep-1}} className={buttonStyles.pre_button}></Button>
        <Button label="다음" onClick={() => {
          if(password.value === ref.current!.value) {
            step.value = numOfStep+1
            validPassword.value = ref.current!.value
          } else {
            alert("다시 입력해 주세요")
          }
        }} className={buttonStyles.next_button}></Button>
      </div>
    </div>
  )
}