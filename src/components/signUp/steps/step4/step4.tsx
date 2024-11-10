import { useSignals } from "@preact/signals-react/runtime"
import styles from "./step4.module.css"
import buttonStyles from "../button.module.css"
import classNames from "classnames"
import { step } from "../../page"
import Button from "@/components/utils/button/button"
import { id } from "../step1/step1"
import { password } from "../step2/step2"
import { validPassword } from "../step3/step3"

export default function Step4() {
  const numOfStep = 4
  useSignals()
  return (
    <div className={classNames(styles.container)}  style={{'--page': step.value}}>
      <div>
        <h1>STEP 4</h1>
        <h1>거의 다 왔습니다!</h1>
        <h2>마지막으로 확인해 주세요🔍</h2>
      </div>
      <div className={classNames(styles.info)}>
        <span>아이디: {id.value}</span>
        <span>암호: {password.value}</span>
      </div>
      <div className={buttonStyles.buttons}>
        <Button label="뒤로" onClick={() => {step.value = numOfStep-1}} className={buttonStyles.pre_button}></Button>
        <Button label="다음" onClick={() => {
          fetch("http://localhost/api/signUp", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            cache: 'no-store',
            body: JSON.stringify({id: id.value, password: password.value, validPassword: validPassword.value})
          }).then(res => res.json()).then((res) => {
						if(res.state === "done") {
							step.value = numOfStep+1
						}
					})
        }} className={buttonStyles.next_button}></Button>
      </div>
    </div>
  )
}