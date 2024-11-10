import { useSignals } from "@preact/signals-react/runtime"
import styles from "./step5.module.css"
import buttonStyles from "../button.module.css"

// 갠적으로 이거 타입검사 안돼서 안좋아하긴 한데 고유함을 보장하면서도 SSR (편하게) 지원하려면 이게 제일 나음
// ^^^^^^
// 뭔가 알아옴
// 근데 지금상황에 적용하는게 좋을진 나도 잘 모르겠다

import classNames from "classnames"
import { step } from "../../page"
import Button from "@/components/utils/button/button"

export default function Step5() {
  const numOfStep = 5
  useSignals()
  return (
    <div className={classNames(styles.container)}  style={{'--page': step.value}}>
      <div>
        <h1>계정 생성 완료!👏</h1>
        <h2>모든 단계를 완료했습니다!</h2>
      </div>
      <div className={classNames(styles.slide_container, step.value === numOfStep && styles.checked_slide_container)}>
        <div className={classNames(styles.switch, step.value === numOfStep && styles.checked_switch)}></div>
        <span>
          <div>🙆‍♀️</div>
          <div>🙅‍♂️</div>
        </span>
      </div>
      <div className={buttonStyles.buttons}>
        <Button
					label="다음"
					onClick={() => {
						step.value = numOfStep
					}}
					className={buttonStyles.next_button}
				/>
      </div>
    </div>
  )
}
