import { signal } from "@preact/signals-react"
import Animation0 from "./animation/animation0"
import styles from "./page.module.css"
import Button from "../utils/button/button"
import TextInput from "./utils/text-input/textInput"
import Animation1 from "./animation/animation1"
import Animation2 from "./animation/animation2"
import Animation3 from "./animation/animation3"
import Link from "next/link"

export default function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.form}>
          <h1>로그인</h1>
          <div className={styles.inputs}>
            <TextInput placeholder="아이디"></TextInput>
            <TextInput placeholder="암호"></TextInput>
          </div>
          <Button label="로그인" onClick={() => {}}></Button>
          <span>계정이 없으신가요? <Link href={"/signUp"}>가입하러 가기</Link></span>
        </div>
        <div className={styles.animateContainer}>
          <Animation0></Animation0>
          <Animation1></Animation1>
          <Animation2></Animation2>
          <Animation3></Animation3>
        </div>
      </div>
    </div>
  )
}