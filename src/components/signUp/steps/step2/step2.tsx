import styles from "./step2.module.css"
import buttonStyles from "../button.module.css"
import classNames from "classnames"
import { step } from "../../page"
import { useSignals } from "@preact/signals-react/runtime"
import TextInput from "../utils/text-input/textInput"
import Button from "@/components/utils/button/button"
import { signal } from "@preact/signals-react"
import { useRef } from "react"

export const password = signal<string>("")

export default function Step2() {
  const numOfStep = 2
  const ref = useRef<HTMLInputElement>(null)
  useSignals()
  return (
    <div className={classNames(styles.container)} style={{'--page': step.value}}>
      <div>
        <h1>STEP 2</h1>
        <h4>누가 주변에서 보고있지는 않은가요?👀</h4>
        <h2>사용하실 암호를 입력해 주세요🔐</h2>
      </div>
      
      <TextInput placeholder="암호 입력창" ref={ref}></TextInput>

      <div className={buttonStyles.buttons}>
        <Button label="뒤로" onClick={() => {step.value = numOfStep-1}} className={buttonStyles.pre_button}></Button>
        <Button label="다음" onClick={() => {
          step.value = numOfStep + 1
          password.value = ref.current!.value
        }} className={buttonStyles.next_button}></Button>
      </div>
    </div>
  )
}