import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';

interface userReq extends Request {
  user?: string;
}

const JWT_SECRET = config.server.token.secret;

function verifyJWT(req: userReq, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: 'Authentication Failed. Token not found' });
    }
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    res.locals.user = decoded.user;
    res.send('Token verified successfully');
    next();
  } catch (err) {
    console.error(err);
    return res
      .status(401)
      .json({ message: 'Authentication Failed. Invalid Token' });
  }
}

export default verifyJWT;
