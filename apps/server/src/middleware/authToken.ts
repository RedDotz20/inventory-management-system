import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

const app = express();

app.use(cookieParser());
app.use(express.json());

interface userReq extends Request {
  user: string;
}

const JWT_SECRET = config.server.token.secret;

const verifyAccessToken = async (
  req: userReq,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const accessToken = authHeader && authHeader.split(' ')[1];
  const refreshToken = req.cookies.refreshToken;
  console.log(req.cookies);

  if (!accessToken)
    return res.status(401).json({ message: 'Access Token Not Found' });

  console.log(req.cookies);

  if (!refreshToken)
    return res
      .status(401)
      .json({ message: 'Unauthorized, Refresh Token Not Found' });

  try {
    //* verify the access token
    const decodedAccessToken = jwt.verify(accessToken, JWT_SECRET);

    //* check if the refresh token is still valid and has not expired
    const decodedRefreshToken = jwt.verify(refreshToken, JWT_SECRET, {
      ignoreExpiration: true
    });

    if (
      !decodedRefreshToken ||
      !decodedRefreshToken.sub ||
      decodedRefreshToken.sub !== decodedAccessToken.sub
    ) {
      return res.status(401).json({ message: 'Refresh Token Invalid' });
    }

    //* check if the refresh token is expired
    if (decodedRefreshToken.exp <= Date.now() / 1000) {
      return res
        .status(401)
        .json({ message: 'Refresh Token Expired', redirectURL: '/login' });
    }

    //* set the user object on the request and move on to the next middleware
    req.user = decodedAccessToken;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      //* return a new access token if the old one has expired
      const payload = jwt.decode(accessToken, { complete: true }).payload;
      const newAccessToken = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '10m'
      });
      res.setHeader('Authorization', `Bearer ${newAccessToken}`);
      res.setHeader('accessToken', newAccessToken);
      return res.status(401).json({ message: 'Access Token Expired' });
    } else {
      return res.status(403).json({ message: 'Access Token Invalid' });
    }
  }
};

export default verifyAccessToken;

// jwt.verify(accessToken, JWT_SECRET, (err, user) => {
//   if (err) {
//     //? Returns 401 Unauthorized
//     if (err.name === 'TokenExpiredError') {
//       const payload = jwt.decode(accessToken, { complete: true }).payload;
//       const newAccessToken = jwt.sign(payload, JWT_SECRET, {
//         expiresIn: '10m'
//       });
//       res.setHeader('Authorization', `Bearer ${newAccessToken}`);
//       res.setHeader('accessToken', newAccessToken);
//       // return res.status(401).send({ message: 'Access token has expired' });
//     }
//     return res.status(403).send({ message: 'Access token is invalid' });
//   }
//   req.user = user;
//   next();
// });
