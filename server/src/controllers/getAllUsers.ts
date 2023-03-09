import { Request, Response } from "express";
import Users from "../models/users";

async function getAllUsers(req: Request, res: Response) {
	try {
		const users = await Users.findAll();
		res.status(200).json({ data: users });
		console.log("Users Data Loaded Successfully");
	} catch (err) {
		console.error(err);
		res.status(500).json({
			message: "An Error occurred while retrieving users",
		});
	}
}

export default { getAllUsers };
