import classNames from "classnames"
import styles from "../page.module.css"
import Link from "next/link"
import { getSession } from "@/lib/session"
import { useEffect, useState } from "react"
import { craeteKey } from "@/lib/createKey"

export default function Top() {
	const [userId, setUserId] = useState("")
	const getId = async () => {
		const session = await getSession();
		if(session) {
			setUserId(session.id)
		} else {
			setUserId("로그인 되어있지 않음")
		}
		craeteKey()
	}
	useEffect(() => {
		getId()
	}, [])
  return (
    <div className={classNames(styles.rowItems, styles.top)}>
			<div>{userId}</div>
      <div>관심</div>
      <div>고객센터</div>
      <div><Link href="/signIn">로그인</Link></div>
    </div>
  )
}