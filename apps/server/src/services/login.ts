import bcryptjs from 'bcryptjs';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import config from '../config';
import connection from '../config/connection';

const JWT_SECRET = config.server.token.secret;

async function login(req: Request, res: Response) {
  console.log(config.client.hostname);
  console.log(config.client.port);
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });

    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username=?`;

    await connection.execute(query, [username], async (error, user) => {
      if (error) throw error;
      if (user.length === 0) {
        console.log('Invalid username or password');
        return res.status(404).send('Invalid username or password');
      }

      const isMatched = await bcryptjs.compare(password, user[0].password);

      if (!isMatched) {
        console.log('Invalid username or password');
        return res
          .status(404)
          .json({ message: 'Invalid Username or Password' });
      }

      //? Generate Access Token
      const accessToken = jwt.sign(
        { id: user[0].id, username: user[0].username },
        JWT_SECRET,
        { expiresIn: '10m' }
      );

      //? Generate Refresh Token
      const refreshToken = jwt.sign({ id: user[0].id }, JWT_SECRET, {
        expiresIn: '7d'
      });

      const expirationTime =
        new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).getTime() / 1000; //* 7days

      //? Store Refresh Token inside of Cookie as httpOnly
      res.cookie('refreshToken', refreshToken, {
        httpOnly: false,
        secure: false, //TODO: Set to "TRUE" if deploying to production
        maxAge: expirationTime
      });

      //? Send Access Token as Response to store in Local storage
      res.status(200).json({
        accessToken,
        redirectURL: '/home/dashboard',
        refreshToken: refreshToken
      });
      console.log('User Authenticated Sucessfully');
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}

export default { login };
