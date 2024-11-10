import { NextRequest } from "next/server"
import * as mysql from "mysql"
// import * as mysql from "mysql2/promise"
import mysqlKey from "../../../../key/mysql-password.json"

const db = mysql.createPool({
	user: "root",
	password: mysqlKey.password,
	database: mysqlKey.database
})

interface SignInBody {
	id: string
	password: string
}

export async function POST(req: NextRequest) {
	const body: SignInBody = await req.json()
	// const [rows, fields] = await db.query("SELECT * FROM accounts WHERE id=?;", [body.id])
	// console.log(rows)
	let state = "failed";
	console.log(body.id)
	await new Promise((resp) => {
		db.query("SELECT * FROM accounts WHERE id=?;", [body.id], async (err, result) => {
				if(err) throw err
				if(body.password === result[0].password) state = "succeed"
				resp("")
		})
})
	return Response.json({state})
}