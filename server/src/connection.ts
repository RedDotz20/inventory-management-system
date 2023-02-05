import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const con = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "admin",
	database: "sad24_ims_system",
});

export default con;
