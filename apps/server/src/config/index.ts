import dotenv from 'dotenv';
dotenv.config({ debug: true, path: '../../../../.env' });

const MYSQL = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};

const SERVER = {
  hostname: process.env.SERVER_HOSTNAME,
  port: process.env.SERVER_PORT || 4000,
  token: {
    secret: process.env.SECRET_TOKEN || 'secretEncryptedToken',
    expireTime: process.env.SERVER_PORT || 3600,
    issuer: process.env.ISSUER || 'defaultIssuer'
  }
};

const CLIENT = {
  hostname: process.env.VITE_SERVER_HOSTNAME || 'localhost',
  port: process.env.VITE_SERVER_PORT || 4200
};

const config = {
  mysql: MYSQL,
  server: SERVER,
  client: CLIENT
};

export default config;
