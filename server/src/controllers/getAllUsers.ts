import { Request, Response } from "express";
import connection from "../config/connection";

async function getAllUsers(req: Request, res: Response) {
	try {
		const [rows, fields] = await connection.execute("SELECT * FROM users");
		console.log("Users Data Loaded Successfully");
		res.status(200).json({
			data: rows,
			fields: fields
		});
		await connection.end();
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An Error occurred while retrieving users"
		});
		await connection.end();
	}
}

export default { getAllUsers };
