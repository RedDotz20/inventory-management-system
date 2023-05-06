import { Request, Response } from 'express';
import connection from '../../config/connection';

async function getProductListOrder(req: Request, res: Response) {
  try {
    const query = `
      SELECT p.productName, p.brand,
      GROUP_CONCAT(DISTINCT i.item_code_id ORDER BY i.item_code_id ASC SEPARATOR ', ') AS item_code_ids,
      GROUP_CONCAT(DISTINCT i.item_code ORDER BY i.item_code ASC SEPARATOR ', ') AS item_codes,
      GROUP_CONCAT(DISTINCT i.variant ORDER BY i.variant ASC SEPARATOR ', ') AS variants,
      GROUP_CONCAT(DISTINCT i.price ORDER BY i.price ASC SEPARATOR ', ') AS prices,
      GROUP_CONCAT(DISTINCT i.stockQuantity ORDER BY i.stockQuantity ASC SEPARATOR ', ') AS stockQuantities
      FROM item_codes i
      JOIN products p ON i.productId = p.productId
      GROUP BY p.productName, p.brand;
    `;

    await connection.execute(query, (error, result) => {
      if (error) throw error;
      res.status(201).json({
        message: 'Product Lists Loaded Successfully',
        productLists: result
      });
      console.log('Product Lists Loaded Successfully');
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An Error occurred while retrieving Product Lists'
    });
  }
}

export default { getProductListOrder };
