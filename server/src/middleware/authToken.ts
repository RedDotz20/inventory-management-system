import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET =
	"f733fde34fd6bc39991a60b5b6d521cc0ca845d8cdfae0b5139e5c02668e6d33e73d4a4393bff46da658bda5fa6e53cbb4a40d087b06029ca6d1fd6127e0978e";

interface userReq extends Request {
	user?: string;
}

function verifyJWT(req: userReq, res: Response, next: NextFunction) {
	try {
		const token = req.headers.authorization?.split(" ")[1];
		if (!token) {
			return res
				.status(401)
				.json({ message: "Authentication Failed. Token not found" });
		}
		const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
		res.locals.user = decoded.user;
		res.send("Token verified successfully");
		next();
	} catch (err) {
		console.error(err);
		return res
			.status(401)
			.json({ message: "Authentication Failed. Invalid Token" });
	}
}

export default verifyJWT;
