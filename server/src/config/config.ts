import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const MYSQL = {
	host: process.env.MYSQL_HOST || "localhost",
	user: process.env.MYSQL_USER || "root",
	password: process.env.MYSQL_PASS || "admin",
	database: process.env.MYSQL_DATABASE || "sad24_ims_system"
};

const SERVER = {
	hostname: process.env.SERVER_HOSTNAME || "localhost",
	port: process.env.SERVER_PORT || 4000,
	token: {
		expireTime: process.env.SERVER_PORT || 3600,
		issuer: process.env.ISSUER || "coolIssuer",
		secret: process.env.SECRET || "superencryptedsecret"
	}
};

const config = {
	mysql: MYSQL,
	server: SERVER
};

export default config;
