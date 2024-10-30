"use client";

import "./page.css"
import { signal } from "@preact/signals-react"
import Step0 from "./steps/step0/step0"
import Step1 from "./steps/step1/step1"
import Step2 from "./steps/step2/step2";
import Step3 from "./steps/step3/step3";

export const step = signal<number>(0)

export default function SignUp() {
  return (
    <div className="sign-up-container">
      <div className="steps-container">
        <Step0></Step0>
        <Step1></Step1>
        <Step2></Step2>
        <Step3></Step3>
      </div>
    </div>
  )
}