import app from "./app";
import config from "./config/config";
import logging from "./config/logging";

app.listen(config.server.port, () =>
	logging.info(
		"Server",
		`Running on http://${config.server.hostname}:${config.server.port}`
	)
);
