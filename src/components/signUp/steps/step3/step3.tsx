"use client";

import "./step3.css";

import classNames from "classnames";
import { step } from "../../page";
import TextInput from "../utils/text-input/textInput";
import Button from "../utils/button/button";
import { useSignals } from "@preact/signals-react/runtime";

export default function Step3() {
  const numOfStep = 3
  useSignals()
  return (
    <div className={classNames("step-container", "step3-container")} style={{'--page': step.value}}>
      <div>
        <h1>STEP 3</h1>
        <h4>혹시나 잘못 입력하지는 않으셨나요?🙄</h4>
        <h2>입력하신 암호를 확인해 주세요!🔑</h2>
      </div>
      
      <TextInput placeholder="암호 확인 입력창"></TextInput>

      <Button label="정확하게 입력했습니다!!!" onClick={() => {step.value = numOfStep+1;console.log(step.value)}}></Button>
    </div>
  )
}