import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import connection from "../config/connection";
import logging from "../config/logging";

//* Test Token Only
const JWT_SECRET =
	"f733fde34fd6bc39991a60b5b6d521cc0ca845d8cdfae0b5139e5c02668e6d33e73d4a4393bff46da658bda5fa6e53cbb4a40d087b06029ca6d1fd6127e0978e";

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
				const token = jwt.sign(
					{ id: user.id, username: user.username },
					JWT_SECRET
				);
				return res.json({ token });
			} else {
				return res
					.status(401)
					.json({ message: "Invalid username or password" });
			}
		});

		//* User authenticated successfully
		logging.info("LOGIN", "User Authenticated Successfully");

		// if (!passwordMatch) return res.status(401).send("Invalid username or password");
		// return res.json({ message: "Logged in" });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Server error" });
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

export default { login, register };
