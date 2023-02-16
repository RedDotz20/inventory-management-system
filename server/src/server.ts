import app from "./app";
import config from "./config/config";
import logging from "./config/logging";

app.listen(config.server.port, () =>
	logging.info(
		"Server",
		`Server is running http://${config.server.hostname}:${config.server.port}`
	)
);
