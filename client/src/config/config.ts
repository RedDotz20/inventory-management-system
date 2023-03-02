const SERVER_HOSTNAME: string =
	import.meta.env.VITE_SERVER_HOSTNAME || "localhost";
const SERVER_PORT: string = import.meta.env.VITE_SERVER_PORT || 4000;

const SERVER_URL: string = `http://${SERVER_HOSTNAME}:${SERVER_PORT}`;

export { SERVER_HOSTNAME, SERVER_PORT, SERVER_URL };
