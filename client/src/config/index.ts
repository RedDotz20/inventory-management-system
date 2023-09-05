const SERVER_HOSTNAME = import.meta.env.VITE_SERVER_HOSTNAME ?? 'localhost';
const SERVER_PORT = parseInt(import.meta.env.VITE_SERVER_PORT, 10) || 4000;

const SERVER_URL = `http://${SERVER_HOSTNAME}:${SERVER_PORT}`;

export { SERVER_HOSTNAME, SERVER_PORT, SERVER_URL };
