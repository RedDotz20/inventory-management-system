import mysql from "mysql2";
import config from "./config";

const connection = mysql.createConnection({
	host: config.mysql.host || "localhost",
	user: config.mysql.user || "root",
	password: config.mysql.password || "admin",
	database: config.mysql.database || "mydatabase",
});

export default connection;
