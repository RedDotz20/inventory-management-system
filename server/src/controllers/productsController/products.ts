import { Request, Response } from 'express';
import connection from '../../config/connection';

async function getProducts(req: Request, res: Response) {
  try {
    const query = `
		SELECT p.productId, p.productName, p.brand, pc.categoryName, pu.unitName,
		GROUP_CONCAT(ic.itemCodes) as itemCodes, p.price
		FROM products p
		LEFT JOIN product_category pc ON p.categoryId = pc.categoryId
		LEFT JOIN product_unit pu ON p.unitId = pu.unitId
		LEFT JOIN item_codes ic ON p.productId = ic.productId
		GROUP BY p.productId;`;

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
      message: 'An Error occurred while retrieving Products',
    });
  }
}

async function insertProducts(req: Request, res: Response) {
  try {
    const { productName, brand, categoryId, unitId, price } = req.body;
    const requests = [productName, brand, categoryId, unitId, price];

    const query = `INSERT INTO products (productName, brand, categoryId, unitId, price)
		SELECT ?,?,?,?,? WHERE NOT EXISTS (SELECT * FROM products WHERE productName = ?)`;

    await connection.execute(
      query,
      [...requests, productName],
      (error, result: any) => {
        if (error) throw error;
        if (result.affectedRows === 1) {
          res
            .status(201)
            .json({ message: 'New Product Inserted', insertedProduct: result });
        } else {
          res.status(409).send('Query Failed: Product already exists');
          console.log('Query Failed: Product already exists');
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An Error occurred while retrieving Products',
    });
  }
}

async function productNameASC(req: Request, res: Response) {
  try {
    const query = `SELECT * FROM products ORDER BY productName ASC`;
    await connection.execute(query, (error, result) => {
      if (error) throw error;
      res
        .status(200)
        .json({ message: 'Products Sorted by Name ASC', productName: result });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An Error occurred while retrieving sorting products ASC',
    });
  }
}

async function productNameDESC(req: Request, res: Response) {
  try {
    const query = `SELECT * FROM products ORDER BY productName DESC`;
    await connection.execute(query, (error, result) => {
      if (error) throw error;
      res
        .status(200)
        .json({ message: 'Products Sorted by Name DESC', productName: result });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An Error occurred while retrieving sorting products DESC',
    });
  }
}

async function productBrandASC(req: Request, res: Response) {
  try {
    const query = `SELECT * FROM products ORDER BY brand ASC`;
    await connection.execute(query, (error, result) => {
      if (error) throw error;
      res.status(200).json({
        message: 'Products Sorted by brand ASC',
        brand: result,
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An Error occurred while retrieving sorting brands ASC',
    });
  }
}

async function productBrandDESC(req: Request, res: Response) {
  try {
    const query = `SELECT * FROM products ORDER BY brand DESC`;
    await connection.execute(query, (error, result) => {
      if (error) throw error;
      res.status(200).json({
        message: 'Products Sorted by brand DESC',
        brand: result,
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An Error occurred while retrieving sorting brands DESC',
    });
  }
}

export default {
  getProducts,
  insertProducts,
  productNameASC,
  productNameDESC,
  productBrandASC,
  productBrandDESC,
};
