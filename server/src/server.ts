import app from "./app";
import config from "./config/config";
import logging from "./config/logging";
import createTables from "./models/_index";

app.listen(config.server.port, async () => {
	await createTables();
	logging.info(
		"Server",
		`Running on http://${config.server.hostname}:${config.server.port}`
	);
});
