import { Request, Response, NextFunction } from "express";
import nodeCache from "node-cache";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import connection from "../config/connection";
import logging from "../config/logging";
import config from "../config/config";

const JWT_SECRET = config.server.token.secret;
const tokenCache = new nodeCache({ stdTTL: 300 });

async function login(req: Request, res: Response) {
	try {
		const { username, password } = req.body;
		const query = `SELECT * FROM users WHERE username=?`;
		const user = await connection.execute(query, [username]);

		if (!user) return res.status(404).send("Invalid username or password");

		const isPasswordValid = await bcryptjs.compare(password, user.password);

		if (isPasswordValid) {
			const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
			logging.info("LOGIN", "User Authenticated Successfully");
			return res.json({ auth: true, token: token });
		}
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Server error" });
	}
}

async function logout(req: Request, res: Response) {
	const token = req.headers.authorization?.split(" ")[1];
	if (!token) {
		return res.status(400).json({ error: "Token NOT Found" });
	}
	try {
		const decoded = jwt.verify(token, JWT_SECRET) as { user: string };
		return res.status(200).json({ message: "Logout successful" });
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

async function register(req: Request, res: Response, next: NextFunction) {
	try {
		const { username, password } = req.body,
			hashedPassword = await bcryptjs.hash(password, 10);

		const query = `INSERT INTO users (username, password) VALUES (?,?)`;
		await connection.execute(
			query,
			[username, hashedPassword],
			(error, result) => {
				if (error) throw error;
				res.status(201).json({ result });
				logging.info("REGISTER", "User Registered Successfully");
			}
		);
		next();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error });
	}
}

export default { login, logout, register };
