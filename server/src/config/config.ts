import dotenv from "dotenv";

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";
const MYSQL_USER = process.env.MYSQL_USER || "root";
const MYSQL_PASS = process.env.MYSQL_PASS || "admin";
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "sad24_ims_system";

const MYSQL = {
	host: MYSQL_HOST,
	user: MYSQL_USER,
	password: MYSQL_PASS,
	database: MYSQL_DATABASE
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 4000;
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_PORT || 3600;
const SERVER_TOKEN_ISSUER = process.env.ISSUER || "coolIssuer";
const SERVER_TOKEN_SECRET = process.env.SECRET || "superencryptedsecret";

const SERVER = {
	hostname: SERVER_HOSTNAME,
	port: SERVER_PORT,
	token: {
		expireTime: SERVER_TOKEN_EXPIRETIME,
		issuer: SERVER_TOKEN_ISSUER,
		secret: SERVER_TOKEN_SECRET
	}
};

const config = {
	mysql: MYSQL,
	server: SERVER
};

export default config;
