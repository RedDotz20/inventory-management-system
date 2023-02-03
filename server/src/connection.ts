import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const con = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

export default con;
