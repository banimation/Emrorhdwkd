import classNames from "classnames"
import "./textInput.css"

export default function TextInput(props: {placeholder: string}) {
  return (
    <div className={classNames("text-input-container")}>
      <input type="text" placeholder="" required/>
      <label>{props.placeholder}</label>
      <span></span>
    </div>
  )
}