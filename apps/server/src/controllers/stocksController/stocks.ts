import { Request, Response } from 'express';
import connection from '../../config/connection';

async function getStocks(req: Request, res: Response) {
  try {
    const query = `
		SELECT p.productName, ic.itemCodeId, s.stocksQuantity, ic.productId
		FROM item_codes ic
		JOIN products p ON ic.productId = p.productId
		JOIN stocks s ON ic.itemCodeId = s.itemCodeId;`;

    await connection.execute(query, (error, result) => {
      if (error) throw error;
      res.status(200).json({ stocks: result });
      console.log('Stocks Loaded Successfully');
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An Error occurred while retrieving stocks',
    });
  }
}

export default { getStocks };
