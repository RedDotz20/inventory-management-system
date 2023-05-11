import { Request, Response } from 'express';
import connection from '../../config/connection';

async function getItemCodes(req: Request, res: Response) {
  try {
    const query = `
    SELECT 
      ic.item_code_id, 
      p.productName,
      ic.variant,
      ic.item_code,
      p.brand,
      pc.categoryName, 
      pu.unitName
    FROM 
      Item_codes ic
      LEFT JOIN products p ON ic.productId = p.productId
      LEFT JOIN product_category pc ON p.category_id = pc.category_id
      LEFT JOIN product_unit pu ON p.unit_id = pu.unit_id;`;

    await connection.execute(query, (error, results) => {
      if (error) throw error;
      res
        .status(201)
        .json({ message: 'Items Loaded Successfully', product: results });
      console.log('Items Loaded Successfully');
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An Error occurred while retrieving Products'
    });
  }
}

export default { getItemCodes };
