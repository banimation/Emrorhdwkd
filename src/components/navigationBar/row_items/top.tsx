import Link from "next/link";

export default function Top() {
    return (
        <div className={"row_items top"}>
            <div>관심</div>
            <div>고객센터</div>
            <div><Link href={"/signUp"}>로그인</Link></div>
        </div>
    )
}