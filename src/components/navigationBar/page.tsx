"use client";
import "./page.css"
import Main from "./row_items/main";
import Tabs from "./row_items/tabs";
import Top from "./row_items/top"

export default function Nav() {
    return (
        <div className={"container"}>
            <Top></Top>
            <Main></Main>
            <Tabs></Tabs>
        </div>
    );
}