"use client"

import "./step1.css"
import classNames from "classnames"
import { step } from "../../page"
import { useSignals } from "@preact/signals-react/runtime"
import Button from "../utils/button/button"
import TextInput from "../utils/text-input/textInput"

export default function Step1() {
  const numOfStep = 1
  useSignals()
  return (
    <div className={classNames("step-container", "step1-container")} style={{'--page': step.value}}>
      <div>
        <h1>STEP 1</h1>
        <h2>사용할 아이디를 입력해 주세요✍</h2>
      </div>
      
      <TextInput placeholder="아이디 입력창"></TextInput>

      <Button label="다음" onClick={() => {step.value = numOfStep+1;console.log(step.value)}} className={""}></Button>
    </div>
  )
}
