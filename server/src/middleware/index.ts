import { Request, Response, NextFunction } from "express";

export function notFound(req: Request, res: Response, next: NextFunction) {
	res.status(404);
	const error = new Error("404 Not Found");
	next(error);
}

export function errorHandler(
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	res.status(res.statusCode || 500);
	res.json({
		message: error.message,
		stack: error.stack,
	});
}
