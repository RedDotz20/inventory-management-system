import { Request, Response, NextFunction } from "express";
import bcryptjs from "bcryptjs";
import connection from "../config/connection";
import logging from "../config/logging";

async function register(req: Request, res: Response, next: NextFunction) {
	try {
		const { username, password } = req.body,
			hashedPassword = await bcryptjs.hash(password, 10),
			query = "INSERT INTO users (username, password) VALUES (?,?);";

		await connection.query(query, [username, hashedPassword]);
		logging.info("REGISTER", "User Registered Successfully");

		res.status(200).json({
			username: username,
			password: hashedPassword
		});
		next();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error });
	}
}

async function login(req: Request, res: Response) {
	try {
		const { username, password } = req.body;

		const query = "SELECT * FROM users WHERE username = ?";
		const [rows] = await connection.execute(query, [username]);

		if (rows.length === 0) {
			return res.status(404).send("Invalid username or password");
		}

		const user = rows[0],
			passwordMatch = await bcryptjs.compare(password, user.password);

		if (!passwordMatch) {
			return res.status(401).send("Invalid username or password");
		}

		logging.info("LOGIN", "User Authenticated Successfully");
		return res.send("User authenticated");
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Server error" });
	}
}

export default { login, register };
