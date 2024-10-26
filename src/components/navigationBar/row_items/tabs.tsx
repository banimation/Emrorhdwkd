"use client";
import React from "react";

const itemArr = [
    "추천",
    "",
    "랭킹",
    "",
    "SALE"
]
export default function Tabs() {
    const [selectedTab, setTab] = React.useState("추천");
    return (
        <div className={"row_items tabs"}>
            {itemArr.map((element, index) => {
                if(element === "") return <div className={"border"} key={index}></div>
                const className: Array<string> = ["tab"]
                if(element === selectedTab) className.push("selectedTab")
                return (<div key={index} className={className.join(" ")} onClick={() => {
                    setTab(element)
                }}>
                    <div>{element}</div>
                </div>)
                    
            })}
        </div>
    )
}