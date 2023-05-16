import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
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
        products p
        LEFT OUTER JOIN Item_codes ic ON ic.productId = p.productId
      GROUP BY 
        p.productId,
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
    const { productName, brandName, categoryName, unitName } = req.body;
    const productDetails = [productName, brandName, categoryName, unitName];
    console.log(productDetails);

    const query = `
    INSERT INTO products (productName, brandName, categoryName, unitName)
    SELECT ?,?,?,? WHERE NOT EXISTS (SELECT * FROM products WHERE productName = ?)`;

    await connection.execute(
      query,
      [...productDetails, productName],
      (error, results: RowDataPacket[]) => {
        const resultData = JSON.parse(JSON.stringify(results));
        if (error) {
          console.error(error);
          return res.status(500).json({
            message: 'An error occurred while inserting the product'
          });
        }

        if (resultData.affectedRows >= 1) {
          return res.status(201).json({
            message: 'New product inserted',
            insertedProduct: results[0]
          });
        } else {
          const errorMessage = 'The product already exists';
          console.error(errorMessage);
          return res.status(409).send(errorMessage);
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

async function deleteProducts(req: Request, res: Response) {
  try {
    const query = 'DELETE FROM products WHERE productId=?';
    await connection.execute(query, [req.query.id], (error) => {
      if (error) throw error;
      return res.status(201).json({ message: 'product deleted successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while inserting the product'
    });
  }
}

export default {
  getProducts,
  insertProducts,
  deleteProducts
};
