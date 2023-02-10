import http from "http";
import router from "./app";
import dotenv from "dotenv";
import config from "./config/config";
import logging from "./config/logging";
dotenv.config();

// const PORT = process.env.PORT || 3000;

// router.listen(PORT, () => {
// 	console.log(`Server Connected Successfully on http://localhost:${PORT}`);
// });

const NAMESPACE = "Server";

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () =>
	logging.info(
		NAMESPACE,
		`Server is running ${config.server.hostname}:${config.server.port}`
	)
);
