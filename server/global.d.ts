declare namespace NodeJS {
	interface ProcessEnv {
		MYSQL_HOST: string;
		MYSQL_USER: string;
		MYSQL_PASSWORD: string;
		MYSQL_DATABASE: string;

		SERVER_HOSTNAME: string;
		SERVER_PORT: number;
		SECRET_TOKEN: string;
	}
}
