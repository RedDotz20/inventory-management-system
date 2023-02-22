declare namespace NodeJS {
	interface ProcessEnv {
		HOST: string;
		USER: string;
		PASSWORD: string;
		DATABASE: string;
		SECRET_TOKEN: string;
	}
}
