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
		const query = "SELECT * FROM users WHERE username = ?",
			[rows] = await connection.execute(query, [username]);

		if (rows.length === 0) {
			return res.status(404).send("Invalid username or password");
		}

		const user = rows[0];
		bcryptjs.compare(password, user.password, (err, result) => {
			if (err) {
				return res
					.status(401)
					.json({ message: "Invalid username or password" });
			}
			if (result) {
				const token = jwt.sign({ id: user.id }, JWT_SECRET, {
					expiresIn: "1h"
				});
				return res.json({
					auth: true,
					token: token
				});
			} else {
				return res
					.status(401)
					.json({ message: "Invalid username or password" });
			}
		});
		logging.info("LOGIN", "User Authenticated Successfully");
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
		console.log(decoded);
		// tokenCache.set(decoded.user, token, 60 * 60);
		// res.clearCookie("token");

		console.log(nodeCache);
		return res.status(200).json({ message: "Logout successful" });
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

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

export default { login, logout, register };
