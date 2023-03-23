import { Request, Response } from 'express';
import connection from '../../config/connection';

async function getProductUnits(req: Request, res: Response) {
  try {
    const query = `SELECT * FROM product_unit`;
    await connection.execute(query, (error, result) => {
      if (error) throw error;
      res.status(200).json({ productUnits: result });
      console.log('Product Units Loaded Successfully');
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An Error occurred while retrieving Product Units',
    });
  }
}

async function insertProductUnit(req: Request, res: Response) {
  try {
    const { unitName } = req.body;
    const query =
      'INSERT INTO product_unit (unitName) SELECT ? WHERE NOT EXISTS (SELECT * FROM product_unit WHERE unitName = ?);';
    await connection.execute(
      query,
      [unitName, unitName],
      (error, result: any) => {
        if (error) throw error;
        if (result.affectedRows === 1) {
          res.status(201).json({ message: 'New Unit Inserted', unit: result });
          console.log('Product Units Inserted Successfully');
        } else {
          res.status(409).send('Query Failed: Unit already exists');
          console.log('Query Failed: Unit already exists');
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An Error occurred while inserting Product Units',
    });
  }
}

export default { getProductUnits, insertProductUnit };
