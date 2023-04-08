import { Request, Response } from 'express';
import connection from '../../config/connection';

async function getAllUsers(req: Request, res: Response) {
  try {
    const query = `SELECT * FROM users`;
    await connection.execute(query, (error, result) => {
      if (error) throw error;
      res.status(200).json({ data: result });
      console.log('Users Data Loaded Successfully');
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An Error occurred while retrieving users'
    });
  }
}

export default { getAllUsers };
