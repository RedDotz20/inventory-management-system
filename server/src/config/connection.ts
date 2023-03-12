import { Sequelize } from "sequelize";
import config from "./config";

const sequelize: Sequelize = new Sequelize(
	config.mysql.database || "mydatabase",
	config.mysql.user || "root",
	config.mysql.password || "admin",
	{
		host: config.mysql.host || "localhost",
		dialect: "mysql",
	}
);

sequelize
	.authenticate()
	.then(() => console.log("Connected Successfully"))
	.catch(() => console.error("Connection Failed"));

export default sequelize;
