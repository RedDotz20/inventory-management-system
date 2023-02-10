import express, { Request, Response, NextFunction } from "express";
import mysql from "mysql2";
import { validateEmployee } from "../validation";
import { validationResult, check } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connection from "../connection";

const router = express.Router();

// router.post(
// 	"/login",
// 	[
// 		check("username", "Please enter a valid username").isLength({ min: 4 }),
// 		check("password", "Please enter a valid password").isLength({ min: 4 })
// 	],
// 	async (req: Request, res: Response) => {
// 		const errors = validationResult(req);
// 		if (!errors.isEmpty()) {
// 			return res.status(400).json({ errors: errors.array() });
// 		}
// 		const { username, password } = req.body;

// 		try {
// 			const connection = await connection;
//       const [rows] = await connection.query('SELECT * FROM employee WHERE username = ?', [username]);
//       if (!rows.length) {
//         return res.status(400).json({ msg: 'Invalid Credentials' });
//       }
// 		}
// 	}
// );

// router.post(
// 	"/login",
// 	validateEmployee,
// 	(req: Request, res: Response, next: NextFunction) => {
// 		connection.query(
// 			`SELECT * FROM users WHERE LOWER(email) = LOWER(${(
// 				connection as any
// 			).escape(req.body.email)});`,

// 			(err, result) => {
// 				if (Array.isArray(result) && result.length) {
// 					return res.status(409).send({
// 						msg: "This user is already in use!"
// 					});
// 				} else {
// 					// username is available
// 					bcrypt.hash(req.body.password, 10, (err, hash) => {
// 						if (err) {
// 							return res.status(500).send({
// 								msg: err
// 							});
// 						} else {
// 							// has hashed pw => add to database
// 							connection.query(
// 								`INSERT INTO users (name, email, password) VALUES ('${
// 									req.body.name
// 								}', ${(connection as any).escape(req.body.email)},
//                         ${(connection as any).escape(hash)})`,

// 								(err, result) => {
// 									if (err) {
// 										throw err;
// 										return res.status(400).send({
// 											msg: err
// 										});
// 									} else {
// 										return res.status(201).send({
// 											msg: "The user has been registerd with us!"
// 										});
// 									}
// 								}
// 							);
// 						}
// 					});
// 				}
// 			}
// 		);
// 	}
// );
