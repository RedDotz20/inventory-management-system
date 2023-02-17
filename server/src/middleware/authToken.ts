import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET =
	"f733fde34fd6bc39991a60b5b6d521cc0ca845d8cdfae0b5139e5c02668e6d33e73d4a4393bff46da658bda5fa6e53cbb4a40d087b06029ca6d1fd6127e0978e";

interface userReq extends Request {
	user?: string;
}

function authenticateToken(req: userReq, res: Response, next: NextFunction) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) return res.sendStatus(401);

	try {
		jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
			if (err) return res.sendStatus(403);
			req.user = user;
		});
		next();
	} catch {
		throw new Error("Invalid Token");
	}
}

export default authenticateToken;
