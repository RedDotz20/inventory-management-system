import { Request, Response } from "express";
import connection from "../config/connection";

async function getAllUsers(req: Request, res: Response) {
	try {
		const [rows, fields] = await connection.execute(`SELECT * FROM users`);
		console.log("Users Data Loaded Successfully");
		return res.status(200).json({
			data: rows
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({
			message: `An error occurred while retrieving users`
		});
	}
}

export default { getAllUsers };
