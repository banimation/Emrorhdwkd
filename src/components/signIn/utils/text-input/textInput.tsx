import classNames from "classnames"
import "./textInput.css"
import { RefObject } from "react"

export default function TextInput(props: {placeholder: string, ref?: RefObject<HTMLInputElement>}) {
  return (
    <div className={classNames("text-input-container")}>
      <input type="text" placeholder="" ref={props.ref} required/>
      <label>{props.placeholder}</label>
      <span></span>
    </div>
  )
}