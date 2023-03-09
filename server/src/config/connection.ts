// import mysql from "mysql2";
import { Sequelize } from "sequelize";
import config from "./config";

const sequelize = new Sequelize(
	config.mysql.database,
	config.mysql.user,
	config.mysql.password,
	{
		host: config.mysql.host,
		dialect: "mysql",
	}
);

sequelize
	.authenticate()
	.then(() => console.log("Connected Successfully"))
	.catch(() => console.error("Connection Failed"));

sequelize.sync({ alter: true });

export default sequelize;

// const connection = mysql.createPool({
// 	host: config.mysql.host,
// 	user: config.mysql.user,
// 	password: config.mysql.password,
// 	database: config.mysql.database,
// });

// export default connection.promise();"
