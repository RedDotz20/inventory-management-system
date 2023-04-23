import { NextFunction, Request, Response } from 'express';
// import bcryptjs from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import config from '../config';
// import connection from '../config/connection';

async function verifyRefreshToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const refreshToken = req.cookies.refreshToken;
  console.log(req.cookies);

  try {
    if (refreshToken) {
      res.status(200).json({ message: 'Valid Refresh Token' });
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized / Invalid Refresh Token' });
    }
  } catch (err) {
    console.log(err);
  }
  console.log(refreshToken);
}

export default verifyRefreshToken;
