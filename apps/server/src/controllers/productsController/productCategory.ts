import { Request, Response } from 'express';
import connection from '../../config/connection';

async function getProductCategory(req: Request, res: Response) {
  try {
    const query = `SELECT * FROM product_category`;
    await connection.execute(query, (error, result) => {
      if (error) throw error;
      res.status(201).json({
        message: 'Product Category Loaded Successfully',
        category: result,
      });
      console.log('Product Category Loaded Successfully');
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An Error occurred while retrieving Product Category',
    });
  }
}

async function insertProductCategory(req: Request, res: Response) {
  try {
    const { categoryName } = req.body;
    const query = `INSERT INTO product_category (categoryName)
    SELECT ? WHERE NOT EXISTS (SELECT * FROM product_category WHERE categoryName = ?);`;

    await connection.execute(
      query,
      [categoryName, categoryName],
      (error, result: any) => {
        if (error) throw error;
        if (result.affectedRows === 1) {
          res.status(201).json({ message: 'New Category Inserted', result });
        } else {
          res.status(409).send('Query Failed: Category already exists');
          console.log('Query Failed: Category already exists');
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An Error occurred while retrieving Product Category',
    });
  }
}

export default { getProductCategory, insertProductCategory };
