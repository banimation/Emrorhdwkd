import classNames from "classnames"
import "./button.css"

export default function Button(props: {label: string, onClick: Function, className?: string | boolean}) {
  return (
    <div className={classNames("button-container", props.className)} onClick={() => {props.onClick()}}>
      <div className="button-label">{props.label}</div>
    </div>
  )
}