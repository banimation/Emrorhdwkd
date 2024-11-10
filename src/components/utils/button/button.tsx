import classNames from "classnames"
import "./button.css"

// 둘이 서로 다른파일인데
// 사실상 다른게 없다는게 느껴지지 않는가
// 바로 이런ㅁ녀에서 재사용이 필요하다는것
// 근데 이런거 처음부터 제대로 안짜면 나중가서 개큰똥됨
// 나중에가서 복붙수십개해놓은거 치우는것보다
// 처음에 짤때부터 제대로하는게 나음
export default function Button(props: {label: string, onClick: Function, className?: string | boolean}) {
  return (
    <div className={classNames("button-container", props.className)} onClick={() => {props.onClick()}}>
      <div className="button-label">{props.label}</div>
    </div>
  )
}
