import bcryptjs from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { RowDataPacket } from 'mysql2';
import nodeCache from 'node-cache';
import config from '../config/config';
import connection from '../config/connection';

const JWT_SECRET = config.server.token.secret;
const tokenCache = new nodeCache({ stdTTL: 300 });

async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username=?`;

    connection.execute(
      query,
      [username],
      async (error, user: RowDataPacket[]) => {
        if (error) throw error;

        if (user.length === 0) {
          console.log('Invalid username or password');
          return res.status(404).send('Invalid username or password');
        }
        const isPasswordValid = await bcryptjs.compare(
          password,
          user[0].password
        );
        if (isPasswordValid) {
          const token = jwt.sign({ id: user[0].id }, JWT_SECRET, {
            expiresIn: '1h',
          });
          console.log('User Authenticated Sucessfully');
          return res.json({ auth: true, token: token });
        } else {
          console.log('Invalid username or password');
          return res.status(404).send('Invalid username or password');
        }
      }
    );
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}

async function logout(req: Request, res: Response) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(400).json({ error: 'Token NOT Found' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { user: string };
    return res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password } = req.body,
      hashedPassword = await bcryptjs.hash(password, 10);

    const query = `INSERT INTO users (username, password) VALUES (?,?)`;
    await connection.execute(
      query,
      [username, hashedPassword],
      (error, result) => {
        if (error) throw error;
        res.status(201).json({ result });
        console.log('User Registered Successfully');
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}

async function createAdmin(hostName: string) {
  try {
    if (hostName === 'localhost') {
      const query = `INSERT INTO users (username, password)
				SELECT ?,? WHERE NOT EXISTS
				(SELECT * FROM users WHERE username = ?)`;

      const hashedPassword = await bcryptjs.hash('admin', 10);

      await connection.execute(
        query,
        ['admin', hashedPassword, 'admin'],
        (error, result: any) => {
          if (error) throw error;
          if (result.affectedRows === 1) {
            console.log('Admin Account Automatically Generated');
          } else {
            console.log('Admin Already Exists');
          }
        }
      );
    }
    return;
  } catch (error) {
    console.error(error);
  }
}

export default { login, logout, register, createAdmin };
