import bcryptjs from 'bcryptjs';
import { Request, Response } from 'express';
import connection from '../config/connection';

async function register(req: Request, res: Response) {
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
    res.status(500).json({ message: error });
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
        (error, rows) => {
          if (error) throw error;
          if (rows.length === 1) {
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

export default { register, createAdmin };
