const log = (
	level: "info" | "warn" | "error" | "debug",
	namespace: string,
	message: string,
	object?: any
) => {
	const prefix = `[${getTimeStamp()}] [${level.toUpperCase()}] [${namespace}] ${message}`;
	console[level](object ? [prefix, object] : prefix);
};

const getTimeStamp = (): string => new Date().toISOString();

export default {
	info: (namespace: string, message: string, object?: any) =>
		log("info", namespace, message, object),
	warn: (namespace: string, message: string, object?: any) =>
		log("warn", namespace, message, object),
	error: (namespace: string, message: string, object?: any) =>
		log("error", namespace, message, object),
	debug: (namespace: string, message: string, object?: any) =>
		log("debug", namespace, message, object)
};
