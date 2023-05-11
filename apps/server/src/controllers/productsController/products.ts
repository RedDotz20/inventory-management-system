import { Request, Response } from 'express';
import connection from '../../config/connection';

async function getProducts(req: Request, res: Response) {
  try {
    const query = `
    SELECT 
      p.productId,
      p.productName,
      COUNT(ic.item_code) AS variants,
      p.brandName,
      p.categoryName, 
      p.unitName
    FROM 
      Item_codes ic
      LEFT JOIN products p ON ic.productId = p.productId
    GROUP BY 
      p.productName,
      p.brandName,
      p.categoryName, 
      p.unitName;
    `;

    await connection.execute(query, (error, result) => {
      if (error) throw error;
      res
        .status(201)
        .json({ message: 'Products Loaded Successfully', product: result });
      console.log('Products Loaded Successfully');
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An Error occurred while retrieving Products'
    });
  }
}

async function insertProducts(req: Request, res: Response) {
  try {
    const { productName, brand, categoryId, unitId, price } = req.body;
    const productDetails = [productName, brand, categoryId, unitId, price];

    const query = `INSERT INTO products (productName, brand, categoryId, unitId)
    SELECT ?,?,?,? WHERE NOT EXISTS (SELECT * FROM products WHERE productName = ?)`;

    await connection.execute(
      query,
      [...productDetails, productName],
      (error, rows) => {
        if (error) {
          console.error(error);
          res.status(500).json({
            message: 'An error occurred while inserting the product'
          });
          return;
        }

        if (rows.length >= 1) {
          res.status(201).json({
            message: 'New product inserted',
            insertedProduct: rows[0]
          });
        } else {
          const errorMessage = 'The product already exists';
          console.error(errorMessage);
          res.status(409).send(errorMessage);
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while inserting the product'
    });
  }
}

export default {
  getProducts,
  insertProducts
};
