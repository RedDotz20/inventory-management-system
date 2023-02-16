import mysql from "mysql2";
import config from "./config";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createPool({
	host: config.mysql.host,
	user: config.mysql.user,
	password: config.mysql.password,
	database: config.mysql.database
});

export default connection.promise();
