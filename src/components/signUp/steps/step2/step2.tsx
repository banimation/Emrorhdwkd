"use client"

import "./step2.css"
import classNames from "classnames";
import { step } from "../../page";
import { useSignals } from "@preact/signals-react/runtime";
import TextInput from "../utils/text-input/textInput";
import Button from "../utils/button/button";

export default function Step2() {
  const numOfStep = 2
  useSignals()
  return (
    <div className={classNames("step-container", "step2-container")} style={{'--page': step.value}}>
      <div>
        <h1>STEP 2</h1>
        <h4>누가 주변에서 보고있지는 않은가요?👀</h4>
        <h2>사용하실 암호를 입력해 주세요🔐</h2>
      </div>
      
      <TextInput placeholder="암호 입력창"></TextInput>

      <Button label="다음" onClick={() => {step.value = numOfStep+1;console.log(step.value)}}></Button>
    </div>
  )
}
// 코드가 아까보다 많이 예뻐짐