import { Request, Response } from 'express';
import connection from '../../config/connection';

async function getProducts(req: Request, res: Response) {
  try {
    const query = `
    SELECT 
      p.productId,
      ROW_NUMBER() OVER () AS rowNumber,
      p.productName,
      COUNT(ic.item_code) AS inventory,
      p.brand,
      pc.categoryName, 
      pu.unitName
    FROM 
      Item_codes ic
      LEFT JOIN products p ON ic.productId = p.productId
      LEFT JOIN product_category pc ON p.category_id = pc.category_id
      LEFT JOIN product_unit pu ON p.unit_id = pu.unit_id
    GROUP BY 
      p.productName,
      p.brand,
      pc.categoryName, 
      pu.unitName;
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
