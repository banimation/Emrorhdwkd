import { NextRequest } from "next/server"
// import * as mysql from "mysql"
import * as mysql from "mysql2/promise"
import mysqlKey from "../../../../key/mysql-password.json"

const db = mysql.createPool({
	user: "root",
	password: mysqlKey.password,
	database: mysqlKey.database
})

interface SignUpBody {
	id: string
	password: string
	validPassword: string
}
export async function POST(req: NextRequest) {
	const body: SignUpBody = await req.json()
	if (body.password === body.validPassword) {
		if (body.id.length <= 10 && body.password.length <= 20) {
			await db.query("INSERT INTO accounts (id, password) VALUES (?, ?);", [body.id, body.password])
		}
	}
	return Response.json({state: "done"})
}
