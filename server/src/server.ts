import app from "./app";
import config from "./config/config";
import logging from "./config/logging";
import createTables from "./models/_index";
import userAuth from "./controllers/userAuthService";

app.listen(config.server.port, async () => {
	await createTables()
		.then(() => userAuth.createAdmin(config.server.hostname))
		.catch((err) => console.error(err));
	logging.info(
		"Server",
		`Running on http://${config.server.hostname}:${config.server.port}`
	);
});
