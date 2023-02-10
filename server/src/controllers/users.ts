import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";
import bcryptjs from "bcryptjs";
import signJWT from "../functions/signJWT";
import { Connect, Query } from "../config/mysql";
import IUser from "../interfaces/users";
import IMySQLResult from "../interfaces/result";

const NAMESPACE = "Users";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
	logging.info(NAMESPACE, "Token validated user authorized");

	return res.status(200).json({
		message: "Authorized"
	});
};

const register = (req: Request, res: Response, next: NextFunction) => {
	let { username, password } = req.body;

	bcryptjs.hash(password, 10, (hashError, hash) => {
		if (hashError) {
			return res.status(500).json({
				message: hashError.message,
				error: hashError
			});
		}

		// TODO: Insert user into DB here
		let query = `INSERT INTO users (username, password) VALUES ("${username}", "${password}")`;

		Connect()
			.then((connection) => {
				Query<IMySQLResult>(connection, query)
					.then((result) => {
						logging.info(
							NAMESPACE,
							`User with id ${result.insertId} inserted.`
						);
						return res.status(201).json(result);
					})
					.catch((error) => {
						logging.error(NAMESPACE, error.message, error);
						return res.status(500).json({
							message: error.message,
							error
						});
					});
			})
			.catch((error) => {
				logging.error(NAMESPACE, error.message, error);
				return res.status(500).json({
					message: error.message,
					error
				});
			});
	});
};

const login = (req: Request, res: Response, next: NextFunction) => {
	let { username, password } = req.body;

	let query = `SELECT * FROM users WHERE username = '${username}'`;

	Connect()
		.then((connection) => {
			Query<IUser[]>(connection, query)
				.then((users) => {
					bcryptjs.compare(password, users[0].password, (error, result) => {
						if (error) {
							return res.status(401).json({
								message: error.message,
								error
							});
						} else if (result) {
							signJWT(users[0], (_error, token) => {
								if (error) {
									return res.status(401).json({
										message: "Unable to sign JWT token",
										error: _error
									});
								} else if (token) {
									return res.status(200).json({
										message: "Authentication successful",
										token,
										user: users[0]
									});
								}
							});
						}
					});
				})
				.catch((error) => {
					logging.error(NAMESPACE, error.message, error);
					return res.status(500).json({
						message: error.message,
						error
					});
				});
		})
		.catch((error) => {
			logging.error(NAMESPACE, error.message, error);
			return res.status(500).json({
				message: error.message,
				error
			});
		});
};

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
	let query = `SELECT id, username FROM users`;

	Connect()
		.then((connection) => {
			Query<IUser[]>(connection, query)
				.then((users) => {
					return res.status(200).json({
						users,
						count: users.length
					});
				})
				.catch((error) => {
					logging.error(NAMESPACE, error.message, error);
					return res.status(500).json({
						message: error.message,
						error
					});
				});
		})
		.catch((error) => {
			logging.error(NAMESPACE, error.message, error);
			return res.status(500).json({
				message: error.message,
				error
			});
		});
};

export default { validateToken, register, login, getAllUsers };
