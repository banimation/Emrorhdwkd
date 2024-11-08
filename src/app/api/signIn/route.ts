import { NextRequest } from "next/server"
// import * as mysql from "mysql"
import * as mysql from "mysql2/promise"
import mysqlKey from "../../../../key/mysql-password.json"

const db = mysql.createPool({
	user: "root",
	password: mysqlKey.password,
	database: mysqlKey.database
})

// 위 해브 투 리유즈 띵스
