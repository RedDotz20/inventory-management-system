import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser, { urlencoded } from "body-parser";
import { notFound, errorHandler } from "./middleware/index";
import logging from "./config/logging";
import path from "path";
import createError from "http-errors";

// import { check, validationResult } from "express-validator";
// import jwt from "jsonwebtoken";
// import connection from "./connection";
// import bcrypt from "bcryptjs";
// import { getUsers } from "./routes/users";

const NAMESPACE = "Server";
// const app = express();
const router = express();

router.use(cors());
router.use(express.json());

//* Parse the body of the request
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//* Log the request
router.use((req, res, next) => {
	/** Log the req */
	logging.info(
		NAMESPACE,
		`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
	);

	res.on("finish", () => {
		/** Log the res */
		logging.info(
			NAMESPACE,
			`METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
		);
	});
});

//* Rules of API
router.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);

	if (req.method == "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
	}

	next();
});

//* Routes
router.get("/test", (req: Request, res: Response) => {
	res.send("Hello world");
});

//! Error Handling
router.use((req, res, next) => {
	const error = new Error("Not found");

	res.status(404).json({
		message: error.message
	});
});

router.use(notFound);
router.use(errorHandler);

export default router;
