import bcryptjs from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import connection from '../config/connection';

const JWT_SECRET = config.server.token.secret;

async function refreshToken(req: Request, res: Response) {
  const refreshToken = req.headers.cookie.match(/refreshToken=([^;]+)/)[1];
  // const refreshToken = req.cookies.refreshToken;

  if (!refreshToken)
    return res.status(401).json({ message: 'Refresh Token Not Found' });

  try {
    const decodedToken = jwt.verify(refreshToken, JWT_SECRET),
      { expiration } = decodedToken,
      currentTime = Math.floor(Date.now() / 1000);

    const query = 'SELECT * FROM users WHERE id = ?',
      [rows] = await connection.execute(query, [decodedToken.id]),
      user = rows[0];

    if (!user) return res.status(401).json({ message: 'User Not found' });

    const isMatched = await bcryptjs.compare(
      refreshToken,
      user.refreshTokenHash
    );

    if (!isMatched)
      return res.status(401).json({ message: 'Invalid Refresh Token' });

    if (expiration < currentTime) {
      return res.status(401).json({ message: 'Access Token has expired' });
    } else {
      const accessToken = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        {
          expiresIn: '10m'
        }
      );
      return res.status(201).json({ accessToken });
    }
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Invalid Refresh Token' });
  }
}

export default { refreshToken };
